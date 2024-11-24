"use client"
 
import { Calendar } from "@/components/ui/calendar"

import React from 'react'

export default function Availability () {
    const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date())
    const GMT =bookDate?.toString().split("GMT")[1].split(" ")[0]
    const formattedDate = `${bookDate?.toString().split(" ").slice(0, 3).join(" ") } -GMT ${GMT}`;
    
    console.log(formattedDate,GMT)
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
    <div className="mb-[100px]">
      <h2 className="font-bold pb-4 text-2xl uppercase text-slate-500 -tracking-wider">Select a Date and Time</h2>
      <div className="grid grid-cols-2 gap-4 lg:gap-0">
        <div className="sm:col-span-1 col-span-full">
        <Calendar
      mode="single"
      selected={bookDate}
      onSelect={setBookDate}
      className="rounded-md border"
    />
        </div>
        <div className="sm:col-span-1 col-span-full">
            <h2 className=" pb-4 px-4 font-sembold uppercase text-center py-3 border border-blue-700 text-blue-400">{formattedDate}</h2>
            <div className="py-3 grid grid-cols-3 gap-2">
                    {
                        timeStamps.slice(0,5).map((item, i)=>{
                            return <button className='bg-blue-600 text-white p-2  text-sm rounded-lg text-center' key={i} >{item.time}{item.period}</button>
                        })
                        
                    }
                    <button className='bg-blue-400 text-white text-sm py-2 px-3 rounded-lg text-center' >More times</button>
                
                </div>
        </div>
      </div>
    </div>
  )
}
