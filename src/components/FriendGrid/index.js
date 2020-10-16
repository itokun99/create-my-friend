import React from 'react'
import { useSelector } from 'react-redux';
import { getFriend } from '../../services';
import UserPhotoItem from '../UserPhotoItem';
import { useHistory } from 'react-router-dom';


const FriendGrid = () => {
  const history = useHistory();
  const friends = useSelector(state => state.friend.all);

  React.useEffect(() => {
      getFriend();
  }, [])

  return (
    <div className="friend-grid">
      {friends.map(
        friend => <UserPhotoItem 
                    onClick={() => history.push(`/friend/${friend.id}`)}
                    key={friend.id} 
                    name={`${friend.firstName} ${friend.lastName}`} 
                    age={friend.age}
                    image={friend.photo}
                  />
      )}
    </div>
  )
}

export default React.memo(FriendGrid);