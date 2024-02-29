import Image from 'next/image'
import React from 'react'
import CarImage from "../../public/carHero.webp";

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div >
            <h2 className='text-[40px] md:text-[60px] font-bold text-[#001b2d]'>
                Premium Car Rental in Your Area
            </h2>
            <h2 className='text-[20px] text-gray-500 pr-20 mt-5 font-medium'>
                Book the selected car effortessly, Pay for driving only, Book the Car Now
            </h2>
            <button className='py-2 px-4 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition-all'>
                Explore Cars
            </button>
        </div>
        <div>
            <Image src={CarImage} alt='Car' height={400} width={500} className='w-full object-cover align-center' />
        </div>
    </div>
  )
}

export default Hero