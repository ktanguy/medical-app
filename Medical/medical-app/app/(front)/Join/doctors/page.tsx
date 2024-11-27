import { CustomButton } from '@/components/CustomButton'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className='min-h-screen'>
      <section className='py-12 px-4'>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className='md:text-5xl text-2xl leading-loose'>Build a thriving <span className='font-semibold text-5xl text-blue-600'>direct-pay</span> practice with CareLink</h2>
            <p className='py-4'>Sesame is a full-service platform to help you build and run your practice and care for patients for virtual care, in-person care, or both.</p>
            <CustomButton />
            <p className='mt-6 font-semibold flex items-center'><Check className='mr-2 text-blue-600' />Sesame brings patients to you</p>
            <p className='mt-2 font-semibold flex items-center'><Check className='mr-2 text-blue-600' />Seamless e-prescribing experience</p>
            <p className='mt-2 font-semibold flex items-center'><Check className='mr-2 text-blue-600' />Integrated clinical note-taking</p>
          </div>
          <Image src="/Tk.jpg" alt='' width={3200} height={2133} className='w-full rounded-lg' />
        </div>
      </section>

      <section className='py-12 px-4 bg-gray-100'>
        <div className="max-w-6xl mx-auto text-center">
          <blockquote className='text-2xl italic font-semibold text-gray-700'>
            "The best way to find yourself is to lose yourself in the service of others."
          </blockquote>
          <cite className='block mt-4 text-lg font-medium text-gray-600'>- Mahatma Gandhi</cite>
        </div>
      </section>

      <section className='py-12 px-4'>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className='text-6xl font-bold text-blue-600'>CareLink</h1>
        </div>
      </section>
    </div>
  )
}