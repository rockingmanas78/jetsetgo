"use client";
import { useEffect, useRef, useState } from 'react';
import CarsFilterOption from '@/app/components/home/CarsFilterOption';
import Hero from './components/home/Hero';
import SearchInput from "./components/home/SearchInput";
import { getCarsList } from '@/services';
import CarsList from '@/app/components/home/CarsList';
import ToastMessage from '@/app/components/carBooking/ToastMessage';
import BookCreatedFlagContext from '@/context/BookingCreatedContext';

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [carsLoaded, setCarsLoaded] = useState<boolean>(false);
  const exploreCarsRef = useRef<HTMLDivElement>(null);

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
    <div className='m-0 p-0'>
      <BookCreatedFlagContext.Provider value={{showToast, setShowToast}}>
        <Hero scrollToCarsList={scrollToCarsList} />
        <SearchInput />
        <CarsFilterOption carsList={carsOrgList} 
            setBrand={(value:string) => filterCarList(value)}
            sortCarList={(value:string) => sortCarList(value)}
            />
        <CarsList ref={exploreCarsRef} carsList={carsList} carsLoaded={carsLoaded} />
        {showToast && <ToastMessage mssg={`Booking Created Successfully`} />}
      </BookCreatedFlagContext.Provider>
    </div>
  )
}
