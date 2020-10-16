import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import { imgUser } from '../../assets/images';


const UserPhotoItem = ({ name, image, age, onClick }) => {
  const imgSrc = image && image !== 'N/A' ? image : imgUser;
  return (
    <Image isBackgroundImage src={imgSrc} className="user-photo-item" onClick={onClick} />
  )
}

UserPhotoItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.any,
  age: PropTypes.string,
  onClick: PropTypes.func,
}

UserPhotoItem.defaultProps = {
  name: '',
  image: '',
  id: '',
  onClick: () => {},
}

export default React.memo(UserPhotoItem);