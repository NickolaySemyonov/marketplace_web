import products from "./products.js";
import { paginate } from './modules/pagination.js';
import { cartData } from "./modules/cartData.js";
import { viewProduct } from "./modules/viewProduct.js";
import { previewProduct } from "./modules/previewProduct.js";

window.addEventListener('DOMContentLoaded', ()=>{
    actionsDependingOnPage();
});

const getProductById = (id) => {
    console.log(products.find(item => item.id === id));
    return products.find(item => item.id === id);  
}

const actionsDependingOnPage = () => { 
    const currentPath = window.location.pathname;
    switch(currentPath){
        case '/':
            paginate(products);
            cartData();
            previewProduct(products);
            break;
        case '/index'://same
            paginate(products);
            cartData();
            previewProduct(products);
            break;

        case currentPath.match(/^\/product\/(\d+)$/)?.input:
            const id = currentPath.split('/')[2]; 
            //console.log(`Preview ID: ${id}`); 
            const shownProduct = getProductById(id);
            if (shownProduct===undefined) {window.location.href="/";}
            else {
                viewProduct(shownProduct);
                cartData();
            }
            break;

        default:
            console.log('No specific event listeners assigned for this page.');
            break;
    }
};