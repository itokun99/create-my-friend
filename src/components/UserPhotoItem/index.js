import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import { imgUser } from '../../assets/images';


const UserPhotoItem = ({ image, onClick }) => {
  const imgSrc = image && image !== 'N/A' ? image : imgUser;
  return (
    <Image isBackgroundImage src={imgSrc} className="user-photo-item" onClick={onClick} />
  )
}

UserPhotoItem.propTypes = {
  image: PropTypes.any,
  onClick: PropTypes.func,
}

UserPhotoItem.defaultProps = {
  image: '',
  onClick: () => {},
}

export default React.memo(UserPhotoItem);