import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css'; // Import the CSS file
import { Row, Col, Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Allpropertylist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            userData: null,
            loading: true,
            error: null,
        };
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
            const propertyResponse = await axios.get('http://127.0.0.1:8000/apiv1/user/Property/', {
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
    // handleDeleteProperty = async (propertyId) => {
    //     try {
    //         const response = await axios.delete(
    //             `http://127.0.0.1:8000/apiv1/user/delete_request_add_property/${propertyId}/`,
    //         );
    //         this.setState({ properties: response.data });
    //         window.location.reload();
    //     } catch (error) {
    //         console.error('Error deleting property:', error);
    //     }
    // };

    render() {
        const { properties, userData, loading, error } = this.state;

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
                </Row>
                <div className='container' style={{ marginTop: "5%" }}>
                    <Card className='propertytablecard'>
                        <CardBody>
                            <table className="property-table">
                                <thead>
                                    <tr>
                                        <th>Reference Number</th>
                                        <th>Property Address</th>
                                        <th>Property Type</th>
                                        <th>Property Completion</th>
                                        <th>Purpose</th>
                                        <th>Last Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {properties.map((property) => (
                                        userData.email === property.userId && (
                                            <tr key={property.Reference_number}>
                                                <td><Link to={`/dashboards/allpropertylist/${property.Reference_number}`}><span style={{color:"black"}}>{property.Reference_number}</span></Link></td>
                                                <td>{property.property_Address}</td>
                                                <td>{property.type}</td>
                                                <td>{property.Completion}</td>
                                                <td>{property.Purpose}</td>
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

export default Allpropertylist;
