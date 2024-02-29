import React, { useEffect, useState } from 'react'
import CarCard from './CarCard'
import BookingModal from '../carBooking/BookingModal'

const CarsList = (props: any) => {
  const [isLoaded, setisLoaded] = useState(true);
  const [selectedCar, setSelectedCar] = useState<any>([]);

  useEffect(()=> {
    if(props.carsList){
      setisLoaded(false);
    }
  }, [props.carsList])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5'>
        {props.carsList?.map((car: any, index: number) => (
            <div key={index} onClick={() => {
                (window as any).my_modal_4.showModal();
                setSelectedCar(car);
            }}>
                <CarCard car={car} />
            </div>
        ))}
      <dialog id="my_modal_4" className="modal">
        <BookingModal selectedCar={selectedCar} />
      </dialog>
    </div>
  )
}

export default CarsList

// lg:grid-cols-4