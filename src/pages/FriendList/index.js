import React from 'react';
import { NavBar, BottomHover, UserListItem} from '../../components';
import { useHistory } from 'react-router-dom';
import { icUserPlus, icHome } from '../../assets/images';
import { useSelector } from 'react-redux';
import { getFriend } from '../../services';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../modules';


const FriendList = () => {
  const history = useHistory();
  const dispatch  = useDispatch();
  const friends = useSelector(state => state.friend.all);

  React.useEffect(() => {
      dispatch(setLoading(true));
      getFriend()
        .then(() => dispatch(setLoading(false)))
        .catch(() => dispatch(setLoading(false)));
  }, [dispatch])
  



  return (
    <div className="friend-list">
      <NavBar title="Friend List" />
      <div className="friend-list__content">
        {friends.map(friend => {
          return <UserListItem onClick={() => history.push(`/friend/${friend.id}`)}image={friend.photo} key={friend.id} title={`${friend.firstName} ${friend.lastName}`} subtitle={`${friend.age} Yo`} />
        })}
        <div style={{ paddingTop: 150 }}  />
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