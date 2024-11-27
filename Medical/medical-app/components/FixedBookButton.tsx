'use client'
import { Plus } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"

interface FixedBookButtonProps {
  onClick: () => void;
}

export default function FixedBookButton({ onClick }: FixedBookButtonProps) {
  return (
    <div className="fixed bottom-0 w-full bg-white z-50 shadow-2xl py-8 px-6 rounded-md border border-gray-200">
      <div className="max-w-4xl mx-auto items-center flex justify-between gap-4">
        <div className="w-full">
          <p className='font-bold uppercase'>$56</p>
          <p className='font-semibold text-sm'>Sat, Nov 23 - 8:45 PM GMT+2</p>
        </div>
        <Button
          onClick={onClick}
          variant="outline"
          className="inline-flex items-center justify-center w-full px-4 py-6 text-sm font-semibold uppercase tracking-widest leading-5 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500 hover:text-slate-50"
        >
          <Plus className="w-5 h-5 mr-1" />
          Book
        </Button>
      </div>
    </div>
  )
}