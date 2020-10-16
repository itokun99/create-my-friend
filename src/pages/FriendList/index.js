import React from 'react';
import { NavBar, BottomHover, UserListItem} from '../../components';
import { useHistory } from 'react-router-dom';
import { icUserPlus, icHome } from '../../assets/images';
import { useSelector } from 'react-redux';
import { getFriend } from '../../services';


const FriendList = () => {
  const history = useHistory();
  const friends = useSelector(state => state.friend.all);
  
  React.useEffect(() => {
    getFriend()
  }, []);
  



  return (
    <div className="friend-list">
      <NavBar title="Friend List" />
      <div className="friend-list__content">
        {friends.map(friend => {
          return <UserListItem image={friend.photo} key={friend.id} title={`${friend.firstName} ${friend.lastName}`} subtitle={`${friend.age} Yo`} />
        })}
      </div>
      <BottomHover 
        onClickLeft={() => history.push('/friend/add')} 
        onClickRight={() => history.push('/dashboard')} 
        imageLeft={icUserPlus} 
        imageRight={icHome} />
    </div>
  )
}


export default FriendList;