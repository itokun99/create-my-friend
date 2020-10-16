import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const Button = ({children, size, color, block, type, onClick}) => {
  const buttonClass = classnames('button', {
    [`button--${color}`]: color,
    [`button--${size}`]: size,
    [`button--block`]: block,
  })
  return (
    <button type={type} onClick={onClick} className={buttonClass}>{children}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  block: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.string,
}

Button.defaultProps = {
  color: '',
  block: false,
  size: '',
  children: null,
  type: 'button',
  onClick: () => {}
}


export default Button;