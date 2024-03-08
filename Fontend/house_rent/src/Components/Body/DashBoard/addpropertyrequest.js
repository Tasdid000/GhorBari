import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css'; // Import the CSS file
import { Row, Col, Card, CardBody } from 'react-bootstrap';
import RequestForm from './RequestForm';

class AddPropertyRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            userData: null,
            loading: true,
            error: null,
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

    handleDeleteProperty = async (propertyId) => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.delete(
                `http://127.0.0.1:8000/apiv1/user/delete_request_add_property/${propertyId}/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            this.setState({ properties: response.data });
            window.location.reload();
        } catch (error) {
            console.error('Error deleting property:', error);
        }
    };

    render() {
        const { properties, userData, loading, error, showCard } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        return (
            <div className="container" style={{ marginTop: "10%" }}>
                <Row>
                    <Col md="6">
                        <h2 style={{ fontSize: "25px", fontWeight: "500" }}>Your Properties</h2>
                    </Col>
                    <Col md="6">
                        <button type='button' className='buttonuser' onClick={this.toggleCard}>
                            Add Property
                        </button>
                        {showCard && (
                            <div className="requestcard-overlay">
                                <div className="requestcard" style={{ marginTop: '8%' }}>
                                    <div className="close-icon" onClick={this.toggleCard}>
                                        X
                                    </div>
                                    <div className="scrollable-card-content">
                                        <RequestForm userId={userData.email} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
                <div className='container' style={{ marginTop: "5%" }}>
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {properties.map((property) => (
                                        userData.email === property.userId && (
                                            <tr key={property.id}>
                                                <td>{property.Email}</td>
                                                <td>{property.phoneNumber}</td>
                                                <td>{property.Purpose}</td>
                                                <td>{property.PropertyType}</td>
                                                <td>{property.property_Address}</td>
                                                <td>{property.Date}</td>
                                                <td>
                                                    <button className='buttonuser' onClick={() => this.handleDeleteProperty(property.id)}>
                                                        Delete Request
                                                    </button>
                                                </td>
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

export default AddPropertyRequest;
