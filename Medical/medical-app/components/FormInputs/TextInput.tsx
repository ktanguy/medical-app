import React from 'react'


type TextInputProps = {
    label: string;
    register: any; // Adjust the type as needed
    name: string;
    type?: any;
}

export default function TextInput({label,register,name,type="string"}:TextInputProps) {
  return (
    <div>
              <label htmlFor={`${name}`} className="block text-sm/6 font-medium text-gray-900">
                {label}
              </label>
              <div className="mt-2">
                <input
                {...register(`${name}`,{required:true})}
                  id={`${name}`}
                  name={`${name}`}
                  type={type}
                  required 
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
               
              </div>
            </div>
  )
}
