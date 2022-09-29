
const addTocart = (product, quantity) => {
    const cart = getStoreCart();
    cart[product] = quantity;
    const newCart = {
        ...cart,
        breakTime: {
            time: product, 
            id: quantity
        }
    }
    localStorage.setItem('cart', JSON.stringify(newCart))
}


const getStoreCart = () => {
    const storeCart = localStorage.getItem('cart');
    let cart = {};
    if (storeCart) {
        cart = JSON.parse(storeCart)
    } 
    return cart;
}

const getBreakTime = () => {
    const cartJSON = localStorage.getItem('cart');

    let cart;
    if (cartJSON) {
        cart = JSON.parse(cartJSON)
    } 

    return cart?.breakTime;
}
  

export {
    addTocart,
    getBreakTime
}