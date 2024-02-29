import { BookCreatedFlagContext } from '@/context/BookingCreatedContext';
import { createBooking } from '@/services';
import React, { useContext, useEffect, useState } from 'react'

function Form({car}:any) {
    const {showToast, setShowToast} = useContext(BookCreatedFlagContext);
    const [formValue, setFormValue] = useState({
        location: '',
        pickUpDate: '',
        dropOffDate: '',
        pickUpTime: '',
        dropOffTime: '',
        userName: '',
        contactNumber: '',
        carId: ""
    })

    const today = Date.now();

    useEffect(() => {
      if(car) {
        setFormValue({
            ...formValue,
            carId: car.id
        });
      }
    
    }, [car])
    

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async() => {
        const resp = await createBooking(formValue);
        // console.log(resp);
        if(resp){
            setShowToast(true);
        }
    }

  return (
    <div>
        <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-400'>Pick Up Location</label>
            <input 
                type='text' 
                name="location" 
                onChange={handleChange}
                placeholder='Type Your Pickup Address' 
                className='input input-bordered w-full max-w-lg'
            />
            {/* <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Pickup Location</option>
                <option>Kadma</option>
                <option>Sonari</option>
                <option>Bistupur</option>
                <option>Sakchi</option>
                <option>Mango</option>
                <option>Sidhgora</option>
                <option>Baridih</option>
            </select> */}
        </div>
        <div className='flex flec-col gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Pick Up Date</label>
                <input 
                    type="date"
                    min={today}
                    name="pickupDate" 
                    onChange={handleChange}
                    placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' 
                />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Drop Off Date</label>
                <input 
                    type="date"
                    name="dropOffDate" 
                    onChange={handleChange}
                    placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' 
                />
            </div>
        </div>

        <div className='flex flec-col gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Pick Up Time</label>
                <input 
                    type="time"
                    name="pickupTime" 
                    onChange={handleChange}
                    placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' 
                />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Drop Off Time</label>
                <input 
                    type="time" 
                    name="dropOffTime" 
                    onChange={handleChange}
                    placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' 
                />
            </div>
        </div>

        <div className='flex flex-col w-full mb-5'>
            <label className="input input-bordered flex items-center gap-3">
                <span className='text-gray-400'>Name: </span>
                <input 
                    type="text" 
                    name="customerName" 
                    onChange={handleChange}
                    className='grow' 
                />
            </label>
        </div>

        <div className='flex flex-col w-full mb-5'>
            <label className="input input-bordered flex items-center gap-3">
                <span className='text-gray-400'>Contact: </span>
                <input 
                    type="text" 
                    name="contactNumber" 
                    onChange={handleChange}
                    className='grow' 
                    placeholder='+91...' 
                />
            </label>
        </div>

        <div className="modal-action">
              <button className="btn">Close</button>
              <button className='btn bg-blue-500 text-white hover:bg-blue-800' onClick={handleSubmit}>Save</button>
          </div>
    </div>
  )
}

export default Form