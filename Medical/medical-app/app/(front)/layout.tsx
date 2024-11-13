import Navbar from '@/components/Frontends/Navbar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <Navbar />
      {children}
    </div>
  )
}
