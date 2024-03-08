import { useToast } from '@/context/BookingCreatedContext';
import { createBooking } from '@/services';
import React, { useContext, useEffect, useState } from 'react'

function Form({car}:any) {
    const { showToast, toastMessage, setToast } = useToast();
    const [loading, setLoading] = useState<boolean>(false);
    const [formValue, setFormValue] = useState({
        location: '',
        pickUpDate: '',
        dropOffDate: '',
        pickUpTime: '',
        dropOffTime: '',
        userName: '',
        contactNumber: '',
        email: '',
        carId: ''
    })

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

    const handleSubmit = async(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); 
        
        try {
        setLoading(true);
        const resp = await createBooking(formValue);
        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValue),
        });
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            setLoading(false);
            setToast({ showToast: true, toastMessage: 'Booking Created Sussesfully!' })
            setTimeout(() => {
                setToast({ showToast: false, toastMessage: ''});
            }, 5000);
        } else {
            setLoading(false);
            console.error('Server error:', response.statusText);
        }
        } catch (error) {
            setLoading(false);
            console.error('Network error:', error);
        }
    }

    const today = new Date().toISOString().split('T')[0];

  return (
    <div className='text-sm md:text-base'>
        <div className='flex flex-col w-full mb-2 md:mb-5'>
            <label className='text-gray-400'>Pick Up Location</label>
            <input 
                type='text' 
                name="location" 
                onChange={handleChange}
                placeholder='Type Your Pickup Address' 
                className='input input-bordered w-full max-w-lg p-2 md:p-4'
            />
        </div>

        <div className='flex flec-col gap-5 mb-2 md:mb-5 '>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Pick Up Date</label>
                <input 
                    type="date"
                    min={today}
                    name="pickUpDate" 
                    onChange={handleChange}
                    placeholder='Type here' 
                    className='input input-bordered w-full max-w-md p-2 md:p-4 text-sm' 
                />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Drop Off Date</label>
                <input 
                    type="date"
                    name="dropOffDate" 
                    onChange={handleChange}
                    placeholder='Type here' 
                    className='input input-bordered w-full max-w-md p-2 md:p-4 text-sm' 
                />
            </div>
        </div>

        <div className='flex flec-col gap-5 mb-2 md:mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Pick Up Time</label>
                <input 
                    type="time"
                    name="pickUpTime" 
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

        <div className='flex flex-col w-full mb-2 md:mb-5'>
            <label className="input input-bordered flex items-center gap-3">
                <span className='text-gray-400'>Name: </span>
                <input 
                    type="text" 
                    name="userName" 
                    onChange={handleChange}
                    className='grow' 
                />
            </label>
        </div>

        <div className='flex flex-col w-full mb-2 md:mb-5'>
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
        <div className='flex flex-col w-full mb-2 md:mb-5'>
            <label className="input input-bordered flex items-center gap-3">
                <span className='text-gray-400'>Email: </span>
                <input 
                    type="text" 
                    name="email" 
                    onChange={handleChange}
                    className='grow' 
                    placeholder='abc@gmail.com' 
                />
            </label>
        </div>

        <div className="modal-action">
              <button className="btn">Close</button>
              <button className='btn bg-blue-500 text-white hover:bg-blue-800' onClick={handleSubmit}>{loading ? <span className="loading loading-dots loading-md"></span>: "Save"}</button>
          </div>
    </div>
  )
}

export default Form