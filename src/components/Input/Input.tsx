import React from 'react';
import { TextField, Icon } from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';

type Props = {
  onChange: (value: string) => void,
  placeholder: string,
  type: 'text' | 'number',
  value: string
}

export const Input = ({ type, placeholder, value, onChange } : Props) => {
  return (
    <TextField
      label=''
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      prefix={<Icon source={SearchMinor} color='base' />}
    />
  );
}

Input.defaultProps = {
  type: 'text'
};