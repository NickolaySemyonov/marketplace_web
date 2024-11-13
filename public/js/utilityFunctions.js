const getProductById = (products, id) => {
    console.log(products.find(item => item.id === id));
    return products.find(item => item.id === id);  
}


export {
    getProductById
}