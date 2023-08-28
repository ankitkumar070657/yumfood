import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
  const Featured = () => {
    const sliders=[
        {
            url:'https://source.unsplash.com/40OJLYVWeeM'
        },
        {
            url:'https://source.unsplash.com/AcA8moIiD3g'
        },
        {
            url:'https://source.unsplash.com/wiCEuDu3UYU'
        },
    ]
    const[currentIndex, setCurrentIndex]=useState(0)

    const prevSlider=()=>{
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? sliders.length -1 : currentIndex -1 
    setCurrentIndex(newIndex)
}

const nextSlider=()=>{
    const isLastSlide = currentIndex === sliders.length -1
    const newIndex = isLastSlide ? 0: currentIndex + 1 
    setCurrentIndex(newIndex)
}



  return (
    <div className=' h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full py-0 px-4 m-auto relative  group '>
    <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
    style={{backgroundImage:`url(${sliders[currentIndex].url})`}}
    ></div>
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white coursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlider}/>
    </div>
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white coursor-pointer'>
    <BsChevronCompactRight onClick={nextSlider}/>
    </div>
    </div>
  )
}
export default Featured;