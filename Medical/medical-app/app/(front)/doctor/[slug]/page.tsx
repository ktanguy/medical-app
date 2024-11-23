import React from 'react'
import Image from 'next/image'
import DoctorDetails from '@/components/DoctorDetails'
import { Button } from "@/components/ui/button"
import FixedBookButton from '@/components/FixedBookButton'


export default function page() {
  return (
    <div className='bg-slate-50  min-h-screen'>
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-2xl rounded-md">
      <div className="py-8 px-6">
        <div className="flex items-center justify-between ">
            <div className=''>
            <div className="flex flex-col">
        <h2 className='uppercase font-bold text-2xl tracking-widest'>Vijal Patel, PA-C</h2>
        <p className='text-gray-600 text-xs uppercase'>Adult Health</p>
        </div>
            <div className="py-3">
            <p>In person Doctor Visit</p>
            <p>3250 Lincoln Highway, Kendall Park, NJ 08824</p>
            </div>
            </div>
            <Image src="/doctor.jpg" width={1500} height={1500} alt='Doctor' className='w-36 h-36 rounded-full object-cover'/>
        </div>
        
      </div>
      <div className="">
      <DoctorDetails/>
      </div>
      
      </div>
      <FixedBookButton/>
      
    </div>
  )
}
