const cartData = () => {
    const cart = document.querySelector('.js-cart');
    const productList = document.querySelector('.js-product-list');//cards container

    const cartItems = []; // {id, count, info{}}
    
    //click evt listener
    const addProductToCart = () => {
        productList.addEventListener('click', (event) => {
            if(event.target.classList.contains('js-add-to-cart')){
                const product = event.target.closest('.js-prod');
                const id = product.getAttribute('id');

                const productInfo = {};
                productInfo.photo = product.querySelector('.js-prod-photo').src;
                productInfo.name =  product.querySelector('.js-prod-name').textContent;
                productInfo.description = product.querySelector('.js-prod-descr').textContent;
                productInfo.price = product.querySelector('.js-prod-price').textContent;

                const existingItem = cartItems.find(item => item.id === id);
                
                if (existingItem !== undefined) existingItem.count = existingItem.count+1;
                else cartItems.push({id:id, count:1, info:productInfo});

                console.log(cartItems);
                renderProductCart();
            }
        });
    };
    addProductToCart();

    const renderProductInCart = (id, count, productInfo) => {
        const div = document.createElement('div');
        div.classList.add('js-cart-item', 'd-flex');
        div.innerHTML = `
              <img src="${productInfo.photo}" alt="no image" class="cart-item-image" width="100" height="100">
              <div>
                <div class="cart-item-info">
                  <h6 class="cart-item-name">${productInfo.name}</h6>
                  <p class="cart-item-price">${id}</p>
                  <p class="cart-item-price">${productInfo.price}</p>
                </div>
                <div class="cart-item-quantity">
                  <button class="btn btn-secondary btn-sm">-</button>
                  <span class="cart-item-quantity-value">${count}</span>
                  <button class="btn btn-secondary btn-sm">+</button>
                </div>
              </div>
              <button class="btn btn-danger btn-sm cart-item-remove" aria-label="Remove from cart">
                <span aria-hidden="true">&times;</span>
              </button>
        `;
        return div;
    };
    const renderProductCart = () =>{
        cart.innerHTML=``;
        
        cartItems.forEach(prod => {
            cart.append(renderProductInCart(prod.id, prod.count, prod.info));
        });
    };

   
};

export {
    cartData
};