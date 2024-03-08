import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css';
import { Link, withRouter } from 'react-router-dom';

class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
            userData: null,
            loading: true,
            error: null,
            selectedNotifications: [],
        };
    }

    componentDidMount() {
        this.fetchData();
        this.notificationInterval = setInterval(() => {
            this.fetchData();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.notificationInterval);
    }
    fetchData = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const userResponse = await axios.get('http://127.0.0.1:8000/apiv1/user/userprofile/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({ userData: userResponse.data.data });

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

    handleCheckboxChange = (id) => {
        this.setState((prevState) => {
            const selectedNotifications = [...prevState.selectedNotifications];

            if (selectedNotifications.includes(id)) {
                selectedNotifications.splice(selectedNotifications.indexOf(id), 1);
            } else {
                selectedNotifications.push(id);
            }

            return { selectedNotifications };
        });
    };

    handleDeleteSelected = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const { selectedNotifications } = this.state;
            for (const id of selectedNotifications) {
                await axios.delete(`http://127.0.0.1:8000/apiv1/user/delete_notification/${id}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }
            window.location.reload();
            this.fetchData();
        } catch (error) {
            console.error('Error deleting notifications:', error);
        }
    };

    markNotificationAsSeen = async (id) => {
        try {
            const token = localStorage.getItem('access_token');
            await axios.patch(`http://127.0.0.1:8000/apiv1/user/mark_notification_as_seen/${id}/`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error('Error marking notification as seen:', error);
        }
    };

    navigateToNotificationDetails = (id) => {
        this.markNotificationAsSeen(id);
        this.props.history.push(`/dashboard/notificationdetails/${id}`);
    };

    render() {
        const { notifications, userData, loading, error, selectedNotifications } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        return (
            <div className="container" style={{ marginTop: "10%" }}>
                <h2 style={{ fontSize: "25px", fontWeight: "500" }}>Your notifications</h2>
                {selectedNotifications.length > 0 && (
                    <button className='buttonuser' onClick={this.handleDeleteSelected}>
                        Delete
                    </button>
                )}

                <div className='notification-container' style={{ marginTop: "5%" }}>
                    {notifications.map((notification) => (
                        userData.email === notification.user && (
                            <div
                                key={notification.id}
                                className="notification-item"
                            >
                                <div className="checkbox-container">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            className="checkbox-input"
                                            checked={selectedNotifications.includes(notification.id)}
                                            onChange={() => this.handleCheckboxChange(notification.id)}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div
                                    className={`notification-header ${notification.seen ? 'seen' : 'unseen'}`}
                                    onClick={() => this.navigateToNotificationDetails(notification.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="notification-sender">{notification.sender}</div>
                                    <div className="notification-subject">{notification.subject}</div>
                                    <div className="notification-date">{notification.date}</div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(Notification);
