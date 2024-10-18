import useFetch from '@/src/custom/usefetch';
import React from 'react';

export default function UseFetch() {
    const {Data,error,pending} = useFetch('https://dummyjson.com/products?asdhfbads',{})
    console.log(Data,error,pending)
    if(pending) {
      return (
        <>
          <p className='text-center text-[36px]'>Loading Please Wait</p>
        </>
      )
    }
    if(error) {
      return (
        <>
          <p className='text-center text-[36px]'>{error}</p>
        </>
      )
    }
  return (
    <>
      <p className='text-center text-[32px] font-semibold my-10'>useFetch Hook</p>
      <ul className='m-auto'>
      {Data && Data?.products.map((values)=>(
        <li className='text-center p-3'>{values.title}</li>
      ))}
      </ul>
    </>
  );
}
