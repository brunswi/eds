import {updateBadge} from "../basket.js";

/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 */
async function createHeader(header) {
    header.innerHTML = `
<div class="hamburger-menu">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
<div class="logo">
  <a class="logo logo__link" href="/">
    <img class="logo logo__img" src="/assets/venia-logo.svg" alt="logo" width="80" height="16">
  </a>
</div>
<nav>
  <ul>
    <li><a class="nav__item nav__item--active" href="/">Home</a></li>
    <li><a class="nav__item" href="/pages/category.html?category=women">Women</a></li>
    <li><a class="nav__item" href="/pages/category.html?category=men">Men</a></li>
    <li><a class="nav__item" href="/pages/category.html?category=electronics">Electronics</a></li>
    <li><a class="nav__item" href="/pages/category.html?category=jewelery">Jewelery</a></li>
    <li><a class="nav__item" href="/pages/category.html">All</a></li>
  </ul>
</nav>
<a class="basket-badge" href="/pages/basket.html" aria-label="Basket"></a>

  `;

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', function () {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
    updateBadge();
}

export {
    createHeader
}
