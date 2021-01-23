import React from 'react';
import { SimpleForm, SimpleFormData } from '../controls/SimpleForm';

function Forms() {
  const onSubmit = (data :SimpleFormData) => {
    console.log('form data', data);
  };

  return (
    <React.Fragment>
    <h3>Forms Page</h3>
    <SimpleForm onSubmit={onSubmit} />
    </React.Fragment>
  );
}

export default Forms;