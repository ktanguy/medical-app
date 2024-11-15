
import Navbar from '@/components/Frontends/Navbar'
import React, { ReactNode } from 'react'
import MegaMenu from '@/components/Frontends/MegaMenu'
export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-blue-700'>
        <Navbar />
        <div className="max-w-5xl mx-auto py-6 ">
          <MegaMenu/>
        </div>
      {children}
    </div>
  )
}
