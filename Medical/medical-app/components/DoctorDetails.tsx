'use client'
import React from 'react'

export default function DoctorDetails() {
    const [isActive, setIsActive] = React.useState('availability')
  return (
    <div className=''>
      <div className="flex items-center justify-between ">
        <button onClick={()=>setIsActive("details")} className={isActive==="details"?'py-4 px-8 w-full bg-blue-600 text-white uppercase tracking-wider':'py-4 px-8 bg-slate-100 w-full text-slate-800 uppercase tracking-wider'}>Service Details</button>
        <button onClick={()=>setIsActive("availability")} className={isActive==="availability"?'py-4 px-8 w-full bg-blue-600 text-white uppercase tracking-wider':'py-4 px-8 bg-slate-100 w-full text-slate-800 uppercase tracking-wider'}>Availability</button>
      </div>
        <div className="py-8 px-6">
            {isActive==='availability'?(
                <div>
                Availability details Component
              </div>
              
            ):
            (
              <div>
                Service details Component
              </div>
        
        )}
        
      
        </div>
      
    </div>
  )
}
