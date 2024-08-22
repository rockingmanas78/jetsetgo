"use client";
import { useEffect, useRef, useState } from 'react';
import CarsFilterOption from '@/app/components/home/CarsFilterOption';
import Hero from './components/home/Hero';
import SearchInput from "./components/home/SearchInput";
import { getCarsList } from '@/services';
import CarsList from '@/app/components/home/CarsList';
import ToastMessage from '@/app/components/carBooking/ToastMessage';
import { useToast } from '@/context/BookingCreatedContext';
import ContactUsForm from './components/ContactUsForm';
import Head from 'next/head';

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [carsLoaded, setCarsLoaded] = useState<boolean>(false);
  const exploreCarsRef = useRef<HTMLDivElement>(null);
  const { showToast, toastMessage, setToast } = useToast();

  const scrollToCarsList = () => {
      exploreCarsRef.current?.scrollIntoView({
        behavior:'smooth',
      });
  }

  useEffect(() => {
    const getCarList_ = async () => {
      const result:any = await getCarsList();
      setCarsList(result?.carLists);
      setCarsOrgList(result?.carLists);
      setCarsLoaded(true);
    };

    getCarList_();
  }, []);

  const filterCarList = (brand: string) => {
    const filteredList = carsOrgList.filter((item:any) => 
      item.carBrand === brand
    )
    setCarsList(filteredList);
  }

  const sortCarList = (order:any) => {
    const sortedData = [...carsOrgList].sort((a, b) => 
      order==-1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  }


  return (
    <div>
      <Head>
        <title>Jet Set Go Cabs: Premier Car Rental and Cab Booking Services in Jamshedpur and Ranchi | Get Your Ride</title>
        <meta name="description" content="Experience top-notch car rental and cab booking with Jet Set Go Cabs. Whether you're looking for Ranchi airport cabs or Tata Ranchi cab services, we've got you covered. Book your hassle-free ride today!"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5GNE6KRMLR">
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5GNE6KRMLR');
            `,
          }}
        />
      </Head>
        <Hero scrollToCarsList={scrollToCarsList} />
        {/* <SearchInput /> */}
        <CarsFilterOption carsList={carsOrgList} 
            setBrand={(value:string) => filterCarList(value)}
            sortCarList={(value:string) => sortCarList(value)}
            />
        <CarsList ref={exploreCarsRef} carsList={carsList} carsLoaded={carsLoaded} />
        <ContactUsForm />
        {showToast && <ToastMessage mssg={toastMessage} />}
    </div>
  )
}
