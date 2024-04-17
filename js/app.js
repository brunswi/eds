import {loadFooter, loadHeader, setupTheme} from "./blocks/base.js";

// Adapted from
// https://github.com/adobe/aem-boilerplate/blob/main/scripts/scripts.js

/**
 * Loads everything needed for the initial page.
 * @param {Document} doc The container element
 */
async function loadInitial(doc) {
    document.documentElement.lang = 'en';

    await loadHeader(doc.querySelector('header'));
    await loadFooter(doc.querySelector('footer'));
    await setupTheme(doc.getElementById('theme-switcher'));

    // Scroll into anchor view
    const {hash} = window.location;
    const element = hash ? doc.getElementById(hash.substring(1)) : false;
    if (hash && element) {
        element.scrollIntoView();
    }
}

/**
 * Loads data lazily.
 * @param {Document} doc The container element
 */
function loadLazy(doc) {
    // e.g load blogposts etc
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
    window.setTimeout(() => import('./delayed.js'), 3000);
    // load anything that can be postponed to the latest here
}

async function loadPage() {
    await loadInitial(document);
    loadLazy(document);
    loadDelayed();
}

loadPage().then(() => {
    console.debug("Page loaded.")
});
