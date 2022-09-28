import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import ProductSummery from '../ProductSummery/ProductSummery';
import ShopTemplate from './ShopTemplate';
import logo from '../../images/logo.png'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);



// useEffect(() =>{
//   const storeCard = getStoreCart();
//    for (const id in storeCard) {
//     const addedProduct = products.find(product => product.id === id);
//     const saveCart = [];
//       if (addedProduct) {
//         const quantity = storeCard[id];
//         addedProduct.quantity = quantity;
//         saveCart.push(addedProduct)
//       }
//       setCart(saveCart)
//    }
   
// },[products])

  const handlerAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  
  }

  useEffect(() => {
    fetch('gym.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div>
      
      <div className='lg:w-[1200px] mx-auto w-[90%]'>
      
        <div className="flex justify-between flex-wrap">
          <div className='lg:w-[78%] w-[68%]'>
          <div className="logo flex items-center">
            <img className='w-20' src={logo} alt="m-logo" />
            <h2 className='text-2xl'>DPI-GYM-CLUB</h2>
          </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {
                products.map(product => <ShopTemplate product={product} key={product.id} handlerAddToCart={handlerAddToCart} />)
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