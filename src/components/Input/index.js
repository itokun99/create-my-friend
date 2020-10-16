import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Input = ({ className, type, ...props }) => {
  const inputClass = cx('input', className);

  if (type === 'textarea') {
    return <textarea className={inputClass} {...props} />;
  }

  return <input type={type} className={inputClass} {...props} />;
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string
};

Input.defaultProps = {
  className: '',
  type: 'text'
};

export default Input;