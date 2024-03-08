"use client"
import { useToast } from '@/context/BookingCreatedContext'
import React, { useState } from 'react'

const ContactUsForm = () => {
    const { setToast } = useToast();
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (response.ok){
                const result = await response.json();
                console.log(result);
                setLoading(false);
                setToast({ showToast: true, toastMessage: 'Form Submitted Successfully!' })
                setTimeout(() => {
                    setToast({ showToast: false, toastMessage: ''});
                }, 3000);
            }
        } catch (error) {
            
        }
    };
  return (
    <div className='max-w-2xl mx-auto p-4 my-5 md:my-10'>
        <h2 className="text-2xl md:4xl font-bold text-center mb-6">Contact Us</h2>
            <h3 className='text-lg md:text-xl font-normal text-center'>Feel free to submit your queries regarding any customized service you might want</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="inline-flex justify-center w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        {loading ? <span className="loading loading-dots loading-md"></span>: "Send Message"}
                    </button>
                </div>
            </form>
    </div>
  )
}

export default ContactUsForm