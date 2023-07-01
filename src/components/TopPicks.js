import React from 'react'
import {topPicks} from '../data/data'
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
 const TopPicks = () => {
  return (
    <>
    <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
    <div className='hidden lg:flex max-w[1520px] m-auto py-2 px-2'>
    <Splide options={{ perPage: 4, gap:"0.5rem", garg:'free', arrow: false}}>
    {
      topPicks.map((item)=>{
        return(
          <SplideSlide key={item.id} >
          <div className='rounded-3xl relative'>
          <div className='absolute w-full    bg-black/50 rounded-3xl text-white'>
          
          <p className='px-2 font-bold text-2xl'>{item.title}</p>
          <p className='px-2'>{item.price}</p>
          
          </div>
          <button className='border-dotted border-1 rounded-full border-white text-white left-2 absolute px-2 bg-black/50 bottom-2' >
           Add To Cart
          </button>
          <img className=' h-[200px] w-full object-cover rounded-3xl cursor-pointer ease-out duration-300' 
          src={item.image}
          alt={item.title} />
          </div>
        </SplideSlide>
         
        )
      })
    }
    </Splide>
    </div>
    </>
  )
}

export default  TopPicks