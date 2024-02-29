import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center bg-[#001b2d] justify-between p-3 px-5 shadow-sm border-b-[1px]'>
        
        <Image 
            height={150} 
            width={150} 
            src="/logo.webp" 
            alt="logo img"
        />
        <div className='hidden md:flex gap-5 text-white'>
            <h2 className="hover:bg-blue-500 p-2 px-5 rounded-full hover:text-white cursor-pointer">Home</h2>
            <h2 className="hover:bg-blue-500 p-2 px-5 rounded-full hover:text-white cursor-pointer">History</h2>
            <h2 className="hover:bg-blue-500 p-2 px-5 rounded-full hover:text-white cursor-pointer">Contact Us</h2>
        </div>
        <UserButton />
    </div>
  )
}

export default Navbar
//cedae1
{/* <Image 
            height={100} 
            width={100} 
            src="/logo2.webp" 
            alt="logo img"
        /> */}