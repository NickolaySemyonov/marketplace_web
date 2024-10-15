const cartData = () => {
    const cart = document.querySelector('.js-cart');
    const productList = document.querySelector('.js-product-list');

    const productInfo = {};


    const addProductToCart = () => {
        productList.addEventListener('click', (event)=>{
            if(event.target.classList.contains('js-add-to-cart')){
                const product = event.target.closest('.js-prod');

                const photo = product.querySelector('.js-prod-photo');
                const name = product.querySelector('.js-prod-name');
                const description = product.querySelector('.js-prod-descr');
                const price = product.querySelector('.js-prod-price');
       
                productInfo.photo = photo.src;
                productInfo.name = name.textContent;
                productInfo.description = description.textContent;
                productInfo.price = price.textContent;
                //!!! id
                console.log(productInfo);
            }
        });
    }

    addProductToCart();
}

export {
    cartData
};