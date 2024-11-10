const paginate = (products) => {

    const productContainer = document.querySelector('.js-product-list');
    const pagination = document.querySelector('.js-pagination');//pagination nav
    const linksBlock = pagination.querySelector('.js-pagination-list');//pagination links block
    const btnPrev= pagination.querySelector('.js-pagination-btn-prev');//prev button
    const btnNext = pagination.querySelector('.js-pagination-btn-next');//next button
    const btnSkipBackward = pagination.querySelector('.js-pagination-btn-skip-backward');//skip to first page button
    const btnSkipForward = pagination.querySelector('.js-pagination-btn-skip-forward');//skip to last page button

    const productsDisplayedSelector = document.querySelectorAll('.js-prod-count-selector > .btn-check');// button group to select displayed count - 10,20,40 
    
    let pData={ //pagination data
        firstLinkIdx:0,
        lastLinkIdx:0,
        pagesCount:0,
        currentPage:0,
        linksBlockLength:5,
        productsDisplayed:10
    };

    const getPagesCount = () =>{
        return Math.ceil(products.length / pData.productsDisplayed);
    };
    
    const renderProducts = (container) => { // renders products container content
        container.innerHTML ="";//clear products container

        const firstProductIndex = pData.currentPage* pData.productsDisplayed;//determine index in "products" list of first product displayed in products container depending on current page
        const lastProductIndex = Math.min(products.length,firstProductIndex + pData.productsDisplayed);//determine index in "products" list of last product displayed in products container
        const productsOnPage= products.slice(firstProductIndex, lastProductIndex);//getting a slice of products to display on page

        productsOnPage.forEach(product => { //render each product and put it in product container
            const div = document.createElement('div');
            div.classList.add('col');
            const attrs = product.attributes;
            div.innerHTML = `
                    <div class="js-prod card h-100" id="${product.id}">
                    <img src="${attrs.photo[0]}" class="js-prod-photo card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="js-prod-name card-title">${attrs.productName}</h5>
                        <p class="js-prod-descr card-text">${attrs.description}</p>
                        <p class="js-prod-price card-text">Price: ${attrs.price}\$</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary">Preview</button>
                        <button class="js-add-to-cart btn btn-primary"><i class="js-add-to-cart bi bi-cart-plus"></i></button>
                    </div>
                    </div>
                `;
            container.append(div); 
        });
    };
    
    const renderPagination = () => { //renders pagination links block
        pData.pagesCount = getPagesCount();
        //pData.firstLinkIdx = pData.currentPage;
        pData.lastLinkIdx = Math.min(pData.firstLinkIdx + pData.linksBlockLength-1, pData.pagesCount - 1);
        
        linksBlock.innerHTML=``;
        for (let i=pData.firstLinkIdx; i<=pData.lastLinkIdx; i++){
            const link = renderLinkBtn(i);
            linksBlock.append(link);
        }
    };

    const renderLinkBtn = (page) => { //renders link button and sets active if it leads to current page 
        const li = document.createElement('li');
        li.classList.add('page-item', 'page-link');
        li.textContent=page+1;

        if(pData.currentPage === page){
            li.classList.add('active');
        }
        return li;
    };

    const updateNavBtns = () => { //enables/disables nav buttons
        if(pData.currentPage===0){
            btnPrev.classList.add('disabled');
            btnSkipBackward.classList.add('disabled');
        }
        else {
            btnPrev.classList.remove('disabled');
            btnSkipBackward.classList.remove('disabled');
        }

        if(pData.currentPage===pData.pagesCount-1){
            btnNext.classList.add('disabled');
            btnSkipForward.classList.add('disabled');
        }
        else {
            btnNext.classList.remove('disabled');
            btnSkipForward.classList.remove('disabled');
        }
    };

    linksBlock.addEventListener('click', (event) =>{ // assigns click evt listener for links block
        if(!event.target.closest('.page-item')) return;
        else {
            pData.currentPage = event.target.textContent-1; //get index of page
            renderProducts(productContainer);
            let currentLink = linksBlock.querySelector('.page-item.active');
            currentLink.classList.remove('active');
            event.target.classList.add('active');
            updateNavBtns();
        }
    });
    productsDisplayedSelector.forEach(btn => {
        btn.addEventListener('change',(event)=>{
            if(!event.target.checked) return;
            let count;
            if(event.target.id==='display10') count=10;
            else if (event.target.id==='display20') count=20
            else count = 40;

            pData.firstLinkIdx=0;
            pData.currentPage=0;
            pData.productsDisplayed=count; 
           
            renderProducts(productContainer); //render products of default page
            renderPagination();
            updateNavBtns();
        });
    });

    renderProducts(productContainer); //render products of default page
    renderPagination();
    updateNavBtns();
   
    const prevClick = () =>{
        let tmp = pData.firstLinkIdx;
        if(tmp>0){
            pData.firstLinkIdx = tmp-pData.linksBlockLength;
            //pData.lastLinkIdx = tmp-1;
            pData.currentPage = pData.firstLinkIdx;//assign first page in block as currentPage
        }
        else if (tmp===0) pData.currentPage = tmp;

        renderPagination();
        updateNavBtns();
    }

    const nextClick = () =>{
        let tmp = pData.lastLinkIdx;
        if(tmp<pData.pagesCount-1){
            pData.firstLinkIdx = tmp+1;
            //pData.lastLinkIdx = Math.min(tmp+pData.linksBlockLength, pData.pagesCount-1);
            pData.currentPage = pData.firstLinkIdx;//assign first page in block as currentPage
        }
        else if(tmp===pData.pagesCount-1) pData.currentPage = tmp;
        else return;
    
        renderPagination();
        updateNavBtns();
    }

    const skipBackwardClick = () => {
        pData.firstLinkIdx=0;
        pData.currentPage=0;
        renderPagination();
        updateNavBtns();
    }

    const skipForwardClick = () => {
        const index = pData.pagesCount-1 - (pData.pagesCount-1 + pData.linksBlockLength)%pData.linksBlockLength;
        pData.firstLinkIdx=index;
        pData.currentPage=pData.pagesCount-1;
        renderPagination();
        updateNavBtns();
    }

    btnPrev.addEventListener('click',prevClick);
    btnNext.addEventListener('click',nextClick);
    btnSkipBackward.addEventListener('click',skipBackwardClick);
    btnSkipForward.addEventListener('click',skipForwardClick);
};

export {
    paginate
};
