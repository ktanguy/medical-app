import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceProps } from '@/types/types'

export default function ServiceCard({ service }: { service: ServiceProps }) {
  return (
    <Link href={`/services/${service.slug}`} className='rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-4 overflow-hidden'>
      <Image src={service.Image} width={1170} height={848} alt={service.title} className='w-1/3 object-cover aspect-video' />
      <div className='flex flex-col w-2/3 p-4'>
        <h2 className='text-lg font-semibold text-gray-800'>{service.title}</h2>
        <p className='text-sm text-gray-600 mt-2'>936 Doctors Available</p>
      </div>
    </Link>
  )
}