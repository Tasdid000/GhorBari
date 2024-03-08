import React from 'react';
import LeftSideBar from './LeftSlideBar';
import { Route, Switch } from 'react-router-dom';
import UserProfile from './userprofile';
import LogoutPage from '../login and registration/Logout';
import './dashboard.css';
import addpropertyrequest from './addpropertyrequest';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Notification from './notifications';
import ScheduleViewing from './ScheduleViewing';
import Allpropertylist from './AllPropertylist';
import YourPropertyDetails from './yourPropertydetails';
import NotificationDetails from './notificationdetails';
import PropertyInfo from './PropertyInfo';
import PropertyInfoDetails from './PropertyInfoDetails';

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
            <Route path="/dashboard/ScheduleViewing" component={ScheduleViewing} />
            <Route path="/dashboard/logout" component={LogoutPage} />
            <Route path="/dashboard/allpropertylist" component={Allpropertylist} />
            <Route path="/dashboard/notificationdetails/:id/" component={NotificationDetails} />
            <Route path="/dashboard/propertyinfo" component={PropertyInfo} />
            <Route path="/dashboard/propertyinfodetails/:id/" component={PropertyInfoDetails} />
            <Redirect from="/dashboard" to="/dashboard/userprofile"/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
