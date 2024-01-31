import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';

const UserProfileUpdate = ({ userData }) => {
    const [updatedUserData, setUpdatedUserData] = useState({ ...userData });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setUpdatedUserData({
            ...updatedUserData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if at least one field is filled
        if (
            !updatedUserData.name &&
            !updatedUserData.email &&
            !updatedUserData.phone_Number &&
            !updatedUserData.address
        ) {
            setError('Nothing here for change.');
            return;
        }

        try {
            const response = await axios.put(
                `http://127.0.0.1:8000/apiv1/user/update_profile/${userData.data.id}/`,
                updatedUserData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                }
            );
            setSuccessMessage('Profile updated successfully');

            // Reload the page after a successful update
            window.location.reload();
        } catch (error) {
            setError('Error updating profile');
        }
    };

    return (
        <div>
            <h3 style={{ fontSize: "22px", fontWeight: "500" }}>Update Profile</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <label className='lbl' htmlFor="name">Full Name</label>
                    <input
                        className='input'
                        type="text"
                        id="name"
                        name="name"
                        placeholder={updatedUserData.data.name}
                        value={updatedUserData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-box">
                    <label className='lbl' htmlFor="email">Email Address</label>
                    <input
                        className='input'
                        type="email"
                        id="email"
                        name="email"
                        placeholder={updatedUserData.data.email}
                        value={updatedUserData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-box">
                    <label className='lbl' htmlFor="phone_Number">Phone Number</label>
                    <input
                        className='input'
                        type="text"
                        id="phone_Number"
                        name="phone_Number"
                        placeholder={updatedUserData.data.phone_Number}
                        value={updatedUserData.phone_Number}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-box">
                    <label className='lbl' htmlFor="address">Address</label>
                    <input
                        className='input'
                        type="text"
                        id="address"
                        name="address"
                        
                        placeholder={updatedUserData.data.address}
                        value={updatedUserData.address}
                        onChange={handleChange}
                    />
                </div><br />
                <button type="submit" className='buttonuser'>Update Profile</button>
            </form>
        </div>
    );
};

export default UserProfileUpdate;
