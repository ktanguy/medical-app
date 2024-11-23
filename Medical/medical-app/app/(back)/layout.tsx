import Navbar from '@/components/Dashboard/Navbar'
import Sidebar from '@/components/Dashboard/SideBar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <Navbar/>
        <div className="flex">
        <Sidebar/>
        <div className="p-8">
        {children}
        </div>
        </div>
    </div>
  )
}