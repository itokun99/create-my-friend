import React from 'react';
import { NavBar, MenuItem} from '../../components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearProfile, setPopup, clearFriend } from '../../modules';
import { deleteStorage } from '../../services';


const Menu = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout =  () => {
    dispatch(clearProfile())
    dispatch(clearFriend())
    deleteStorage('user_data');

    setTimeout(() => {
      dispatch(setPopup({
        title: "See u in the next time! :)",
        show: true,
      }))
    }, 500)

    history.replace('/');
  }

  const handleLogout = () => {
    dispatch(setPopup({
      title: "oh no, you wanna get out? :'(",
      show: true,
      buttonLeftTitle: 'Yes',
      buttonRightTitle: 'No',
      onClickLeftButton: logout
    }))
  }


  return (
    <div className="menu">
      <NavBar title="Menu" />
      <div className="menu__content">
        <MenuItem onClick={() => history.push('/profile')} title="Edit Profile" />
        <MenuItem title="Logout" onClick={handleLogout} />
      </div>
    </div>
  )
}


export default Menu;