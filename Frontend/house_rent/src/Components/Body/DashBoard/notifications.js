import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css'; // Import the CSS file

class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
            userData: null,
            loading: true,
            error: null,
            expandedMessageId: null,
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

            // Fetch notification data
            const notificationResponse = await axios.get('http://127.0.0.1:8000/apiv1/user/notification/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({ notifications: notificationResponse.data });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ error: 'Error fetching data. Please try again.' });
        } finally {
            this.setState({ loading: false });
        }
    };

    handleExpandMessage = (messageId) => {
        this.setState((prevState) => ({
            expandedMessageId: prevState.expandedMessageId === messageId ? null : messageId,
        }));
    };

    render() {
        const { notifications, userData, loading, error, expandedMessageId } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        return (
            <div className="container" style={{ marginTop: "10%" }}>
                <h2 style={{ fontSize: "25px", fontWeight: "500" }}>Your notifications</h2>

                <div className='notification-container' style={{ marginTop: "5%" }}>
                    {notifications.map((notification) => (
                        userData.id === notification.user && (
                            <div key={notification.id} className="notification-item">
                                <div onClick={() => this.handleExpandMessage(notification.id)} className="notification-header">
                                    <strong>{notification.subject}</strong>
                                </div>
                                {expandedMessageId === notification.id && (
                                    <div className="notification-body">
                                        <p>{notification.Message}</p>
                                    </div>
                                )}
                            </div>
                        )
                    ))}
                </div>
            </div>
        );
    }
}

export default Notification;
