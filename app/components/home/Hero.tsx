import Image from 'next/image'
import React from 'react'
import CarImage from "../../../public/sedan-image.jpg";
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] })
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Hero = (props: any) => {
    const { scrollToCarsList } = props;
    const message = 'Hello! I would like to know more about your services.';
    const phoneNumber = '+918092843127';
  
    const handleWhatsapp = () => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    };
  
    const handleCall = () => {
      window.location.href = `tel:${phoneNumber}`;
    };
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 m-5 md:m-10'>
    <div className={montserrat.className}>
    <h2 className='text-[30px] sm:text-[40px] md:text-[60px] font-bold text-[#001b2d] mb-4'>
        Premium Car Rental in Your Area
    </h2>
    <h2 className='text-[16px] md:text-[22px] text-gray-600 md:pr-20 mt-2 font-medium'>
        Book the selected car effortlessly, Pay for driving only, Book the Car Now
    </h2>

    {/* Why Ride with Us List */}
    <div className='w-full md:w-4/5 mt-8 bg-white p-6 rounded-lg shadow-inner'>
        <h3 className='text-[20px] md:text-[24px] font-semibold text-[#003D60] mb-4'>
        Why Ride with Us?
        </h3>
        <ul className='list-inside list-disc space-y-1 md:space-y-3 text-gray-700 text-[12px] md:text-[18px]'>
        <li>Reliable, safe, and comfortable intercity travel.</li>
        <li>24/7 service with professional drivers.</li>
        <li>Premium cars at affordable rates.</li>
        <li>Covering routes to Ranchi, Dhanbad, Bokaro, Deoghar, and more.</li>
        </ul>
    </div>

    {/* Explore Cars Button */}
    <div className='mt-8 text-center'>
        <button
        onClick={scrollToCarsList}
        className='py-3 px-8 bg-[#193855] text-white text-[18px] font-semibold rounded-full hover:scale-110 hover:bg-[#436286] transition-transform duration-300'
        >
        Explore Cars
        </button>
    </div>
    </div>
        <div className='flex items-center justify-center'>
            <Image src={CarImage} alt='Car' height={400} width={500} className='w-9/12 object-cover align-center' />
        </div>
    </div>
    <div
        className="fixed top-[73vh] right-[6%] z-10 bg-white rounded-lg md:top-[82vh]"
        onClick={handleCall}
        >
        <PhoneInTalkIcon sx={{ fontSize: '35px', height: "50px", width: "50px", color: '#ffffff', backgroundColor: '#0c1f2f', borderRadius: "20%", padding: "5px" }} />
    </div>
    <div
        className="fixed top-[80vh] right-[5%] z-10 md:top-[90vh]"
        onClick={handleWhatsapp}
        >
        <img src="/whatsapp2.gif" className="h-[70px] w-[70px] rounded-md" />
    </div>
    </>
  )
}

export default Hero