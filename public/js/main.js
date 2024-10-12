import products from "./products.js";
import { renderProductCards } from "./modules/productCards.js";

window.addEventListener('DOMContentLoaded', ()=>{
    const productContainer = document.querySelector('.js-product-list');
    renderProductCards(products, productContainer);
});
