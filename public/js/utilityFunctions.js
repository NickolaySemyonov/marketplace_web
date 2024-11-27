const getProductById = (products, id) => {
    console.log(products.find(item => item.id === id));
    return products.find(item => item.id === id);  
}

const filterProductsByCategory = (products,categories, categoryName) => {
    const category = getCategoryByName(categories, categoryName);
    const subcategories = getAllSubcategories(category);
    return products.filter(product => subcategories.includes(product.category));
    //return products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase());
}
const getAllSubcategories = (category) => {
    let subcategories = [category.name.toLowerCase()];
    if (category.children!==null) {
        category.children.forEach(child => {
            subcategories = subcategories.concat(getAllSubcategories(child));//concat combines arrays
        });
    }
    return subcategories; 
};
const getCategoryByName = (categories, name) => {
    for (const category of categories) {
        if (category.name === name) {
            return category; 
        }
        if (category.children!==null) {
            const found = getCategoryByName(category.children, name);
            if (found!==null) return found;
        }
    }
    return null; // category is not found
};

const renderTable = (data, headerText) => {

    // table element
    const table = document.createElement('table');
    table.className = 'table table-bordered table-striped';

    // table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const thWide = document.createElement('th');
    thWide.setAttribute('colspan', '2'); 
    thWide.className="text-center";
    thWide.innerHTML = `<span style="font-weight: bold;">${headerText}</span>`; // Header
    
    headerRow.appendChild(thWide);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // table body
    const tbody = document.createElement('tbody');

    // Populate table rows with key-value pairs
    Object.entries(data).forEach(([key, value]) => {
        const row = document.createElement('tr');
        const keyCell = document.createElement('td');
        const valueCell = document.createElement('td');

        keyCell.textContent = key;
        valueCell.textContent = value;

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    });

    if(tbody.childElementCount===0){
        const thWide = document.createElement('th');
        thWide.setAttribute('colspan', '2'); 
        thWide.className="text-center";
        thWide.innerHTML = `<span>(No data)</span>`; // Header
        tbody.appendChild(thWide);
    }

    table.appendChild(tbody);
    return table;
}

export {
    getProductById,
    filterProductsByCategory,
    renderTable,
}