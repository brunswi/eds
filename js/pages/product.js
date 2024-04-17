import {capitalize, shortenText} from "../util.js";
import {loadData} from "../api.js";
import {addToBasket} from "../basket.js";

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
    const productId = Number(new URLSearchParams(window.location.search).get("pid"));
    if (!productId) {
        console.error("No productId found for productId page.")
    }

    // Load and filter product
    const url = "/assets/products/all.json"
    /** @type {Product[]} */
    const products = await loadData(url);
    /** @type {Product | undefined} */
    const product = products.find((product) => product.id === productId);
    document.title = capitalize(shortenText(product?.title, 25));

    const productImg = main.querySelector("#product-image");
    productImg.setAttribute("src", product.image);
    productImg.setAttribute("alt", product.title);

    const productTitles = main.querySelectorAll(".product__title");
    for (const productTitle of productTitles) {
        productTitle.innerHTML = product.title;
    }

    const productPrize = main.querySelector("#product-price");
    productPrize.innerHTML = product.price.toFixed(2) + " €";

    const productDescriptionShort = main.querySelector("#product-description-short");
    productDescriptionShort.innerHTML = product.description.substring(0, product.description.indexOf('.') + 1);

    const productDescription = main.querySelector("#product-description");
    productDescription.innerHTML = product.description;

    const button = main.querySelector("#product-add-to-cart");
    button.setAttribute("product-id", product.id);
    button.addEventListener('click', () => addToBasket(product.id));

    console.debug(JSON.stringify(product, null, 2));


}

createProduct(document.getElementById("product-main")).then(() => {
    console.debug("Basket loaded.")
});
