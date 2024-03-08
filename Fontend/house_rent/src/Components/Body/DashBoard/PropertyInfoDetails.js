import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './dashboard.css';

class PropertyInfoDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            PropertyInfo: null,
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchPropertyInfoDetails();
    }

    fetchPropertyInfoDetails = async () => {
        try {
            const { match } = this.props;
            const propertyId = match.params.id;

            const token = localStorage.getItem('access_token');
            const response = await axios.get(`http://127.0.0.1:8000/apiv1/user/propertyinfo/${propertyId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            this.setState({
                PropertyInfo: response.data,
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching PropertyInfo details:', error);
            this.setState({
                error: 'Error fetching PropertyInfo details. Please try again.',
                loading: false,
            });
        }
    };

    handleDeletePropertyInfo = async () => {
        try {
            const { PropertyInfo } = this.state;

            if (!PropertyInfo) {
                console.error('PropertyInfo is not available');
                return;
            }

            const token = localStorage.getItem('access_token');
            const response = await axios.delete(
                `http://127.0.0.1:8000/apiv1/user/delete_propertyinfo/${PropertyInfo.propertyId}/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            this.setState({ properties: response.data });
            window.location.href = '/dashboard/propertyinfo';
        } catch (error) {
            console.error('Error deleting PropertyInfo:', error);
        }
    };

    render() {
        const { PropertyInfo, loading, error } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        return (
            <div className="container" style={{ marginTop: "10%" }}>
                <Link to={'/dashboard/propertyinfo/'}>
                    <i className="fa-solid fa-arrow-left-long" style={{ color: "#6053fc", fontSize: "20px" }}></i>
                </Link>
                <h2 className="notification-subject" style={{ marginTop: "3%" }}>{PropertyInfo.name}</h2>
                <div className='notification-details-container' style={{ marginTop: "2%" }}>
                    <div className="notification-details">
                        <div className="notificationdetails-date">{PropertyInfo.date}</div><br />
                        <div className="notificationdetails-sender">
                            <a href={`mailto:${PropertyInfo.Email}`} style={{ textDecoration: "none", color: "black" }}>
                                {PropertyInfo.Email}
                            </a>
                        </div><br />
                        <div className="notificationdetails-sender">
                            <a href={`tel:${PropertyInfo.phone_Number}`} style={{ textDecoration: "none", color: "black" }}>
                                {PropertyInfo.phone_Number}
                            </a>
                        </div><br /><br />
                        <div className="PropertyInfodetails-message">{PropertyInfo.Message}</div>
                    </div>
                </div>
                <button style={{ marginTop: "10%" }} className='buttonuser' onClick={this.handleDeletePropertyInfo}>
                    Delete
                </button>
            </div>
        );
    }
}

export default PropertyInfoDetails;
