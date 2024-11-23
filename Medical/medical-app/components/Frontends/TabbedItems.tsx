'use client'
import { Tabs } from "flowbite-react";
import { content } from "flowbite-react/tailwind";
import { Activity, Glasses, Microscope, Stethoscope, Syringe, X, XCircle } from "lucide-react";
import { title } from "process";
import ServicesList from "./Services/ServicesList";
import LinkCards from "./Doctors/LinkCards";



export default function TabbedItems() {
  const services=[{
    title: "Telehealth",
    Image:"/work.jpg",
    slug: "tele-health",
  },
  {
    title: "Video prescription refill",
    Image:"/work.jpg",
    slug: "tele-health",
  },{
    title: "UTI consult",
    Image:"/work.jpg",
    slug: "tele-health",
  },{
    title: "Mental health consult",
    Image:"/work.jpg",
    slug: "tele-health",
  },{
    title: "Urgent care",
    Image:"/work.jpg",
    slug: "tele-health",
  },




]
const tabs = [
  {
    title : "Popular services",
    icon : Stethoscope,
    component: <ServicesList data={services}/> ,
    content :[]
  },
  {
    title : "Doctors",
    icon : Microscope,
    component: <LinkCards /> ,
    content :[]
  },
  {
    title : "Specialists",
    icon : Activity,
    component: <LinkCards className="bg-blue-500"/> ,
    content :[]
  },
  {
    title : "Symptoms",
    icon : Syringe,
    component: <LinkCards className="bg-red-800"/> ,
    content :[]
  }
]

  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      {
        tabs.map((tab, i) => {
          return (
            <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
              {tab.component}
      </Tabs.Item>
          )
        })
      }
      
    </Tabs>
  );
}
