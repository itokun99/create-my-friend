import React from 'react';
import { ProfileDashboard, BottomHover, FriendGrid } from '../../components';
import { icUserPlus, icContact } from '../../assets/images';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();
  
  return (
    <div className="dashboard">
      <ProfileDashboard />
      <FriendGrid />
      <div style={{ paddingTop: 150 }}  />
      <BottomHover 
        onClickLeft={() => history.push('/friend/add')} 
        onClickRight={() => history.push('/friend')} 
        imageLeft={icUserPlus} 
        imageRight={icContact} />
    </div>
  )
}

export default Dashboard;