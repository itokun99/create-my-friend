import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFound404 from './pages/NotFound404';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import FormFriend from './pages/FormFriend';
import FriendList from './pages/FriendList';
import FriendDetail from './pages/FriendDetail';
import { AppContainer, Popup } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { getStorage } from './services';
import { setProfile } from './modules';


const App = () => {
  const { popup, profile } = useSelector(state  => state);
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
      </AppContainer>
    </BrowserRouter>
  )
}

export default App;
