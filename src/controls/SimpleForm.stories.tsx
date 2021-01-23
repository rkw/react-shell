import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SimpleForm, SimpleFormProps } from './SimpleForm';

export default {
  title: 'SimpleForm',
  component: SimpleForm,
} as Meta;

const Template: Story<SimpleFormProps> = (args) => <SimpleForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: (data) => {alert(`Full Name: ${data.fullName}, Phone Number: ${data.phoneNumber}`)}
};
