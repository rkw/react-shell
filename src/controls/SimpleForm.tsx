import React from 'react';

import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from '@material-ui/core';

import './SimpleForm.css';

export interface SimpleFormProps {
  initialData?: SimpleFormData,
  onSubmit?: (data :SimpleFormData) => void
}

export interface SimpleFormData {
  fullName: string,
  phoneNumber?: number
}

export const SimpleForm: React.FC<SimpleFormProps> = ({
  initialData = {
    fullName: '',
    phoneNumber: ''
  },
  onSubmit = () => {},
  ...props
}) => {
  const { handleSubmit, control, errors } = useForm<SimpleFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        defaultValue={initialData.fullName}
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
        defaultValue={initialData.phoneNumber}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
