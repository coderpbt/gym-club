import React, { useState } from 'react';
import man from '../../images/man.jpg';
import Swal from "sweetalert2";
import BreakTime from './BreakTime';

const ProductSummery = ({cart}) => {

  let total = 0;
  for (const product of cart) {
    total += product.time;
  }

 

  const breakTimeInfo = [
    {btime : 10, id:1},
    {btime : 20, id:2},
    {btime : 30, id:3},
    {btime : 40, id:4},
    {btime : 50, id:5},
  ]

  const [times, setTimes] = useState(0);

  const handleBreakTime = (item) => {
    const prvStore = localStorage.getItem('gymStore');
    const oldGym = JSON.parse(prvStore);
   

    if (oldGym) {
      localStorage.setItem('gymStore',JSON.stringify({...oldGym, item}))
    }else{
      localStorage.setItem('gymStore',JSON.stringify(item))
    }

    const newItem = item.btime;
    setTimes(newItem);
  }

  const handelActivity = () => {
    Swal.fire("Good job!", "Your Activity Completed!", "success");
  }

  
  return (
    <>
      <div className='lg:w-[20%] w-[30%] bg-black-rgba min-h-screen'>
        <div className='sticky top-0'>
            <div className='flex-col md:flex lg:flex-row md:flex-row pt-6 pl-4'>
              <img className='w-[50px] rounded-full' src={man} alt="man" />
              <div className='ml-0 md:ml-3 text-left'>
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
                    {
                      breakTimeInfo.map((item,index) => 
                        <BreakTime
                         item={item} 
                         key={index}
                         handleBreakTime={handleBreakTime}
                         />
                        )
                    }
               </div>
            </div>

            <div className='py-2 px-4'>
               <h2 className='font-bold text-left'>Exercise Details</h2>
               <div className='flex justify-between items-center bg-slate-50 p-2 rounded-md my-3'>
                  <h2 className='text-sm font-semibold'>Exercise Time</h2>
                  <span className='text-sm font-semibold'>{total} Seconds</span>
               </div>
               <div className='flex justify-between items-center bg-slate-50 p-2 rounded-md my-3'>
                  <h2 className='text-sm font-semibold'>Break Time</h2>
                  <span className='text-sm font-semibold'>{times} Seconds</span>
               </div>
            </div>   

             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#' onClick={handelActivity} className='flex items-center bg-[#FF3030] rounded-xl p-2 justify-center text-white mx-2 mt-12'> <span className='mr-2'>Activity Completed </span>
            </a>
          </div>
          </div>
    </>
  );
};

export default ProductSummery;