"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex items-center bg-[#0c1f2f] justify-between m-0 p-3 px-5 shadow-sm border-b-[1px]'>
      <div className="w-[4.5rem] h-auto md:w-28 lg:w-36"> {/* Adjust these width classes as needed */}
        <Image 
            src="/logo.webp" 
            alt="logo"
            layout="responsive"
            width={150} // Set the original width of the logo
            height={150} // Set the original height of the logo, maintaining aspect ratio
        />
      </div>
      {/* Hamburger Icon */}
      <div className='hidden z-50' onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
          <span className="hamburger-line transition duration-300 ease-in-out"></span>
          <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
        </div>
      </div>

      {/* Conditional rendering of authentication UI based on session absolute and flex in case of small devices */}
      
      <div className={`hidden flex-col justify-center md:relative md:flex items-start gap-5 text-white top-0 h-full md:h-auto w-[250px] md:w-auto bg-[#0c1f2f] p-5 md:p-0 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} left-0 z-40`}>
        <div className='flex flex-col justify-between h-1/4 md:flex-row md:gap-5'>
          <a href="#" className="hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer">Home</a>
          <a href="#" className="hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer">History</a>
          <a href="#" className="hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer">Contact Us</a>
        </div>
        {/* {session ? (
          <div className='flex flex-col md:flex-row md:items-center md:gap-5 mt-5 md:mt-0'>
            <span className="hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer">Hi, {session.user && session.user.name}</span>
            <button onClick={() => signOut()} className="text-white">Sign Out</button>
          </div>
        ) : (
          <div className='flex flex-col md:flex-row md:items-center md:gap-5 mt-5 md:mt-0'>
            <button onClick={() => signIn()} className="text-white">Sign In</button>
            <a href="#" className="hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer">Sign Up</a>
          </div>
        )} */}
      </div>

    </div>
  )
}

export default Navbar;

//cedae1
{/* <Image 
            height={100} 
            width={100} 
            src="/logo2.webp" 
            alt="logo img"
        /> */}