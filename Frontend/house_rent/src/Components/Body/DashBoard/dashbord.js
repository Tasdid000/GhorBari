import React from 'react';
import LeftSideBar from './LeftSlideBar';
import { Route, Switch } from 'react-router-dom';
import UserProfile from './userprofile';
import LogoutPage from '../login and registration/Logout';
import './dashboard.css';
import addpropertyrequest from './addpropertyrequest';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Notification from './notifications';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <LeftSideBar />
        <div className="main-content">
          <Switch>
            <Route path="/dashboard/userprofile" component={UserProfile} />
            <Route path="/dashboard/request" component={addpropertyrequest} />
            <Route path="/dashboard/notification" component={Notification} />
            <Route path="/dashboard/logout" component={LogoutPage} />
            <Redirect from="/" to="/dashboard/userprofile"/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
