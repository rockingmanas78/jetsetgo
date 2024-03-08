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
