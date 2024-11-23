import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './ToggleButton'
import Link from 'next/link'
import DoctorCard from './DoctorCard'
import { MapIcon } from 'lucide-react'
import DoctorsListCarousel from './DoctorsListCarousel'

export default function DoctorsList({title='Telehealth',isInperson,className= "bg-pink-100 py-8 lg:py-24"}:{title?:string;isInperson?:boolean;className?:string}) {
  const doctors = [
    {
      name:"Dr. John 6"
    },
    {
      name:"Dr. John 3"
    },
    {
      name:"Dr. John 1"
    },
    {
      name:"Dr. John 2"
    },
    {
      name:"Dr. John 3"
    },
    {
      name:"Dr. John 4"
    },
  ]
  return (
    <div className={className}>
      <div className='max-w-6xl mx-auto'>
      <SectionHeading title={title}/>
      <div className="py-4 flex items-center justify-between ">
            {isInperson ?(
              <Link href="" className='text-blue-700 font-semibold items-center text-sm flex'>
                <MapIcon className='mr-2 flex-shrink-0 w-4 h-4`'/>
                <span>Map view</span>
                </Link>
            ):(
              <ToggleButton/>
            )}
            <Link className='py-3 px-6 border border-blue-600 bg-white' href="#">See all</Link>
            
      </div>
      <div className="py-6">
              <DoctorsListCarousel doctors={doctors} isInperson={isInperson}/>
            </div>
      </div>
    </div>
  )
}
