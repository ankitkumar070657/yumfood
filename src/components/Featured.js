import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
  const Featured = () => {
    const sliders=[
        {
            url:'https://source.unsplash.com/kfDsMDyX1K0/200'
        },
        {
            url:'https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g'
        },
        {
            url:'https://source.unsplash.com/kfDsMDyX1K0/200'
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
    <div className='max-w-[150 last:0px] h-[500px] w-full py-2 relative group pl-2 pr-2'>
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