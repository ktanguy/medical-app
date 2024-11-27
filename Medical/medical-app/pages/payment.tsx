import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '@/components/PaymentForm'; // Ensure this path is correct based on your project structure

const stripePromise = loadStripe('your-publishable-key-here');

export default function PaymentPage() {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-2xl rounded-md p-6">
        <h2 className='text-2xl font-bold mb-4'>Payment Page</h2>
        <div className="mb-6">
          <h3 className='text-xl font-semibold'>MTN Mobile Money</h3>
          <p>Instructions for MTN Mobile Money payment...</p>
          {/* Add MTN Mobile Money payment form or instructions here */}
        </div>
        <div>
          <h3 className='text-xl font-semibold'>Stripe Payment</h3>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}