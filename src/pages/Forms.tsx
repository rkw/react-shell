import React from 'react';
import { useForm } from "react-hook-form";

type IFormData = {
  fullName: string;
  phoneNumber: number;
};

function Forms() {
  const { register, handleSubmit, errors } = useForm<IFormData>();
  
  const onSubmit = (data :IFormData) => {
    console.log('form data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Forms Page</h3>
      <label>Full Name</label>
      <input type="text" name="fullName" ref={register({ required: true, maxLength: 20 })} />
      {errors.fullName && "Full name is required"}
      <label>Phone Number</label>
      <input type="tel" name="phoneNumber" ref={register} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Forms;