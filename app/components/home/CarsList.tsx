import React, { forwardRef, useEffect, useState } from 'react'
import CarCard from './CarCard'
import BookingModal from '../carBooking/BookingModal'
import CarCardSkeleton from './CarCardSkeleton';

interface CarsListProps {
  carsList: Array<any>
  carsLoaded: boolean
}

const CarsList = forwardRef<HTMLDivElement, CarsListProps>(({ carsList, carsLoaded }, ref) => {
  const [selectedCar, setSelectedCar] = useState<any | null>(null);
  const loader = [1, 2, 3];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if(!carsLoaded){
    return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 sm:mx-15 md:mx-25'>
    {loader.map((_, index: number) =>  (
       <CarCardSkeleton key={index} />
    ))}
    </div>
  }

  const handleCarClick = (car: any) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // return (
  //   <div ref={ref} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5'>

  //     {isModalOpen && selectedCar && (
  //       <dialog open={isModalOpen} className="modal">
  //         <BookingModal selectedCar={selectedCar} />
  //         <button onClick={closeModal}>Close</button> 
  //       </dialog>
  //     )}
  //   </div>
  // );

  return (
    <div ref={ref} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5'>
      {carsList?.map((car) => (
        <div key={car.id} onClick={() => handleCarClick(car)}>
          <CarCard car={car} />
        </div>
      ))}
      {isModalOpen && selectedCar && (
        <dialog open={isModalOpen} className="modal"> {/* Use `open` attribute here */}
          <BookingModal selectedCar={selectedCar} />
          <button onClick={() => setIsModalOpen(false)}>Close</button> {/* Add a close button */}
        </dialog>
      )}
    </div>
  );
});

CarsList.displayName = 'CarsList';

export default CarsList;