import React from 'react';
import useUserProfile from './UserProfileHook';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import UserProfileUpdate from './UserProfileUpdate';
import UserProfileCard from './UserProfileCard';
import ChangePassword from './CahngePassword';

const UserProfile = () => {
  const { userData, loading, error } = useUserProfile();

  return (
    <div style={{ marginTop: '10%' }}>
      {loading && <p>Loading user profile...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <div className="profile">
          <UserProfileCard userData={userData} />
          <div style={{ paddingTop: "15%" }}>
            <Row style={{ display: 'flex' }}>
              <Col md="6">
                <Card className='general' style={{ height: '100%' }}>
                  <CardBody>
                    <h3 style={{ fontSize: "22px", fontWeight: "500" }}>Personal Information</h3>
                    <p>Full Name</p>
                    <p className='profiletext'>
                      <span style={{ paddingRight: "3%", color: "#6053fc" }}><i className="fa-regular fa-user"></i> </span>{userData.data.name}
                    </p>
                    <p>Email Address</p>
                    <p className='profiletext'>
                      <span style={{ paddingRight: "3%", color: "#6053fc" }}><i className="fa-solid fa-at"></i> </span>{userData.data.email}
                    </p>
                    <p>Phone Num+er</p>
                    <p className='profiletext'>
                      <span style={{ paddingRight: "3%", color: "#6053fc" }}><i className="fa-solid fa-phone"></i> </span>{userData.data.phone_Number}
                    </p>
                    <p>Address</p>
                    <p className='profiletext'>
                      <span style={{ paddingRight: "3%", color: "#6053fc" }}><i className="fa-solid fa-location-dot"></i> </span>{userData.data.address}
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className='general' style={{ height: '100%' }}>
                  <CardBody>
                    <UserProfileUpdate userData={userData} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <div style={{ paddingTop: "10%" }}>
            <Row>
              <Col md="6">
                <Card className='general'>
                  <CardBody>
                    <ChangePassword />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
