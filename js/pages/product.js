import { capitalize, shortenText } from '../util.js';
import { loadData } from '../api.js';
import { addToBasket } from '../basket.js';

/**
 * @typedef {Object} Rating
 * @property {number} rate
 * @property {number} count
 *
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {Rating} rating
 */
async function createProduct(main) {
  const productId = Number(new URLSearchParams(window.location.search).get('pid'));
  if (!productId) {
    console.error('No productId found for productId page.');
  }

  // Load and filter product
  const url = '/assets/products/all.json';
  /** @type {Product[]} */
  const products = await loadData(url);
  /** @type {Product | undefined} */
  const product = products.find((p) => p.id === productId);
  console.debug(JSON.stringify(product, null, 2));
  document.title = capitalize(shortenText(product?.title, 25));

  const productImg = main.querySelector('#product-image');
  productImg.setAttribute('src', product.image);
  productImg.setAttribute('alt', product.title);

  const productTitles = main.querySelectorAll('.product__title');
  productTitles.forEach((productTitle) => {
    productTitle.innerHTML = product.title;
  });

  const productPrize = main.querySelector('#product-price');
  productPrize.innerHTML = `${product.price.toFixed(2)} €`;

  const productRating = main.querySelector('#product-rating');
  const productRatingRate = product.rating.rate || 0;
  const productRatingCount = product.rating.count || 0;
  productRating.setAttribute('data-rating-rate', productRatingRate);
  productRating.setAttribute('data-rating-count', productRatingCount);
  productRating.setAttribute('style', `--rating: ${productRatingRate};`);
  productRating.setAttribute('aria-label', `This product was rated by ${productRatingCount} customers. The overall rating is ${productRatingRate} out of 5.`);
  productRating.innerHTML = `(${productRatingCount})`;

  const productDescriptionShort = main.querySelector('#product-description-short');
  productDescriptionShort.innerHTML = product.description.substring(0, product.description.indexOf('.') + 1);

  const productDescription = main.querySelector('#product-description');
  productDescription.innerHTML = product.description;

  const button = main.querySelector('#product-add-to-cart');
  button.setAttribute('product-id', product.id);
  button.addEventListener('click', () => addToBasket(product.id));
}

createProduct(document.getElementById('product-main')).then(() => {
  console.debug('Basket loaded.');
});
