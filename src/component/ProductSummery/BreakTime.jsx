import React from 'react';

const BreakTime = ({item,handleBreakTime}) => {

  return (
    <>
       <h6 onClick={()=>handleBreakTime(item)} className='cursor-pointer text-sm rounded-full font-bold w-9 h-9 bg-white leading-9'>{item.btime}</h6>
    </>
  );
};

export default BreakTime;