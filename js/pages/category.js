import { loadData } from '../api.js';
import { capitalize } from '../util.js';

async function createCategory(main) {
  const category = new URLSearchParams(window.location.search).get('category');
  const isSingle = category !== null;
  document.title = !isSingle ? 'Categories' : capitalize(category);

  // Setup Category Headline
  const headline = main.querySelector('#category-main .content h1');
  headline.textContent = isSingle ? `All ${category} products` : 'All products';

  // load data non-blocking;
  // https://fakestoreapi.com/docs
  // https://github.com/keikaavousi/fake-store-api/issues/46
  // -> downloaded all to serve from local, except for images

  const url = isSingle ? `/assets/products/${category}.json` : '/assets/products/all.json';
  const products = await loadData(url);

  const productsSection = document.getElementById('products');
  await Promise.all(products.map(async (p) => {
    productsSection.appendChild(await createProductTeaser(p));
  }));
}

async function createProductTeaser(product) {
  const productTeaser = document.createElement('div');
  productTeaser.classList.add('product-teaser');

  const anchor = document.createElement('a');
  anchor.href = `/pages/product.html?pid=${product.id}`;
  const headlineAnchor = anchor.cloneNode();
  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.title;
  image.loading = 'lazy';
  anchor.appendChild(image);
  productTeaser.appendChild(anchor);

  const title = document.createElement('h3');
  title.textContent = product.title;
  headlineAnchor.appendChild(title);
  productTeaser.appendChild(headlineAnchor);

  const price = document.createElement('span');
  price.classList.add('price');
  price.textContent = `${product.price.toFixed(2)} €`;
  productTeaser.appendChild(price);

  return productTeaser;
}

createCategory(document.getElementById('category-main')).then(() => {
  console.debug('Category loaded.');
});
