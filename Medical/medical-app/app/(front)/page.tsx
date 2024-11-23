import DoctorsList from '@/components/DoctorsList';
import Brands from '@/components/Frontends/Brands';
import Hero from '@/components/Frontends/Hero';
import MegaMenu from '@/components/Frontends/MegaMenu';
import TabbedSection from '@/components/Frontends/TabbedSection';
import React from 'react'

export default function Home() {
  return (
    
      <section className=''>
        
       <Hero/>
       <Brands/>
       <TabbedSection/>
       <DoctorsList/>
       <DoctorsList className='bg-white py-8 lg:py-24'  title='In person Doctor Visit' isInperson={true}/>
      </section>
    
  );
}