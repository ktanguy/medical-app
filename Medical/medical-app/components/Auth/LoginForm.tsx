'use client'
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { LoginInputProps } from "@/types/types";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Correct import for App Router

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginInputProps>();
  const router = useRouter();

  async function onSubmit(data: LoginInputProps) {
    setIsLoading(true);

    try {
      const response = await axios.post('/api/login', data);
      console.log("User: ", response.data);
      if (response.status === 200) {
        console.log("Login successful");
        // Redirect to the landing page
        router.push('/');
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextInput label="Email" register={register} name="email" type="email" />
          <TextInput label="Password" register={register} name="password" type="password" />
          <div>
            <SubmitButton title="Login" isloading={isLoading} loadingTitle="Logging in, please wait..." />
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Don't have an account?{' '}
          <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}