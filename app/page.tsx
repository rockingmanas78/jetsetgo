"use client";
import { useEffect, useState } from 'react';
import CarsFilterOption from '@/components/home/CarsFilterOption';
import Hero from '../components/home/Hero';
import SearchInput from "../components/home/SearchInput";
import { getCarsList } from '@/services';
import CarsList from '@/components/home/CarsList';
import ToastMessage from '@/components/carBooking/ToastMessage';
import { BookCreatedFlagContext } from '@/context/BookingCreatedContext';

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    const getCarList_ = async () => {
      const result:any = await getCarsList();
      setCarsList(result?.carLists);
      setCarsOrgList(result?.carLists);
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
    <div className='p-5 sm:px-10 md:px-20'>
      <BookCreatedFlagContext.Provider value={{showToast, setShowToast}}>
        <Hero />
        <SearchInput />
        <CarsFilterOption carsList={carsOrgList} 
            setBrand={(value:string) => filterCarList(value)}
            sortCarList={(value:string) => sortCarList(value)}
            />
        <CarsList carsList={carsList} />
        {showToast && <ToastMessage mssg={`Booking Created Successfully`} />}
      </BookCreatedFlagContext.Provider>
          
    </div>
  )
}
