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
  };
  export type LoginInputProps = {

    email: string;
    password: string;
  
  }