import products from "./products.js";
import categories from "./categories.js"
import { paginate } from './modules/pagination.js';
import { cartData } from "./modules/cartData.js";
import { viewProduct } from "./modules/viewProduct.js";
import { previewProduct } from "./modules/previewProduct.js";
import { categoriesData } from "./modules/categoriesData.js";
import { getProductById } from "./utilityFunctions.js";
import { filterProductsByCategory } from "./utilityFunctions.js";


window.addEventListener('DOMContentLoaded', ()=>{
    actionsDependingOnPage();
});


const actionsDependingOnPage = () => { 
    const currentPath = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);

    switch(currentPath){
        case '/':
        case '/index':
            if (urlParams.has('category')) {
                const categoryName = urlParams.get('category'); 
                const filteredProducts = filterProductsByCategory(products,categories, categoryName);
                if(filteredProducts.length!==0) paginate(filteredProducts);
                else window.location.href='/';
            } 
            else paginate(products);

            previewProduct(products);
            cartData();
            categoriesData(categories);
            break;

        case currentPath.match(/^\/product\/(\d+)$/)?.input:
            const id = currentPath.split('/')[2]; 
            const shownProduct = getProductById(products,id);
            if (shownProduct===undefined) {window.location.href='/';}
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