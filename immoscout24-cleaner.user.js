// ==UserScript==
// @name         ImmoScout24 – Hide "Tauschwohnung" & Sponsored cards + Log
// @namespace    https://immobilienscout24.de/
// @version      6.3
// @description  Hides listings containing "Tauschwohnung" keywords and any sponsored ("Gesponsert") cards; logs hidden items as an array.
// @author       Sasha
// @match        https://www.immobilienscout24.de/Suche/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Keywords to detect swap/exchange listings by headline text
    const TAUSCH_KEYWORDS = ["tauschwohnung", "wohnungstausch"];

    // Accepted label texts for sponsored content (case-insensitive)
    const SPONSORED_TEXTS = ["gesponsert", "sponsored"];

    let debounceTimer;

    function filterListings() {
        let hiddenTausch = 0;
        let hiddenSponsored = 0;
        const logList = [];

        // 🔹 1) Hide "Tauschwohnung" style listings based on the H2 headline
        document.querySelectorAll('h2[data-testid="headline"]').forEach(h2 => {
            const title = h2.textContent.trim();
            const lowerTitle = title.toLowerCase();

            // Typical card structure: <a href="/expose/...">...</a> up the tree to the card container
            const card = h2.closest('a[href*="/expose/"]')?.parentElement?.parentElement;
            const url = h2.closest('a[href*="/expose/"]')?.href || null;

            if (card && TAUSCH_KEYWORDS.some(kw => lowerTitle.includes(kw))) {
                if (card.style.display !== 'none') {
                    // We use display:none here (not remove) to avoid layout shifts for non-sponsored items
                    card.style.display = 'none';
                    hiddenTausch++;
                    logList.push({ type: "Tausch", title, link: url });
                }
            }
        });

        // 🔹 2) Hide Sponsored cards:
        //    We detect both legacy and new markup:
        //    - Legacy label: div.font-xs.font-lightgray
        //    - New label:    div.font-body-small-regular
        //    The card container is usually:
        //    - [data-testid="touchpoint-hs"]  (new)
        //    - [data-testid="touchpoint-card"] (legacy)
        document.querySelectorAll('div.font-body-small-regular, div.font-xs.font-lightgray').forEach(label => {
            const text = label.textContent?.trim().toLowerCase();
            if (!text || !SPONSORED_TEXTS.includes(text)) return;

            const card =
                label.closest('[data-testid="touchpoint-hs"], [data-testid="touchpoint-card"]')
                // Fallback: try a bit higher if testid is missing for any reason
                || label.closest('.touchpoint-HybridSearchTouchpointC3__hybridSearchTouchpointContainer--02vKs');

            if (card) {
                const title =
                    card.querySelector('[data-testid="desc-title-text-touchpoint-hs"], [data-testid="result-list-entry__brand-title"], .font-bold')?.textContent?.trim()
                    || "(Ohne Titel)";
                const url = card.querySelector('a[href]')?.href || null;

                // Remove sponsored cards entirely
                card.remove();
                hiddenSponsored++;
                logList.push({ type: "Gesponsert", title, link: url });
            }
        });

        // 🔹 Console summary & details
        if (logList.length > 0) {
            console.info(`🔍 Hidden: ${hiddenTausch} Tausch listings + ${hiddenSponsored} Sponsored cards.`);
            console.log(logList);
        }
    }

    function debouncedFilter() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(filterListings, 300);
    }

    // Bootstrap: run once after initial load, then observe for dynamic updates
    setTimeout(() => {
        debouncedFilter();
        const observer = new MutationObserver(debouncedFilter);
        observer.observe(document.body, { childList: true, subtree: true });
    }, 1200);
})();
