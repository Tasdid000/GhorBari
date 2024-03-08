import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './dashboard.css';

class LeftSideBar extends Component {
  state = {
    unseenCount: 0,
    unseenPropertyInfoCount: 0, // Added state for unseen Property Info count
  };

  componentDidMount() {
    this.fetchUnseenNotificationCount();
    this.fetchUnseenPropertyInfoCount();

    this.unseenCountInterval = setInterval(() => {
      this.fetchUnseenNotificationCount();
      this.fetchUnseenPropertyInfoCount();
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.unseenCountInterval);
  }

  fetchUnseenNotificationCount = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.get('http://127.0.0.1:8000/apiv1/user/unseen_notification_count/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ unseenCount: response.data.unseen_count });
    } catch (error) {
      console.error('Error fetching unseen notification count:', error);
    }
  };

  fetchUnseenPropertyInfoCount = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.get('http://127.0.0.1:8000/apiv1/user/unseen_propertyinfo_count/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Unseen Property Info Count Response:', response.data.unseen_propertyinfo_count);
      this.setState({ unseenPropertyInfoCount: response.data.unseen_propertyinfo_count });
    } catch (error) {
      console.error('Error fetching unseen Property Info count:', error);
    }
  };

  render() {
    const { unseenCount, unseenPropertyInfoCount } = this.state;

    return (
      <div className="left-sidebar">
        <NavLink to="/dashboard/userprofile" className="sidebar-item" activeClassName="active">
          <i className="bi bi-house"></i>
          <span>User Profile</span>
        </NavLink>
        <NavLink to="/dashboard/request" className="sidebar-item" activeClassName="active">
          <i className="bi bi-map"></i>
          <span>Request Property</span>
        </NavLink>
        <NavLink to="/dashboard/AllPropertylist" className="sidebar-item" activeClassName="active">
          <i className="bi bi-map"></i>
          <span>Your Property</span>
        </NavLink>
        <NavLink to="/dashboard/ScheduleViewing" className="sidebar-item" activeClassName="active">
          <i className="bi bi-map"></i>
          <span>Schedule Viewing</span>
        </NavLink>

        <NavLink to="/dashboard/propertyinfo" className="sidebar-item" activeClassName="active">
          <i className="bi bi-map"></i>
          <span style={{ paddingRight: "3px" }}>Property Info</span>
          {unseenPropertyInfoCount > 0 && <span className="unseen-count">{unseenPropertyInfoCount}</span>}
        </NavLink>

        <NavLink to="/dashboard/notification" className="sidebar-item" activeClassName="active">
          <i className="bi bi-map"></i>
          <span style={{ paddingRight: "3px" }}>Notification</span>
          {unseenCount > 0 && <span className="unseen-count">{unseenCount}</span>}
        </NavLink>

        <NavLink to="/dashboard/logout" className="sidebar-item" activeClassName="active">
          <i className="bi bi-box-arrow-left"></i>
          <span>Log Out</span>
        </NavLink>
      </div>
    );
  }
}

export default LeftSideBar;
