import { createHeader } from './header.js';
import { createFooter } from './footer.js';

/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 * @returns {Promise}
 */
async function loadHeader(header) {
  return createHeader(header);
}

/**
 * Loads a block named 'footer' into footer
 * @param footer footer element
 * @returns {Promise}
 */
async function loadFooter(footer) {
  return createFooter(footer);
}

async function setupTheme(themeSwitcher) {
  // set default theme
  const cachedTheme = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', cachedTheme || 'light');

  // setup theme-switcher button
  if (themeSwitcher) {
    themeSwitcher.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
}

export {
  loadHeader,
  loadFooter,
  setupTheme,
};
