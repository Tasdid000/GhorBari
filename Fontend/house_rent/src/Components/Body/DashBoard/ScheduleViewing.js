import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css'; // Import the CSS file
import { Row, Col, Card, CardBody } from 'react-bootstrap';
import RequestForm from './RequestForm';

class ScheduleViewing extends Component {
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

            // Fetch Schedule data
            const ScheduleResponse = await axios.get('http://127.0.0.1:8000/apiv1/user/ScheduleViewing/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({ Schedules: ScheduleResponse.data });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ error: 'Error fetching data. Please try again.' });
        } finally {
            this.setState({ loading: false });
        }
    };
    render() {
        const { Schedules, userData, loading, error } = this.state;

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
                        <h2 style={{fontSize:"25px", fontWeight:"500"}}>Your Schedule Viewing</h2>
                    </Col>
                </Row>
                <div className='container' style={{marginTop:"5%"}}>
                    <Card className='propertytablecard'>
                        <CardBody>
                            <table className="property-table">
                                <thead>
                                    <tr>
                                        <th>Property ID</th>
                                        <th>Email Address</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Schedules.map((Schedule) => (
                                        userData.email === Schedule.UserId && (
                                            <tr key={Schedule.id}>
                                                <td>{Schedule.Property}</td>
                                                <td>{Schedule.email}</td>
                                                <td>{Schedule.name}</td>
                                                <td>{Schedule.mobile_Number}</td>
                                                <td>{Schedule.TIME_CHOICES}</td>
                                                <td>{Schedule.date}</td>
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

export default ScheduleViewing;
