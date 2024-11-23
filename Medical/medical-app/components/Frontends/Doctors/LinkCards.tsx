import Link from 'next/link'
import React from 'react'

export default function LinkCards({className}:{className?:string}) {
  return (
    
   <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
     <Link href="#" className={`rounded-md px-5 py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href="#" className={`rounded-md px-5 py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href="#" className={`rounded-md px-5 py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href="#" className={`rounded-md px-5 py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href="#" className={`rounded-md px-5 py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href="#" className={`rounded-md px-5 py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
    </Link>
    <Link href="#" className={`rounded-md px-5 py-3 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
        <h2>Anxiety</h2>
        <span aria-hidden="true">&rarr;</span>
    </Link>
   </div>
   
  )
}
