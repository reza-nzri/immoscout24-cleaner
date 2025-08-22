// ==UserScript==
// @name         ImmoScout24 – Tausch & Gesponsert ausblenden + Log
// @namespace    https://immobilienscout24.de/
// @version      6.2
// @description  Blendet "Tauschwohnung" & "Gesponsert"-Anzeigen aus und zeigt ausgeblendete als Array in der Konsole
// @author       Reza Nazari
// @match        https://www.immobilienscout24.de/Suche/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const keywords = ["tauschwohnung"];
    let debounceTimer;

    function filterListings() {
        let hiddenTausch = 0;
        let hiddenGesponsert = 0;
        const logList = [];

        // 🔹 Tausch-Anzeigen
        document.querySelectorAll('h2[data-testid="headline"]').forEach(h2 => {
            const title = h2.textContent.trim();
            const lowerTitle = title.toLowerCase();
            const card = h2.closest('a[href*="/expose/"]')?.parentElement?.parentElement;
            const url = h2.closest('a[href*="/expose/"]')?.href || null;

            if (card && keywords.some(kw => lowerTitle.includes(kw))) {
                if (card.style.display !== 'none') {
                    card.style.display = 'none';
                    hiddenTausch++;
                    logList.push({ type: "Tausch", title, link: url });
                }
            }
        });

        //Gesponsert-Anzeigen
        document.querySelectorAll('div[data-testid="touchpoint-card"]').forEach(touchpoint => {
            const sponsoredLabel = touchpoint.querySelector('div.font-xs.font-lightgray');
            if (sponsoredLabel && sponsoredLabel.textContent.trim().toLowerCase() === 'gesponsert') {
                if (touchpoint.style.display !== 'none') {
                    touchpoint.style.display = 'none';
                    const title = touchpoint.querySelector('[data-testid="desc-title-text-touchpoint-hs"]')?.textContent?.trim() || "(Ohne Titel)";
                    const url = touchpoint.querySelector('a')?.href || null;
                    hiddenGesponsert++;
                    logList.push({ type: "Gesponsert", title, link: url });
                }
            }
        });

        // Einfaches Array-Log
        if (logList.length > 0) {
            console.info(`🔍 ${hiddenTausch} Tausch-Anzeigen + ${hiddenGesponsert} Gesponsert-Anzeigen ausgeblendet.`);
            console.log(logList);
        }
    }

    function debouncedFilter() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(filterListings, 300);
    }

    // Start
    setTimeout(() => {
        debouncedFilter();
        const observer = new MutationObserver(debouncedFilter);
        observer.observe(document.body, { childList: true, subtree: true });
    }, 1200);
})();
