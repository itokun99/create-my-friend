import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFound404 from './pages/NotFound404';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import FormFriend from './pages/FormFriend';
import FriendList from './pages/FriendList';
import FriendDetail from './pages/FriendDetail';
import EditProfile from './pages/EditProfile';
import Menu from './pages/Menu';
import { AppContainer, Popup, Loading } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { getStorage } from './services';
import { setProfile } from './modules';


const App = () => {
  const { popup, profile, loading } = useSelector(state  => state);
  const dispatch = useDispatch()

  React.useEffect(() => {
    if(!profile) {
      const userData = getStorage('user_data');
      dispatch(setProfile(userData))
    }
  }, [dispatch, profile])

  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route path="/profile" component={EditProfile} exact={true} name="Profile" />
          <Route path="/menu" component={Menu} exact={true} name="Menu" />
          <Route path="/friend/add" component={FormFriend} exact={true} name="AddFriend" />
          <Route path="/friend/:id/edit" component={FormFriend} exact={true} name="EditFriend" />
          <Route path="/friend/:id" component={FriendDetail} exact={true} name="FriendDetail" />
          <Route path="/friend" component={FriendList} exact={true} name="FriendList" />
          <Route path="/dashboard" component={Dashboard} exact={true} name="Dashboard" />
          <Route path="/onboarding" component={Onboarding} exact={true} name="OnBoarding" />
          <Route path="/" component={Homepage} exact={true} name="Homepage" />
          <Route path="*" component={NotFound404} exact name="NotFound404" />
        </Switch>
        <Popup {...popup} />
        <Loading {...loading} />
      </AppContainer>
    </BrowserRouter>
  )
}

export default App;
