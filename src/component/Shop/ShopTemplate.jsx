import React from 'react';

const ShopTemplate = ({ product, handlerAddToCart }) => {
  // console.log(product)
  const { name, seller, price, ratings, img} = product;
  return (
    <>

      <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={img ? img : 'Not Found'} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-left">{name}</h2>
          <h2 className="card-title">Price: $ {price}</h2>
          <p className='text-left'>Manufacturer : {seller}</p>
          <p className='text-left'>Rating : {ratings} start</p>
          <div className="card-actions justify-end">
            <button onClick={() => handlerAddToCart(product)} className="btn btn-primary">Add to Cart <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.2188 14.2222H9.13068L9.33359 15.3333H17.6551C18.1325 15.3333 18.4864 15.8299 18.3806 16.3514L18.2096 17.1943C18.789 17.5093 19.1886 18.1746 19.1886 18.9445C19.1886 20.0279 18.3975 20.9043 17.4269 20.8887C16.5024 20.8738 15.742 20.0334 15.717 18.9982C15.7034 18.4326 15.9057 17.9201 16.2379 17.5555H9.73844C10.0602 17.9085 10.26 18.4002 10.26 18.9445C10.26 20.0491 9.4376 20.9386 8.44114 20.8867C7.55634 20.8407 6.83675 20.04 6.79025 19.0493C6.75435 18.2843 7.11379 17.6099 7.65989 17.2582L5.48209 5.33334H3.31558C2.90465 5.33334 2.57153 4.96025 2.57153 4.5V3.94445C2.57153 3.4842 2.90465 3.11111 3.31558 3.11111H6.49418C6.84764 3.11111 7.15229 3.38962 7.22313 3.77743L7.5073 5.33334H19.6843C20.1618 5.33334 20.5157 5.8299 20.4099 6.35136L18.9443 13.5736C18.8673 13.953 18.5662 14.2222 18.2188 14.2222ZM15.2203 8.94445H13.7322V7.55556C13.7322 7.24872 13.5102 7 13.2362 7H12.7402C12.4662 7 12.2441 7.24872 12.2441 7.55556V8.94445H10.7561C10.4821 8.94445 10.26 9.19316 10.26 9.50001V10.0556C10.26 10.3624 10.4821 10.6111 10.7561 10.6111H12.2441V12C12.2441 12.3068 12.4662 12.5556 12.7402 12.5556H13.2362C13.5102 12.5556 13.7322 12.3068 13.7322 12V10.6111H15.2203C15.4943 10.6111 15.7164 10.3624 15.7164 10.0556V9.50001C15.7164 9.19316 15.4943 8.94445 15.2203 8.94445Z" fill="#fff" />
            </svg>
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default ShopTemplate;