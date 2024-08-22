import React from 'react';
import Logo from "../../public/logo.png";
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

const AboutUs = () => {
  return (
    <>
        <Head>
          <title>About Jet Set Go Cabs - Leading Cab and Car Rental Service in Jamshedpur & Ranchi</title>
          <meta name="description" content="Discover more about Jet Set Go Cabs, Jamshedpur's leading car rental and cab booking service. Learn about our mission to provide safe, reliable, and comfortable transportation solutions. Know our story."/>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5GNE6KRMLR" />
          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5GNE6KRMLR');
            `}
          </Script>
      </Head>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">About Jet Set Go Cabs</h1>
      <p className="text-lg text-center mb-8">Your trusted partner for comfortable and reliable cabs in Jamshedpur and Ranchi</p>
      
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 flex justify-center items-center">
          <Image src={Logo} alt="About Us" className="rounded-lg shadow-lg w-1/2 md:w-4/5 h-auto" height={150} width={150} />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">At Jet Set Go Cabs, our mission is to provide exceptional and reliable transportation services that exceed our customers' expectations. With a focus on comfort, safety, and punctuality, we strive to be your first choice for cab services in and around Jamshedpur and Ranchi.</p>
          
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Experienced and courteous drivers</li>
            <li>Modern and well-maintained fleet</li>
            <li>Transparent pricing with no hidden charges</li>
            <li>Easy booking and flexible payment options</li>
            <li>24/7 availability for all your travel needs</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="mb-8">Behind every successful ride is our dedicated team who ensures your experience is seamless from start to finish.</p>
        {/* Add team members' profiles here */}
      </div>
    </div>
    </>
  );
};

export default AboutUs;
