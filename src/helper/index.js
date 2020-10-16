import React from 'react';


export const useForm = initialValue => {
  const [values, setValues] = React.useState(initialValue);
  return [
    values,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setValues(initialValue);
      }
      return setValues({ ...values, [formType]: formValue });
    }
  ];
};