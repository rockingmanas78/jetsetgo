import Image from 'next/image'
import React from 'react'
import CarImage from "../../../public/carHero.webp";
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] })

const Hero = (props: any) => {
    const { scrollToCarsList } = props;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 m-5 md:m-10'>
        <div className={montserrat.className} >
            <h2 className='text-[30px] sm:text-[40px] md:text-[60px] font-bold text-[#001b2d]'>
                Premium Car Rental in Your Area
            </h2>
            <h2 className='text-[16px] md:text-[22px] text-gray-500 pr-20 mt-5 font-medium'>
                Book the selected car effortessly, Pay for driving only, Book the Car Now
            </h2>
            <button onClick={scrollToCarsList} className='py-2 px-6 md:py-4 md:px-8 mt-5 bg-blue-500 text-white rounded-full hover:scale-105 transition-all'>
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