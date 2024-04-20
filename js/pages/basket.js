import {clearBasket, loadBasketCount} from "../basket.js";
import {loadData} from "../api.js";
import {shortenText} from "../util.js";

async function createBasket(main) {
    document.title = "Basket";

    main.querySelector('#clear-basket')?.addEventListener('click', () => {
        clearBasket();
        refreshBasketList();
    });

    const products = await loadData('/assets/products/all.json');
    refreshBasketList();

    const button = main.querySelector("#basket-clear");
    button.addEventListener('click', () => { clearBasket(); refreshBasketList()});


    function refreshBasketList() {
        const basketProductList = main.querySelector('#basket-product-list > tbody');

        // Reset table
        resetBasketTable(basketProductList);

        // Recreate table
        const basketSumElement = main.querySelector('#basket-sum')?.querySelector('span');
        let basketSum = 0;
        const basketCount = loadBasketCount();
        basketCount.forEach(product => {
            const productListItem = document.createElement('tr');
            const matchedProduct = getProductById(product.id, products);
            const itemSum = matchedProduct.price * product.count;
            console.log(itemSum);
            basketSum += itemSum;
            productListItem.innerHTML = `
                <td><span><img loading="lazy" src=${matchedProduct.image} alt=${matchedProduct.title}></span><strong>${shortenText(matchedProduct.title, 55)}</strong></td>
                <td>${product.count}</td>
                <td>${itemSum.toFixed(2)} €</td>
            `
            console.debug(JSON.stringify(matchedProduct, null, 2));
            basketProductList.appendChild(productListItem);
        })

        basketSumElement.innerText = `${basketSum.toFixed(2)}  €`
    }

    function resetBasketTable(basketProductList) {
        const trElements = basketProductList.querySelectorAll("tr");
        trElements.forEach(tr => {
            if (!tr.querySelector("th")) {
                tr.parentNode.removeChild(tr);
            }
        });
    }

    function getProductById(productId, products) {
        return products?.find(p => p.id === productId);
    }
}

createBasket(document.getElementById("basket-main")).then(() => {
    console.debug("Basket loaded.")
});
