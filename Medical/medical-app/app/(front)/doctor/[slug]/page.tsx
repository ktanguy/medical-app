'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import FixedBookButton from '@/components/FixedBookButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DoctorDetails from '@/components/DoctorDetails'
import PaymentForm from '@/components/PaymentForm'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const stripePromise = loadStripe('your-publishable-key-here');

export default function Page() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleBookClick = () => {
    setShowPaymentForm(true);
  }

  return (
    <div className='bg-slate-50 min-h-screen p-4'>
      <ToastContainer />
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-2xl rounded-md p-6">
        <div className="py-8 px-6">
          <div className="flex items-center justify-between">
            <div className=''>
              <div className="flex flex-col">
                <h2 className='uppercase font-bold text-2xl tracking-widest text-blue-600'>Vijal Patel, PA-C</h2>
                <p className='text-gray-600 text-xs uppercase'>Adult Health</p>
              </div>
              <div className="py-3">
                <p>In person Doctor Visit</p>
                <p>3250 Lincoln Highway, Kendall Park, NJ 08824</p>
              </div>
            </div>
            <Image src="/doctor.jpg" width={1500} height={1500} alt='Doctor' className='w-36 h-36 rounded-full object-cover' />
          </div>
        </div>
        <div className="px-6 py-4">
          <h3 className='text-xl font-semibold text-blue-600'>Service Details</h3>
          <p className='mt-2 text-gray-600'>
            Dr. Vijal Patel specializes in adult health and provides comprehensive care for a wide range of health issues. Services include routine check-ups, management of chronic conditions, and preventive care. Dr. Patel is dedicated to providing personalized care and ensuring the well-being of all patients.
          </p>
        </div>
        
        <div className="px-6 py-4">
          <DoctorDetails />
        </div>
      </div>
      {showPaymentForm ? (
        <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-2xl rounded-md p-6 mt-6 mb-6">
          <h2 className='text-2xl font-bold mb-4 text-blue-600'>Payment Page</h2>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      ) : (
        <FixedBookButton onClick={handleBookClick} />
      )}
    </div>
  )
}