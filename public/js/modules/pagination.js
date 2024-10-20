
const paginate = (products) => {
    //console.log(products);
    let productCount = 6;
    let currentPage = 1;

    const productContainer = document.querySelector('.js-product-list');
    const pagination = document.querySelector('.js-pagination');
    const btnPrevPagination = document.querySelector('.js-pagination-btn-prev');
    const btnNextPagination = document.querySelector('.js-pagination-btn-next');

    const renderProducts = (products, container, numberOfProducts, page) => {
        container.innerHTML ="";

        const firstProductIndex = numberOfProducts * page - numberOfProducts;
        const lastProductIndex = firstProductIndex + numberOfProducts;
        const productsOnPage = products.slice(firstProductIndex, lastProductIndex);

        productsOnPage.forEach(product => {
           
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
            container.append(div); 
        });

    };

    const RenderPagination = (products, productCount) => {

        const pagesCount = Math.ceil(products.length / productCount);
        const ul = document.querySelector('.js-pagination-list');

        for (let i=1; i<=pagesCount;i++){
            const li = renderBtn(i);
            ul.append(li);
        }

        pagination.classList.remove('hidden');
    };

    const renderBtn = (page) => {
        const li = document.createElement('li');
        li.classList.add('page-item', 'page-link');
        li.textContent=page;

        if(currentPage === page){
            li.classList.add('active');
        }
        return li;
    }

    const updatePagination = () => {
        pagination.addEventListener('click', (event) =>{
            if(!event.target.closest('.page-item')) return;
            else {
                currentPage = event.target.textContent;
                renderProducts(products, productContainer, productCount, currentPage);
                let currentLi = document.querySelector('.page-item.active');
                currentLi.classList.remove('active');
                event.target.classList.add('active');
            }
        })
    };

   
    renderProducts(products, productContainer, productCount, currentPage);
    RenderPagination(products, productCount);
    updatePagination();

    const liElements = document.querySelectorAll('.page-item');

    const handlePagination = (event) => {
        const currentActiveLi = document.querySelector('.page-item.active');
        let newActiveLi;
        if (event.target.closest('.js-pagination-btn-next')){
            newActiveLi = currentActiveLi.nextElementSibling;
            currentPage++;
        }
        else {
            newActiveLi = currentActiveLi.previousElementSibling;
            currentPage--;
        }

        if(!newActiveLi && event.target.closest('.js-pagination-btn-next')){
            newActiveLi = liElements[0];
        }else if(!newActiveLi){
            newActiveLi = liElements[liElements.length - 1];
        }
        
        currentActiveLi.classList.remove('active');
        newActiveLi.classList.add('active');

        if(currentPage > liElements.length){
            currentPage=1; 
        }
        else if (currentPage < 1){
            currentPage = liElements.length;
        }
        renderProducts(products, productContainer, productCount, currentPage);
    };
    
    btnPrevPagination.addEventListener('click',handlePagination);
    btnNextPagination.addEventListener('click', handlePagination);
};

export {
    paginate
};
