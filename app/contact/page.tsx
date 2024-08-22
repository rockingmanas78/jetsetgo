import React, { useState } from 'react';
import ContactUsForm from '../components/ContactUsForm';
import Head from 'next/head';
import Script from 'next/script';

const ContactForm = () => {

    return (
        <>
        <Head>
            <title>Contact Us | Jet Set Go Cabs - Your Trusted Cab Service Partner</title>
            <meta name="description" content="Call Now for Quick Booking. Book your cab in Jamshedpur today. Safe, comfortable rides to Ranchi, Dhanbad & more. Call Now!"/>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5GNE6KRMLR" />
            <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-5GNE6KRMLR');
            `}
            </Script>
        </Head>
        <div className='h-[60vh]'>
            <ContactUsForm />
        </div>
        </>
    );
};

export default ContactForm;
