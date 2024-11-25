'use client'
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { use, useState } from "react";
import { useForm } from "react-hook-form";


export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const {register,handleSubmit,reset,formState:{errors}}=useForm<RegisterInputProps>()
  async function onSubmit (data:RegisterInputProps){
    console.log(data);
  }
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} action="#"  className="space-y-6">
            <TextInput label="Email" register={register} name="any" type="email"/>

            <TextInput label="Full Name" register={register} name="fullName"/>

            <TextInput label="Phone number" register={register} name="phonenumber"/>

            <TextInput label="password" register={register} name="password" type="password"/>

           

            <div>
              <SubmitButton title="Create Account" isloading={isLoading} loadingTitle="creating please wait..."/>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            You have an account?{' '}
            <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    )
  }

function useLocalForm(): { register: any; handleSubmit: any; reset: any; formState: { errors: any; }; } {
  throw new Error("Function not implemented.");
}
