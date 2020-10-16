import React from 'react';
import Image from '../Image';
import { imgUser } from '../../assets/images';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const ProfileDashboard = () => {
  const history = useHistory();
  const profile = useSelector(state => state.profile);

  const image = profile && profile.image ? profile.image : imgUser;
  
  return (
    <div className="profile-dashboard">
      <h3 className="profile-dashboard__title">Hello,<br /> {profile && profile.name}</h3>
      <Image src={image} onClick={() => history.push('/menu')} isBackgroundImage className="profile-dashboard__image" />
    </div>
  )
}


export default React.memo(ProfileDashboard);
