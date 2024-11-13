import { getProductById } from "../utilityFunctions.js";
const previewProduct = (products) => {
    //const previewModal = document.querySelector('.js-preview-modal-content');
    const previewModalBody = document.querySelector('.js-preview-prod');
    const productContainer = document.querySelector('.js-displayed-products');

    if(previewModalBody){
        productContainer.addEventListener('click', (event) => {
            if(event.target.classList.contains('js-preview-btn')){
                const id = event.target.closest('.js-prod').getAttribute('id');
                const product= getProductById(products, id);
                previewModalBody.innerHTML=``;
                previewModalBody.append(renderProductView(product));
            }
        });
    }
    const renderProductView = (product) => {
        const div = document.createElement('div');
        div.classList.add('col');
        const attrs= product.attributes;
        div.append(renderCarousel(product));
        div.innerHTML+=`
              <div class="js-prod card h-100" id="${product.id}">
              <img src="../${attrs.photo[0]}" class="js-prod-photo card-img-top collapse" alt="...">
              <div class="card-body">
                  <h5 class="js-prod-name card-title">${attrs.productName}</h5>
                  <p class="js-prod-descr card-text">${attrs.description}</p>
                  <p class="js-prod-price card-text">Price: ${attrs.price}\$</p>
              </div>
              <div class="card-footer">
                  <button class="js-add-to-cart btn btn-primary"><i class="js-add-to-cart bi bi-cart-plus"></i></button>
              </div>
              </div>
          `;
        return div;
    };
    const renderCarousel = (product) => {//renders carousel from product image list
        const images = product.attributes.photo;

        const div = document.createElement('div');//carousel main div
        div.classList.add('carousel','slide','carousel-fade');
        div.id="carouselExampleFade";
        div.dataset.bsRide = 'carousel';

        const inner= document.createElement('div'); //carousel-items div
        inner.classList.add('carousel-inner');
        images.forEach(img => {
          const item = document.createElement('div');
          item.classList.add('carousel-item');
          item.innerHTML=`<img src="../${img}" class="d-block w-100" alt="...">`;
          inner.append(item);
        });
        inner.firstElementChild.classList.add('active');

        div.append(inner);
        div.innerHTML+=`
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        `;
        return div;
    }
}

export{
    previewProduct
}