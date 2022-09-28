import React from 'react';

const ShopTemplate = ({ product, handlerAddToCart }) => {
  // console.log(product)
  const { name, age, desc, time, img} = product;
  return (
    <>

      <div className="card card-compact bg-base-100 shadow-xl pt-9 self-start">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-left">{name}</h2>
          <p className="text-left">{desc}</p>
          <p className='text-left'>For Age : {age}</p>
          <p className='text-left'>Time required : {time} s</p>
          <div className="card-actions justify-end">
            <button onClick={() => handlerAddToCart(product)} className="btn btn-primary">Add to List 
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default ShopTemplate;