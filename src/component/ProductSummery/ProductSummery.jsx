import React from 'react';
import man from '../../images/man.jpg'

const ProductSummery = ({cart}) => {
  console.log(cart)
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
     total += product.price * product.quantity;
     shipping += product.shipping;
  }

  const taxx = (total * 0.1).toFixed(2);
  const tax = parseFloat(taxx);
  const grandTotal = total + tax + shipping;

  
  return (
    <>
      <div className='lg:w-[20%] w-[30%] bg-black-rgba min-h-screen'>
        <div className='sticky top-0'>
            <div className='flex pt-6 pl-4'>
              <img className='w-[50px] rounded-full' src={man} alt="man" />
              <div className='ml-3 text-left'>
                <h2 className='font-bold'>Yeasin Arafat</h2>
                <p>Bangladesh</p>
              </div>
            </div>

            <div className='flex justify-between px-4 py-6'>
              <div>
                <h2>60 <small>kg</small></h2>
                <h6>Weight</h6>
              </div>
              <div>
                <h2>6.7</h2>
                <h6>Height</h6>
              </div>
              <div>
                <h2>24 <small>yrs</small></h2>
                <h6>Age</h6>
              </div>
            </div>

            <div className='py-2'>
               <h2 className='font-bold text-left pl-4'>Add A Break</h2>
               <div className='px-4 flex justify-between items-center'>
                  <div>
                    <h6 className='text-sm rounded-full font-bold w-9 h-9 bg-white leading-9'>10s</h6>
                  </div>
                  <div>
                    <h6 className='text-sm rounded-full font-bold w-9 h-9 bg-white leading-9'>20s</h6>
                  </div>
                  <div>
                    <h6 className='text-sm rounded-full font-bold w-9 h-9 bg-white leading-9'>30s</h6>
                  </div>
                  <div>
                    <h6 className='text-sm rounded-full font-bold w-9 h-9 bg-white leading-9'>40s</h6>
                  </div>
                  <div>
                    <h6 className='text-sm rounded-full font-bold w-9 h-9 bg-white leading-9'>50s</h6>
                  </div>
                  
               </div>
            </div>

            <div className='py-2 px-4'>
               <h2 className='font-bold text-left'>Exercise Details</h2>
               <div className='flex justify-between items-center bg-slate-50 p-2 rounded-md my-3'>
                  <h2 className='text-sm font-semibold'>Exercise Time</h2>
                  <span className='text-sm font-semibold'>200 Seconds</span>
               </div>
               <div className='flex justify-between items-center bg-slate-50 p-2 rounded-md my-3'>
                  <h2 className='text-sm font-semibold'>Break Time</h2>
                  <span className='text-sm font-semibold'>20 Seconds</span>
               </div>
            </div>   

            <div className='pt-11'>
              <h6 className='text-left px-3 pb-5'>Selected Items: {quantity}</h6>
              <h6 className='text-left px-3 pb-5'>Total Price: ${total}</h6>
              <h6 className='text-left px-3 pb-5'>Total Shipping Charge: ${shipping}</h6>
              <h6 className='text-left px-3 pb-5'>Tax: ${tax}</h6>
              <h6 className='text-left px-3 font-semibold'>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
            <a href='#' className='flex items-center bg-[#FF3030] rounded-xl p-2 justify-center text-white mx-2 mt-12'> <span className='mr-2'>Activity Completed </span>
            </a>
          </div>
          </div>
    </>
  );
};

export default ProductSummery;