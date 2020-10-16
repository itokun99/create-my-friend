import  React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Container = ({ children, size }) => {
  const containerClass = cx('container', {
    [`container--${size}`]: size
  })
  return (
    <div className={containerClass}>{children}</div>
  )
};

Container.propTypes = {
  size: PropTypes.string
}

Container.defaultProps = {
  size: ''
}

export default React.memo(Container);