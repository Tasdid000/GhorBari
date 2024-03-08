import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './dashboard.css';
class NotificationDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notification: null,
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchNotificationDetails();
    }

    fetchNotificationDetails = async () => {
        try {
            const { match } = this.props;
            const notificationId = match.params.id;

            const token = localStorage.getItem('access_token');
            const response = await axios.get(`http://127.0.0.1:8000/apiv1/user/notification/${notificationId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            this.setState({
                notification: response.data,
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching notification details:', error);
            this.setState({
                error: 'Error fetching notification details. Please try again.',
                loading: false,
            });
        }
    };
    handleDeletenotification = async (id) => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.delete(
                `http://127.0.0.1:8000/apiv1/user/delete_notification/${id}/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            this.setState({ properties: response.data });
            this.props.history.push('/dashboard/notification');
        } catch (error) {
            console.error('Error deleting notification:', error);
        }
    };
    render() {
        const { notification, loading, error } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        return (
            <div className="container" style={{ marginTop: "10%" }}>
                <Link to={'/dashboard/notification/'}><i class="fa-solid fa-arrow-left-long" style={{ color: "#6053fc", fontSize: "20px" }}></i></Link>
                <h2 className="notification-subject" style={{ marginTop: "3%" }}>{notification.subject}</h2>
                <div className='notification-details-container' style={{ marginTop: "2%" }}>
                    <div className="notification-details">
                        <div className="notificationdetails-sender">{notification.sender}</div>
                        <div className="notificationdetails-date">{notification.date}</div>
                        <div className="notificationdetails-message">{notification.Message}</div>
                    </div>
                </div>
                <button style={{marginTop:"10%"}} className='buttonuser' onClick={() => this.handleDeletenotification(notification.id)}>
                    Delete Notification
                </button>
            </div>
        );
    }
}

export default NotificationDetails;
