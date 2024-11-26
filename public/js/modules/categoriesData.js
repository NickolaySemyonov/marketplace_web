const categoriesData = (categories) => {
    const mainAccordion = document.getElementById('categoriesAccordion');

    const renderAccordion = (category, parentId) => {


        //the accordion itself
        const accordionDiv = document.createElement('div');
        accordionDiv.classList.add('accordion', 'accordion-item');
        accordionDiv.setAttribute('id',`${category.name}`)

        //heading with button to collapse the accordion
        const accordionHeading = document.createElement('h2');
        accordionHeading.classList.add('accordion-header');
        accordionHeading.setAttribute('id',`heading_for_${category.name}`);
        accordionHeading.innerHTML=`
            <button class="accordion-button collapsed" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapse_for_${category.name}" 
                aria-expanded="false" 
                aria-controls="collapse_for_${category.name}">
                ${category.name.replace('_',' ')}
            </button>
        `;

        //collapsed area
        const accorodionCollapse = document.createElement('div');
        accorodionCollapse.classList.add('accordion-collapse', 'collapse');
        accorodionCollapse.setAttribute('id',`collapse_for_${category.name}`);
        accorodionCollapse.setAttribute('data-bs-parent',`#${parentId}`);
       
        //put parts together
        accorodionCollapse.appendChild(renderAccordionBody(category));
        accordionDiv.appendChild(accordionHeading);
        accordionDiv.appendChild(accorodionCollapse);
        return accordionDiv;
    }

    const renderAccordionBody = (category) =>{

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body','list-group-flush');

        if(category.children!==null){
            category.children.forEach(subcategory => {
                if(subcategory.children!==null) accordionBody.appendChild(renderAccordion(subcategory,category.name));
                else {
                    //render link
                    const link = document.createElement('a');
                    link.className="list-group-item";
                    link.href = `/?category=${subcategory.name}`;
                    link.textContent=`${subcategory.name.replace('_',' ')}`;
                    accordionBody.appendChild(link);
                }
            });
        }
        return accordionBody;
    }

    categories.forEach(category=>{
        mainAccordion.appendChild(renderAccordion(category,'categoriesAccordion'));
    })

}

export{
    categoriesData
}