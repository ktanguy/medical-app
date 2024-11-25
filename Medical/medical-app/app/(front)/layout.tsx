
import Navbar from '@/components/Frontends/Navbar'
import React, { ReactNode } from 'react'
import MegaMenu from '@/components/Frontends/MegaMenu'
export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-white'>
        <Navbar />
        {/*<div className="bg-white mx-auto py-4 fixed top-20 w-full left-0 right-0 z-50 border-t border-blue-400/30 container">
          <MegaMenu />
        </div>*/}
      
      <div className='mt-[80px]'>
      {children}
      </div>
    </div>
  )
}
