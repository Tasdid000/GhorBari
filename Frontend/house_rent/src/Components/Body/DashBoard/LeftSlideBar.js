// LeftSideBar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard.css';

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <NavLink to="/dashboard/userprofile" className="sidebar-item" activeClassName="active">
        <i className="bi bi-house"></i>
        <span>Profile</span>
      </NavLink>
      <NavLink to="/dashboard/request" className="sidebar-item" activeClassName="active">
        <i className="bi bi-map"></i>
        <span>Request Property</span>
      </NavLink>
      <NavLink to="/dashboard/notification" className="sidebar-item" activeClassName="active">
        <i className="bi bi-map"></i>
        <span>Notification</span>
      </NavLink>
      <NavLink to="/dashboard/logout" className="sidebar-item" activeClassName="active">
        <i className="bi bi-box-arrow-left"></i>
        <span>Log Out</span>
      </NavLink>
    </div>
  );
}

export default LeftSideBar;
