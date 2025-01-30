

import React from 'react';
import { Container, Input, Button, Break, Text,Select } from '../assets/opt';

export default function OptForm({ children, onSubmit, ...restProps }) {
  return <Container as="form" onSubmit={onSubmit} {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ onChange, value, ...restProps }) {
  return <Input onChange={onChange} value={value} {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src='/images/icons/chevron-right.png' alt='Try Now' />
    </Button>
  );
};

OptForm.Select = function OptFormSelect({ onChange, value, children, ...restProps }) {
  return <Select onChange={onChange} value={value} {...restProps}>{children}</Select>;
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

