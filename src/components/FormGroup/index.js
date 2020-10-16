import React from 'react';

const FormGroup = ({ children, ...props }) => {
  return (
    <div className="form-group" {...props}>{children}</div>
  ) 
}


export default React.memo(FormGroup);