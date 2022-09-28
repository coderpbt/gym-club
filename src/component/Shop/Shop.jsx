import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import ProductSummery from '../ProductSummery/ProductSummery';
import ShopTemplate from './ShopTemplate';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(products[0])

const productsSlice = products.slice(0, 10);

useEffect(() =>{
  const storeCard = getStoreCart();
   for (const id in storeCard) {
    const addedProduct = products.find(product => product.id === id);
    const saveCart = [];
      if (addedProduct) {
        const quantity = storeCard[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct)
      }
      setCart(saveCart)
   }
   
},[products])

  const handlerAddToCart = (Selectedproduct) => {
    console.log(Selectedproduct);
    const exist = cart.find(product => product.id === Selectedproduct.id);
    let newCart = [];
    if(!exist){
      Selectedproduct.quantity = 1;
      newCart = [...cart, Selectedproduct];
    }
    else {
      const rest = cart.filter(product => product.id !== Selectedproduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...cart, rest]
    }

    setCart(newCart);
    addToDb(Selectedproduct.id);
  }

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div>
      <div className='lg:w-[1200px] mx-auto w-[90%]'>
        <div className="flex justify-between flex-wrap">
          <div className='lg:w-[78%] w-[68%]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-24'>
              {
                productsSlice.map(product => <ShopTemplate product={product} key={product.id} handlerAddToCart={handlerAddToCart} />)
              }
            </div>
          </div>
          <ProductSummery cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;