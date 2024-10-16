const cartData = () => {
    const cart = document.querySelector('.js-cart');
    const productList = document.querySelector('.js-product-list');//cards container

    var cartItems = []; // {id, count, info{}}
    
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
                
                if (existingItem !== undefined) updateCartItemCount(existingItem,existingItem.count+1);
                else {
                    cartItems.push({id:id, count:1, info:productInfo});
                    updateLS();
                }
                //console.log(cartItems);
                renderProductCart();
            }
        });

        cart.addEventListener('click',(event)=>{
            if(event.target.classList.contains('cart-item-remove')){
                const div = event.target.closest('.js-cart-item');
                const cartItemId = div.querySelector('.cart-item-id').textContent;
                deleteItemFromCart(cartItemId);
            }
            else if (event.target.classList.contains('cart-item-dec')){
                const div = event.target.closest('.js-cart-item');
                const cartItemId = div.querySelector('.cart-item-id').textContent;
                decCartItemCount(cartItemId);
            }
            else if (event.target.classList.contains('cart-item-inc')){
                const div = event.target.closest('.js-cart-item');
                const cartItemId = div.querySelector('.cart-item-id').textContent;
                incCartItemCount(cartItemId);
            }
            renderProductCart();
        });

    }
    addProductToCart();
   
    const renderProductInCart = (id, count, productInfo) => {
        const div = document.createElement('div');
        div.classList.add('js-cart-item', 'd-flex');
        div.innerHTML = `
            <img src="${productInfo.photo}" alt="no image" class="cart-item-image" width="100" height="100">
            <div>
                <div class="cart-item-info">
                    <h6 class="cart-item-name">${productInfo.name}</h6>
                    <p class="cart-item-id">${id}</p>
                <p class="cart-item-price">${productInfo.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="btn btn-secondary btn-sm cart-item-dec">-</button>
                    <span class="cart-item-quantity-value">${count}</span>
                    <button class="btn btn-secondary btn-sm cart-item-inc">+</button>
                </div>
            </div>
            <button class="cart-item-remove btn btn-danger btn-sm " aria-label="Remove from cart">
                <i class="cart-item-remove bi bi-x-circle"></i>
            </button>
            
              
        `;
        return div;
    }
    const renderProductCart = () =>{
        //Load cart items saved in localstorage
        const parsed = JSON.parse(localStorage.getItem('cartItems'));
        cartItems = parsed!==null ? parsed: [];


        cart.innerHTML=``;
        if(cartItems.length < 1) {cart.innerHTML=`<p>Корзина пуста</p>`; return;}
        cartItems.forEach(prod => {
            cart.append(renderProductInCart(prod.id, prod.count, prod.info));
        });
    }
    renderProductCart();

    const updateCartItemCount = (cartItem, newCount) => {
        if(newCount >= cartItem.count | newCount > 0) cartItem.count = newCount;
        else deleteItemFromCart(cartItem.id);
        updateLS();   
    }
    const decCartItemCount = (cartItemId) =>{
        const item = cartItems.find(item => item.id === cartItemId);
        updateCartItemCount(item, item.count-1);
    }
    const incCartItemCount = (cartItemId) =>{
        const item = cartItems.find(item => item.id === cartItemId);
        updateCartItemCount(item, item.count+1);
    }
    const deleteItemFromCart = (removedId) => {
        cartItems = cartItems.filter(item => item.id !== removedId); 
        updateLS();
    }

    const updateLS = () => {
        //upd localstorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

};

export {
    cartData,
};