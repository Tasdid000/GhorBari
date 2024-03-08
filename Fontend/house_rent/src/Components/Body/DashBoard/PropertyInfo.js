import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css';
import { Link, withRouter } from 'react-router-dom';

class PropertyInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            propertyinfos: [],
            userData: null,
            loading: true,
            error: null,
            selectedpropertyinfos: [],
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

            const propertyinfoResponse = await axios.get('http://127.0.0.1:8000/apiv1/user/propertyinfo/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({ propertyinfos: propertyinfoResponse.data });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ error: 'Error fetching data. Please try again.' });
        } finally {
            this.setState({ loading: false });
        }
    };

    handleCheckboxChange = (propertyId) => {
        this.setState((prevState) => {
            const selectedpropertyinfos = [...prevState.selectedpropertyinfos];

            if (selectedpropertyinfos.includes(propertyId)) {
                selectedpropertyinfos.splice(selectedpropertyinfos.indexOf(propertyId), 1);
            } else {
                selectedpropertyinfos.push(propertyId);
            }

            return { selectedpropertyinfos };
        });
    };

    handleDeleteSelected = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const { selectedpropertyinfos } = this.state;
            for (const propertyId of selectedpropertyinfos) {
                await axios.delete(`http://127.0.0.1:8000/apiv1/user/delete_propertyinfo/${propertyId}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }
            window.location.reload();
            this.fetchData();
        } catch (error) {
            console.error('Error deleting propertyinfos:', error);
        }
    };

    markpropertyinfoAsSeen = async (propertyId) => {
        try {
            const token = localStorage.getItem('access_token');
            await axios.patch(`http://127.0.0.1:8000/apiv1/user/mark_PropertyInfo_as_seen/${propertyId}/`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error('Error marking propertyinfo as seen:', error);
        }
    };

    navigateTopropertyinfoDetails = (propertyId) => {
        this.markpropertyinfoAsSeen(propertyId);
        this.props.history.push(`/dashboard/propertyinfodetails/${propertyId}`);
    };

    render() {
        const { propertyinfos, userData, loading, error, selectedpropertyinfos } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        return (
            <div className="container" style={{ marginTop: "10%" }}>
                <h2 style={{ fontSize: "25px", fontWeight: "500" }}>Your propertyinfos</h2>
                {selectedpropertyinfos.length > 0 && (
                    <button className='buttonuser' onClick={this.handleDeleteSelected}>
                        Delete
                    </button>
                )}

                <div className='notification-container' style={{ marginTop: "5%" }}>
                    {propertyinfos.map((propertyinfo) => (
                        userData.email === propertyinfo.userId && (
                            <div
                                key={propertyinfo.propertyId}
                                className="notification-item"
                            >
                                <div className="checkbox-container">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            className="checkbox-input"
                                            checked={selectedpropertyinfos.includes(propertyinfo.propertyId)}
                                            onChange={() => this.handleCheckboxChange(propertyinfo.propertyId)}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div
                                    className={`notification-header ${propertyinfo.seen ? 'seen' : 'unseen'}`}
                                    onClick={() => this.navigateTopropertyinfoDetails(propertyinfo.propertyId)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="notification-sender">{propertyinfo.name}</div>
                                    <div className="notification-subject">{propertyinfo.Email}</div>
                                    <div className="notification-date">{propertyinfo.date}</div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(PropertyInfo);
