import React from 'react';
import { Container, ProfileDashboard, BottomHover, FriendGrid } from '../../components';
import { icUserPlus, icContact } from '../../assets/images';
import { useHistory } from 'react-router-dom';
import { getFriend } from '../../services';

const Dashboard = () => {
  const history = useHistory();
  
  return (
    <div className="dashboard">
      <ProfileDashboard />
      <FriendGrid />
      <BottomHover 
        onClickLeft={() => history.push('/friend/add')} 
        onClickRight={() => history.push('/friend')} 
        imageLeft={icUserPlus} 
        imageRight={icContact} />
    </div>
  )
}

export default Dashboard;