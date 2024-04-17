/**
 * @param {number} productId
 */
function addToBasket(productId) {
    const productIds = loadBasket();
    productIds.push(productId);
    productIds.sort();
    saveBasket(productIds);
}

const basketKey = 'basket';

/**
 * @returns {number[]}
 */
function loadBasket() {
    let storedBasket = localStorage.getItem(basketKey);
    if (!storedBasket) {
        storedBasket = [];
        saveBasket(storedBasket);
    } else {
        storedBasket = JSON.parse(storedBasket);
    }
    return storedBasket;
}

/**
 * Calculates the count of each unique number in an array and return a new
 * array where each item is an object with the 'id' representing the unique
 * number and 'count' from that number.
 *
 * @returns {{id: number, count: number}[]} - The result array consisting of
 * objects with 'id' and 'count' properties.
 */
function loadBasketCount() {
    const productIds = loadBasket();
    const count = {};
    for (let i = 0; i < productIds.length; i++) {
        if (count[productIds[i]]) {
            count[productIds[i]]++;
        } else {
            count[productIds[i]] = 1;
        }
    }

    const result = [];
    for (let num in count) {
        result.push({id: parseInt(num), count: count[num]});
    }
    return result;
}

/**
 * @param {number[]} productIds
 */
function saveBasket(productIds) {
    localStorage.setItem(basketKey, JSON.stringify(productIds));
    updateBadge();
}

function clearBasket() {
    saveBasket([]);
}

/**
 * Updates the badge displaying the number of products in the basket.
 * If there are no products in the basket, the badge will display "Basket".
 * If there are products in the basket, the badge will display "Basket" followed by the number of products.
 *
 * @return {void}
 */
async function updateBadge() {
    const numProducts = loadBasket()?.length;
    const basketButtons = document.getElementsByClassName("basket-badge");
    [...basketButtons].forEach(anchor => {
        // const button = anchor.querySelector('button');
        anchor.innerHTML = (numProducts > 0) ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"#000000\" viewBox=\"0 0 256 256\">\n" +
            "    <path\n" +
            "        d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z\"></path>\n" +
            "</svg> <span>|</span> <strong>" + numProducts + "</strong>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"#000000\" viewBox=\"0 0 256 256\">\n" +
            "    <path\n" +
            "        d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z\"></path>\n" +
            "</svg>";
    })
}

export {
    addToBasket,
    loadBasket,
    loadBasketCount,
    saveBasket,
    clearBasket,
    updateBadge
}
