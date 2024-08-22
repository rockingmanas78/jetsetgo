import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaGasPump } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { PiSteeringWheelFill } from 'react-icons/pi';

const CarCard = (props: any) => {
    const [car, setCar] = useState(props.car);

    useEffect(() => {
      
        if(props.car){
            setCar(props.car);
        }
    }, [props.car])
    
  return car && (
        <div className='group bg-gray-50 p-2 hover:bg-white rounded-xl hover:border-[1px] cursor-pointer duration-75 border-blue-500 m-2 md:m-3 gap-2'>

<h2 className='text-[20px] font-medium mb-2'>{car.name}</h2>
<h2 className='text-[28px] font-bold mb-2'>
    <span className='text-[12px] font-light'>₹</span>
    <span className='text-[20px] font-thin text-gray-700 line-through mr-2'>
        ₹{(car.price * 10 / 9).toFixed(0)}
    </span>
    {car.price}
    <span className='text-[12px] font-light'> /day </span> {"  "}
    <span className='text-[15px] font-light'>- (8Hrs / 80Kms)</span>
</h2>
            
            <Image src={car.image?.url}
                alt={car.name}
                width={220}
                height={200}
                className='w-full h-[200px] mb-3 object-contain' />
            <div className='flex justify-around group-hover:hidden duration-100'>
                <div className='text-center text-gray-500'>
                    <PiSteeringWheelFill className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[14px] font-light'>{car.carType}</h2>
                </div>
                <div className='text-center text-gray-500'>
                    <MdAirlineSeatReclineNormal className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[14px] font-light'>{car.seat} Seat</h2>
                </div>
                <div className='text-center text-gray-500'>
                    <FaGasPump className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[14px] font-light'>{car.carAvg} MPG</h2>
                </div>
            </div>
            <button className='hidden group-hover:flex group-hover:transition-all duration-100 items-center justify-between rounded-lg text-white w-full bg-gradient-to-r from-blue-300 to-blue-600 p-2 mb-2'>
            Rent Now
                <span className='bg-blue-400 p-1 rounded-md'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
                </span>

            </button>
        </div>
  )
}

export default CarCard


{/* <div className=' w-full flex items-start justify-around'> </div>  flex flex-col justify-center items-center*/}