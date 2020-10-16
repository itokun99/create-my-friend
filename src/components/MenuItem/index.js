import React from 'react';
import PropTypes from 'prop-types'
import Image from '../Image';
import { icArrowRight } from '../../assets/images';


const MenuItem = ({ title, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
      <span className="menu-item__title">{title}</span>
      <Image src={icArrowRight} className="menu-item__image" />
    </div>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

MenuItem.defaultProps = {
  title: '',
  onClick: () => {}
}


export default React.memo(MenuItem);