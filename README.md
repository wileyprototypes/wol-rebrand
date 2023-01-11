# WOL Rebrand Test Styles

These styles provide colleagues the ability to preview most of the requested brand updates to WOL's global styles on the live, public-facing version of Wiley Online Library. 
This proof-of-concept helps to:
1. Validate the proposed scope and expected effort and risk of changes (i.e. mostly CSS changes, mostly low-risk style changes)
2. Understand how changes will impact pages and components not covered by the Figma comps (i.e. custom hubs that inherit global styles, widgets with inline styles, etc.)
3. Identify and address gaps in style guidance
4. Prove out how a temporary CSS override file might incrementally improve the look-and-feel of Wiley Online Library

## How to install

1. Download and install the Chrome Add-on [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en)
2. In a new Chrome tab, navigate to a page on Wiley Online Library
3. Click the Chrome add-on icon for User Javascript and CSS, and click the "Add New" button
4. Give your rule a name, and change the "https://onlinelibrary.wiley.com" URL scope to "\*onlinelibrary.wiley.com"
5. In a separate tab, navigate to the Github project and then to the file ending in ".css"
6. Click the "Copy Raw Contents" (two overlapping boxes) icon in the upper-right of the code area
7. Back in your custom style rules, paste the contents of the CSS into righthand, "CSS" labeled box
8. Repeat this process for the file ending in ".js", pasting it into the lefthand, "JS" labeled box
9. Save your custom rule
10. Navigate to/refresh a new page on Wiley Online Library, and observe the new styles being applied


## Technical considerations
- Most core global styles on Wiley Online Library are managed and compiled by the Literatum development team as part of the build process, using SCSS.
- Most anticipated updates (e.g. change dusty blue to virbant blue) are likely simple updates to the core SCSS file, and the best long-term approach will be to address these styles within the build
- All styles inside of this stylesheet are prepended with "html" in the selector to create a more specific CSS scope. This helps instruct the browser to treat the updated styles as higher precedent, overriding the core styles. This allows us to preview the expected style-only changes, and allows us to possibly ship style overrides via a page builder CSS file until a build can be delivered. 
- When incorporating these styles back into any core CSS files, it is not recommended to keep the extra "html" node selector.
