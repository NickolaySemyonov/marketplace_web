import products from "./products.js";
import categories from "./categories.js"
import { paginate } from './modules/pagination.js';
import { cartData } from "./modules/cartData.js";
import { viewProduct } from "./modules/viewProduct.js";
import { previewProduct } from "./modules/previewProduct.js";
import { categoriesData } from "./modules/categoriesData.js";
import { getProductById } from "./utilityFunctions.js";


window.addEventListener('DOMContentLoaded', ()=>{
    actionsDependingOnPage();
});



const actionsDependingOnPage = () => { 
    const currentPath = window.location.pathname;
    switch(currentPath){
        case '/':
            paginate(products);
            cartData();
            previewProduct(products);
            categoriesData(categories);
            break;
        case '/index'://same
            paginate(products);
            cartData();
            previewProduct(products);
            categoriesData(categories);
            break;

        case currentPath.match(/^\/product\/(\d+)$/)?.input:
            const id = currentPath.split('/')[2]; 
            //console.log(`Preview ID: ${id}`); 
            const shownProduct = getProductById(products,id);
            if (shownProduct===undefined) {window.location.href="/";}
            else {
                viewProduct(shownProduct);
                cartData();
                categoriesData(categories);
            }
            break;

        default:
            console.log('No specific event listeners assigned for this page.');
            break;
    }
};