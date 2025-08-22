# <img src="logo-1.png" alt="ImmoScout24 Cleaner Logo" width="25px" style="border-radius:5px; vertical-align:middle;"> **ImmoScout24 Cleaner**

Tampermonkey / Greasemonkey userscript that automatically hides **sponsored (Gesponsert)** ads and **swap offers (Tauschwohnung)** on ImmoScout24, giving you a cleaner and distraction-free search experience.  

<details>
<summary><h2>🖥 Demo</h2></summary>

<img width="1184" height="367" alt="Demo Screenshot - ImmoScout24 Cleaner 1" src="https://github.com/user-attachments/assets/c5bd7b70-a238-4004-8d35-e980c7cf91a2" />

<details>
  <summary><h3>Explained</h3></summary>
This userscript removes unwanted cards in the ImmoScout24 search results:  

* **Sponsored ads (Gesponsert)** → hidden automatically.  
* **Swap offers (Tauschwohnung)** → filtered by keywords.  
* A console log shows the number of hidden items and their titles/links, so you know what was filtered out.  

**In short:** you see only **relevant listings** without clutter.  
</details>
</details>

<details>
<summary><h2>💡 Why & Benefits</h2></summary>

- Save time by removing **irrelevant sponsored listings**.  
- Focus only on real apartments, not swap ads or paid promotions.  
- Keep search results **clean and distraction-free**.  
- Lightweight script, no external dependencies, works instantly.  

</details>

<details>
<summary><h2>✨ Features</h2></summary>

- Auto-hide **“Gesponsert”** listings.  
- Auto-hide **“Tauschwohnung”** swap offers.  
- Works with infinite scroll and dynamic content via MutationObserver.  
- Console output with a list of hidden cards for quick auditing.  
- No configuration required (defaults work out of the box).  

</details>

<details>
<summary><h2>⚙️ Installation</h2></summary>

1. Install [Tampermonkey](https://www.tampermonkey.net/) (or any compatible userscript manager).  
2. [Click here to install the script](./immoscout24-cleaner.user.js)  
   *(or copy & paste the code into a new Tampermonkey script).*  
3. Open [ImmoScout24 search pages](https://www.immobilienscout24.de/).  
4. Sponsored ads and swap offers will now be hidden automatically.  
5. Open DevTools → **Console** to see a summary of what was filtered.  

</details>

<details>
<summary><h2>🔧 Configuration</h2></summary>

Inside the script you can adjust:  

- **Keywords** for filtering (default: `["tauschwohnung"]`).  
- **Selectors** for headline and sponsored labels (update if ImmoScout24 changes markup).  
- **Debounce timing** for filtering after DOM changes.  

</details>

<details>
<summary><h2>❓ FAQ for SEO</h2></summary>

<details>
<summary><h3>🔹 How to hide sponsored ads on ImmoScout24?</h3></summary>
The <b>ImmoScout24 Cleaner</b> userscript automatically hides all <b>Gesponsert</b> (sponsored) listings from search results, giving you a clean view of real offers.
</details>

<details>
<summary><h3>🔹 How to remove Tauschwohnung (swap) listings on ImmoScout24?</h3></summary>
<b>ImmoScout24 Cleaner</b> filters any listing headline containing <b>Tauschwohnung</b> and hides the card. You can add more keywords if needed.
</details>

<details>
<summary><h3>🔹 Does ImmoScout24 Cleaner work with infinite scroll?</h3></summary>
Yes. It uses a <b>MutationObserver</b> to automatically re-scan the page and hide new sponsored/swap listings as you scroll.
</details>

<details>
<summary><h3>🔹 How can I check what was hidden?</h3></summary>
Open DevTools → <b>Console</b>. You will see a summary count and a list of hidden cards (with type, title, and link).
</details>

<details>
<summary><h3>🔹 Is ImmoScout24 Cleaner safe?</h3></summary>
Yes. The script runs locally in your browser through Tampermonkey. No data is sent anywhere.
</details>

<details>
<summary><h3>🔹 What if ImmoScout24 updates their layout and the script stops working?</h3></summary>
Selectors may need to be updated. You can edit the userscript or open a GitHub issue / pull request to fix it.
</details>

<details>
<summary><h2>🔑 SEO Keywords</h2></summary>

immoscout24 cleaner, immoscout24 hide sponsored, immoscout24 gesponsert entfernen, immoscout24 tauschwohnung ausblenden, immoscout24 filter script, tampermonkey immoscout24, userscript immoscout24, remove ads immoscout24, immoscout24 search cleaner, immobilienscout24 sponsored ads, immobilienscout24 tausch wohnung, hide ads immobilienscout24, greasemonkey real estate filter, immobiliensuche script, immobilienscout24 filter plugin

</details>
</details>

<details>
<summary><h3>⚠️ Disclaimer</h3></summary>

This project is created **for educational and personal learning purposes only**.  
It is not affiliated with, endorsed by, or connected to **ImmoScout24** or its parent companies.  
Use at your own risk. The author assumes no responsibility for any consequences arising from the use of this script.
</details>

### 🤝 Contributing

Contributions, bug reports, and feature ideas are welcome!  

[![Reza Nazari](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/127698692?v=4&w=35&h=35&mask=circle)](https://github.com/reza-nzri)
