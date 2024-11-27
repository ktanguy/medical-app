
import Navbar from '@/components/Frontends/Navbar'
import React, { ReactNode } from 'react'
import MegaMenu from '@/components/Frontends/MegaMenu'
import Footer from '@/components/Frontends/footer'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-white'>
        <Navbar />
       
      
      <div className='mt-[80px]'>
      {children}
      </div>
      <Footer/>
    </div>
  )
}
