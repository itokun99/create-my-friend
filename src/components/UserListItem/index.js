import React from 'react';
import Image from '../Image';
import { imgUser } from '../../assets/images';


const UserListItem = ({ image, title, subtitle, onClick }) => {

  const userImage = image && image !== 'N/A' ? image : imgUser;

  return (
    <div className="user-list-item" onClick={onClick}>
      <Image resizeMode="cover" isBackgroundImage src={userImage} className="user-list-item__image" />
      <div className="user-list-item__text">
        <span className="user-list-item__title">{title}</span>
        <span className="user-list-item__subtitle">{subtitle}</span>
      </div>
    </div>
  )
}

export default React.memo(UserListItem);