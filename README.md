# WOL Rebrand - Live POC styles
This project contains test CSS files and JavaScript that, when applied to the live version of Wiley Online Library, demonstrate how the upcoming brand updates will look.

##Installation instructions##
1. Download the [User Javascript and CSS Chrome Add-on](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en)
2. Navigate to a page on Wiley Online Library
3. Click the Add-on's button and then "+ Add new"
4. Under **Name**, set it as something like "Wiley Online Library 2023 brand updates"
5. Under **The URL pattern** replace any default pattern with: `*onlinelibrary.wiley.com, !*onlinelibrary.wiley.com/doi/epdf*`
6. Under **JavaScript** copy and paste this code:
```
const script = document.createElement('script');
script.src = 'https://wileyprototypes.github.io/wol-rebrand/polish-updates.js';
document.head.appendChild(script);
```
6. Under **CSS** copy and paste this code:
```
@import url(https://wileyprototypes.github.io/wol-rebrand/blue-updates.css);
@import url(https://wileyprototypes.github.io/wol-rebrand/polish-updates.css);
```
7. Save and close the Add-on tab. 
8. Back on Wiley Online Library, click the add-on button and ensure that your new rule is toggled on. Then, refresh the page you are looking at.
