
const renderProductCard = (product) => {
    const div = document.createElement('div');
    div.classList.add('col');

    div.innerHTML = `
          <div class="card h-100">
            <img src="${product.photo[0]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.productName}</h5>
              <p class="card-text">${product.description}</p>
            </div>
            <div class="card-footer">
              <a class="btn btn-primary ">Preview</a>
              <a class="btn btn-primary "><img src="images/icons/cart-plus.svg"/></a>
            </div>
          </div>
        `;
    return div;
};


const appendProductCard = (product, container) => {
    container.append(product);
}


const renderProductCards = (products, container) => {
    

    products.forEach((product) => {
        const card = renderProductCard(product);
        console.log('card' ,card);
        appendProductCard(card,container);
    });
};

export {
    renderProductCards
};