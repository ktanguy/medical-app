import { UserRole } from "@prisma/client";

export type ServiceProps = {

    title: string;
  
    slug: string;
  
    Image: string;
  
  };

  export type RegisterInputProps = {
    fullName: string;
    email: string;
    password: string;
    phonenumber: string;
    role: UserRole;
  };
  export type LoginInputProps = {

    email: string;
    password: string;
  
  }