import { VideoCameraIcon } from '@heroicons/react/24/outline'
import { Stethoscope, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PiCommandThin } from 'react-icons/pi'

export default function DoctorCard({isInperson=false}:{isInperson?:boolean}) {
    
    const timeStamps=[
        {
            time: '9:00 ',
            period:'AM'
        },
        {
            time: '10:00 ',
            period:'AM'
        },
        {
            time: '11:00 ',
            period:'AM'
        },
        {
            time: '12:00 ',
            period:'AM'
        },
        {
            time: '13:00 ',
            period:'PM'
        },
        {
            time: '14:00 ',
            period:'PM'
        },
        {
            time: '15:00 ',
            period:'PM'
        },
    ];
  return (
    <div  className='border border-gray-200 bg-white inline-flex flex-col py-8 px-6 rounded-md hover:border-gray-300 duration-300 transition-all'>
      <Link href='/doctor/slug'>
      <h2 className='uppercase font-bold text-2xl tracking-widest'>Vijal Patel, PAC</h2>
        {isInperson && (<p className='py-3'>3250 Lincoln Highway, Kendall Park, NJ 08824</p>)}
        <div className='flex items-center py-4 gap-4'>
            <div className="relative">
            <Image src="/doctor.jpg" width={1500} height={1500} alt='Doctor' className='w-24 h-24 rounded-full object-cover'/>
            {!isInperson && (<p className='absolute bottom-0 right-2 bg-blue-300 text-blue-600 w-9 h-9 flex items-center justify-center rounded-full'><Video className='w-6 h-6' /></p>)}
            </div>
            
            <div className='flex flex-col gap-2'>
                <p className='flex items-center'>
                    <Stethoscope className='w-4 h-4 mr-2 flex-shrink-0'/>
                    <span>Family Medicine</span>
                </p>
                <p className="bg-green-200 py-3 px-6 uppercase">Available Today</p>
            </div>
        </div>
      </Link>
        <div className="pt-6 border-t border-gray-400">
            <h3 className='flex gap-4 justify-between items-center'><span>Thu, Nov 21</span><span className='text-green-600 font-bold '>$124</span>
                
            </h3>
            <div className="py-3 grid grid-cols-3 gap-2">
                    {
                        timeStamps.slice(0,5).map((item, i)=>{
                            return <Link className='bg-blue-600 text-white p-2  text-sm rounded-lg text-center' key={i} href="#">{item.time}{item.period}</Link>
                        })
                        
                    }
                    <Link className='bg-blue-400 text-white text-sm py-2 px-3 rounded-lg text-center' href="/doctor/slug">More times</Link>
                
                </div>
        </div>
    </div>
  )
}
