import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from '@material-ui/core';

type IFormData = {
  fullName: string;
  phoneNumber: number;
};

function Forms() {
  const { handleSubmit, control, errors } = useForm<IFormData>();
  
  const onSubmit = (data :IFormData) => {
    console.log('form data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Forms Page</h3>
      <Controller
        name="fullName"
        as={
          <TextField
            id="fullName"
            helperText={errors.fullName ? errors.fullName.message : null}
            label="Full Name"
            error={errors.fullName ? true : false}
          />
        }
        control={control}
        defaultValue=""
        rules={{
          required: true,
          maxLength: 20
        }}
      />
      <Controller
        name="phoneNumber"
        as={
          <TextField
            id="phoneNumber"
            type="tel"
            helperText={errors.phoneNumber ? errors.phoneNumber.message : null}
            label="Phone Number"
            error={errors.phoneNumber ? true : false}
          />
        }
        control={control}
        defaultValue=""
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Forms;