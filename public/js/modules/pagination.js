
const paginate = (products) => {

    //let productCount = 1; // max count of products to display on a page
    //let currentPage = 0; // current page by default
    //let linksBlockLength = 6; // max pagination links displayed in a block
    
    const productContainer = document.querySelector('.js-product-list');
    const pagination = document.querySelector('.js-pagination');//pagination nav
    const linksBlock = pagination.querySelector('.js-pagination-list');//pagination links block
    const btnPrev= pagination.querySelector('.js-pagination-btn-prev');//prev button
    const btnNext = pagination.querySelector('.js-pagination-btn-next');//next button
    const btnSkipBackward = pagination.querySelector('.js-pagination-btn-skip-backward');
    const btnSkipForward = pagination.querySelector('.js-pagination-btn-skip-forward');

    let paginationData={
        
        firstLinkIdx:0,
        lastLinkIdx:0,
        pagesCount:0,
        currentPage:0,
        linksBlockLength:6,
        productsDisplayed:2
    };

    const getPagesCount = () =>{
        return Math.ceil(products.length / paginationData.productsDisplayed);
    };
    
    const renderProducts = (products, container, paginationData) => { // renders products container content
        container.innerHTML ="";//clear products container

        // const firstProductIndex = pageNumber* numberOfProductsDisplayed;   //determine index in "products" list of first product displayed in products container depending on current page
        // const lastProductIndex = Math.min(products.length,firstProductIndex + numberOfProductsDisplayed); //determine index in "products" list of last product displayed in products container
        // const productsOnPage = products.slice(firstProductIndex, lastProductIndex); //getting a slice of products to display on page
        const firstProductIndex = paginationData.currentPage* paginationData.productsDisplayed;
        const lastProductIndex = Math.min(products.length,firstProductIndex + paginationData.productsDisplayed);
        const productsOnPage= products.slice(firstProductIndex, lastProductIndex);


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
    
    const RenderPagination = () => { //renders pagination links block
        paginationData.pagesCount = getPagesCount();
        paginationData.firstLinkIdx = paginationData.currentPage;
        paginationData.lastLinkIdx = Math.min(paginationData.firstLinkIdx + paginationData.linksBlockLength-1, paginationData.pagesCount - 1);
        //console.log(firstLinkIdx,lastLinkIdx)
        linksBlock.innerHTML=``;
        for (let i=paginationData.firstLinkIdx; i<=paginationData.lastLinkIdx; i++){
            const link = renderBtn(i);
            linksBlock.append(link);
        }
        console.log('rendered');
    };

    const renderBtn = (page) => { //renders link button and sets active if it leads to current page 
        const li = document.createElement('li');
        li.classList.add('page-item', 'page-link');
        li.textContent=page+1;

        if(paginationData.currentPage === page){
            li.classList.add('active');
        }
        return li;
    }

    // assigns click evt listener for links block
    linksBlock.addEventListener('click', (event) =>{
        if(!event.target.closest('.page-item')) return;
        else {
            paginationData.currentPage = event.target.textContent-1; //get index of page
            renderProducts(products, productContainer, paginationData);
            let currentLink = linksBlock.querySelector('.page-item.active');
            currentLink.classList.remove('active');
            event.target.classList.add('active');
        }
    });

    renderProducts(products, productContainer, paginationData); //render products of default page
    RenderPagination();
   

    const prevClick = () =>{
        //curActiveLink = linksBlock.querySelector('.page-item.active');
        
        let tmp = paginationData.firstLinkIdx;
        if(tmp===0)return;
        paginationData.lastLinkIdx=tmp-1;
        paginationData.firstLinkIdx= tmp-paginationData.linksBlockLength;
        paginationData.currentPage=paginationData.firstLinkIdx;
        RenderPagination();
    }

    const nextClick = () =>{
        let tmp = paginationData.lastLinkIdx;
        if(tmp===paginationData.pagesCount-1) return;
        paginationData.lastLinkIdx=Math.min(tmp+paginationData.linksBlockLength, paginationData.pagesCount-1);
        paginationData.firstLinkIdx= tmp+1;
        paginationData.currentPage=paginationData.firstLinkIdx;

        RenderPagination();
    }



    btnPrev.addEventListener('click',prevClick);
    btnNext.addEventListener('click',nextClick);
    const liElements = linksBlock.querySelectorAll('.page-item');
    //click evt for prev-next btns
    const handlePagination = (event) => {
        const currentActiveLi = linksBlock.querySelector('.page-item.active');
        let newActiveLi;
        if (event.target.closest('.js-pagination-btn-next')){//determine which btn was clicked and change currentPage by 1 
            newActiveLi = currentActiveLi.nextElementSibling;
            currentPage++;
        }
        else {
            newActiveLi = currentActiveLi.previousElementSibling;
            currentPage--;
        }

        if(!newActiveLi && event.target.closest('.js-pagination-btn-next')){ // if clicked next and current was last sibling in block
            newActiveLi = liElements[0];//select first
        }else if(!newActiveLi){ // if clicked prev and current was first sibling in block
            newActiveLi = liElements[liElements.length - 1];//select last
        }
        
        currentActiveLi.classList.remove('active');
        newActiveLi.classList.add('active');
        
        //returning to first/last block
        if(currentPage > liElements.length){ 
            currentPage=1; 
        }
        else if (currentPage < 1){
            currentPage = liElements.length;
        }
        renderProducts(products, productContainer, paginationData);
    };
    
    // const prevClick = () =>{
        
    //     if(currentPage>0){
    //         const currentActiveLink = linksBlock.querySelector('.page-item.active');
    //         const newActiveLink = currentActiveLink.previousElementSibling;
    //         currentPage-=1;

    //         if(newActiveLink!==null){
    //             if (currentPage===0)btnPrev.classList.add('disabled');
    //             newActiveLink.classList.add('active');
    //             currentActiveLink.classList.remove('active');
    //         }
    //         else {
    //             currentPage-=(linksBlockLength-1);
                
    //             RenderPagination();
    //         }

    //         btnNext.classList.remove('disabled');
    //     }
    // };

    // const nextClick = () =>{
    //     const maxPageIndex = getPagesCount()-1;
        
    //     if(currentPage<maxPageIndex){
    //         const currentActiveLink = linksBlock.querySelector('.page-item.active');
    //         const newActiveLink = currentActiveLink.nextElementSibling;
    //         currentPage+=1;

    //         if(newActiveLink!==null){
    //             console.log(newActiveLink)
    //             if (currentPage===maxPageIndex)btnNext.classList.add('disabled');
    //             newActiveLink.classList.add('active');
    //             currentActiveLink.classList.remove('active');
    //         }
    //         else RenderPagination();
            
    //         btnPrev.classList.remove('disabled');
    //     }
    // };
    // const skipBackwardClick = () =>{
    //     // currentPage = currentPage+(currentPage+linksBlockLength)%linksBlockLength
    //     // RenderPagination()
    // }
    // const skipForwardClick = () =>{
    //     currentPage = currentPage+(currentPage+linksBlockLength)%linksBlockLength+1
    //     RenderPagination()
    // }

    // btnPrev.addEventListener('click',prevClick);
    // btnNext.addEventListener('click', nextClick);
    // btnSkipBackward.addEventListener('click',skipBackwardClick);
    // btnSkipForward.addEventListener('click', skipForwardClick);
};

export {
    paginate
};
