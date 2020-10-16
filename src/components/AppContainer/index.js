import React from 'react';
import PropTypes from 'prop-types';

const AppContainer = ({ children }) => {
  return (
    <div className="app-container">
      {children}
    </div>
  )
}


AppContainer.propTypes = {
  children: PropTypes.node
}
AppContainer.defaultProps = {
  children: null
}


export default React.memo(AppContainer);