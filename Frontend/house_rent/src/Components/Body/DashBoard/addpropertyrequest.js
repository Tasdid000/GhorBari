import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css'; // Import the CSS file
import { Row, Col, Card, CardBody } from 'react-bootstrap';
import RequestForm from './RequestForm';

class addpropertyrequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            userData: null,
            loading: true,
            error: null,
            showModal: false,
            showCard: false,
        };
        this.toggleCard = this.toggleCard.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const token = localStorage.getItem('access_token');

            // Fetch user data
            const userResponse = await axios.get('http://127.0.0.1:8000/apiv1/user/userprofile/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({ userData: userResponse.data.data });

            // Fetch property data
            const propertyResponse = await axios.get('http://127.0.0.1:8000/apiv1/user/requestForAddProperty/requestinfo', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({ properties: propertyResponse.data });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ error: 'Error fetching data. Please try again.' });
        } finally {
            this.setState({ loading: false });
        }
    };
    toggleCard() {
        this.setState((prevState) => ({
            showCard: !prevState.showCard,
        }));
    }
    render() {
        const { properties, userData, loading, error } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        return (
            <div className=" container" style={{ marginTop: "10%" }}>
                <Row>
                    <Col md="6">
                        <h2 style={{fontSize:"25px", fontWeight:"500"}}>Your Properties</h2>
                    </Col>
                    <Col md="6">
                        <button type='button' className='buttonuser' onClick={this.toggleCard}>Add Property</button>
                        {this.state.showCard && (
                            <div className="requestcard-overlay">
                                <div className="requestcard" style={{ marginTop: '8%' }}>
                                    <div className="close-icon" onClick={this.toggleCard}>
                                        X
                                    </div>
                                    <div className="scrollable-card-content">
                                        <RequestForm userId={userData.id}/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
                <div className='container' style={{marginTop:"5%"}}>
                    <Card className='propertytablecard'>
                        <CardBody>
                            <table className="property-table">
                                <thead>
                                    <tr>
                                        <th>Email Address</th>
                                        <th>Phone Number</th>
                                        <th>Purpose</th>
                                        <th>Property Type</th>
                                        <th>Property Location</th>
                                        <th>Date</th>
                                        {/* Email Purpose PropertyType PropertyLocation city */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {properties.map((property) => (
                                        userData.id === property.userId && (
                                            <tr key={property.id}>
                                                <td>{property.Email}</td>
                                                <td>{property.phoneNumber}</td>
                                                <td>{property.Purpose}</td>
                                                <td>{property.PropertyType}</td>
                                                <td>{property.PropertyLocation}</td>
                                                <td>{property.Date}</td>
                                            </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default addpropertyrequest;


// import React, { Component } from 'react';
// import { Col, Row } from 'reactstrap';
// import RequestForm from './RequestForm';
// import './dashboard.css';
// import jwt_decode from 'jwt-decode';

// class RequestForAddPropertyPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             propertyData: [],
// showModal: false,
// showCard: false,
//         };
//         this.toggleCard = this.toggleCard.bind(this);
//     }

//     componentDidMount() {
//         this.fetchData();
//     }

//     fetchData = async () => {
//         const currentUserID = getCurrentUserId();

//         if (currentUserID) {
//             const apiUrl = `http://127.0.0.1:8000/apiv1/user/requestForAddProperty/info?UserID=${7}`;

//             try {
//                 const response = await fetch(apiUrl);
//                 if (response.ok) {
//                     const data = await response.json();
//                     this.setState({ propertyData: data });
//                 } else {
//                     console.error('Failed to fetch data');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         } else {
//             console.error('User ID not available');
//         }
//     };

// toggleCard() {
//     this.setState((prevState) => ({
//         showCard: !prevState.showCard,
//     }));
// }

//     render() {
//         const { propertyData } = this.state;

//         return (
//             <div style={{ marginTop: '10%' }}>
//                 <Row>
//                     <Col md="8">
//                         <h1 style={{ fontSize: '30px' }}>Request for Add Property</h1>
//                     </Col>
//                     <Col md="3">
//                         <button className="button10" onClick={this.toggleCard}>
//                             Request Now
//                         </button>
// {this.state.showCard && (
//     <div className="requestcard-overlay">
//         <div className="requestcard" style={{ marginTop: '5%' }}>
//             <div className="close-icon" onClick={this.toggleCard}>
//                 X
//             </div>
//             <div className="scrollable-card-content">
//                 <RequestForm />
//             </div>
//         </div>
//     </div>
// )}
//                     </Col>
//                 </Row>
//                 {propertyData.length > 0 ? (
//                     <div className="requestcard">
//                         {propertyData.map((property) => (
//                             <div key={property.id} className="container">
//                                 <Row className="propertyhader">
//                                     <Col md="4">Property Address</Col>
//                                     <Col md="3">Email</Col>
//                                     <Col md="2">Purpose</Col>
//                                     <Col md="2">Property Type</Col>
//                                 </Row>
//                                 <br />
//                                 <Row className="propertytexts">
//                                     <Col md="4">
//                                         <p>{property.PropertyLocation}</p>
//                                     </Col>
//                                     <Col md="3">
//                                         <p>{property.Email}</p>
//                                     </Col>
//                                     <Col md="2">
//                                         <p>{property.Purpose}</p>
//                                     </Col>
//                                     <Col md="2">
//                                         <p>{property.PropertyType}</p>
//                                     </Col>
//                                 </Row>
//                                 <br />
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p>No data available</p>
//                 )}
//             </div>
//         );
//     }
// }

// // Retrieve the user ID from the decoded JWT
// const getCurrentUserId = () => {
//     const accessToken = localStorage.getItem('access_token');
//     console.log(accessToken)
//     if (accessToken) {
//         const decodedToken = decodeAccessToken(accessToken);
//         if (decodedToken && decodedToken.sub) {
//             return decodedToken.sub;
//         } else {
//             console.error('User ID not found in the decoded token');
//         }
//     } else {
//         console.error('Access token not found in local storage');
//     }

//     return null;
// };

// // Decode the JWT
// const decodeAccessToken = (accessToken) => {
//     try {
//         const decodedToken = jwt_decode(accessToken);
//         return decodedToken;
//     } catch (error) {
//         console.error('Error decoding access token:', error);
//         return null;
//     }
// };
// export default RequestForAddPropertyPage;
