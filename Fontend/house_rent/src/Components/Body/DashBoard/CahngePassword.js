import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {
    const [passwords, setPasswords] = useState({
        password: '',
        password2: '',
    });

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords((prevPasswords) => ({
            ...prevPasswords,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Add validation checks if needed
            if (!passwords.password || !passwords.password2) {
                setError('All fields must be filled.');
                return;
            }

            if (passwords.password !== passwords.password2) {
                setError('New password and confirm password do not match.');
                return;
            }

            const response = await axios.post(
                'http://127.0.0.1:8000/apiv1/user/changepassword/',
                {
                    password: passwords.password,
                    password2: passwords.password2,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                }
            );

            // Handle success
            setSuccessMessage('Password changed successfully.');
            setError(null); // Clear any previous errors
            setPasswords({ password: '', password2: '' }); // Clear the form
        } catch (error) {
            // Handle error
            if (error.response && error.response.data) {
                setError(error.response.data.detail || 'Error changing password.');
            } else {
                setError('Error changing password.');
            }
        }
    };

    return (
        <div>
            <h2 style={{ fontSize: "22px", fontWeight: "500" }}>Change Password</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className='input-box'>
                    <label className='lbl' htmlFor="password">New Password:</label>
                    <input
                        type="password"
                        className='input'
                        id="password"
                        name="password"
                        placeholder='Enter New Password'
                        value={passwords.password}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-box'>
                    <label className='lbl' htmlFor="password2">Confirm Password:</label>
                    <input
                        type="password"
                        className='input'
                        id="password2"
                        name="password2"
                        placeholder='Confirm your Password'
                        value={passwords.password2}
                        onChange={handleChange}
                    />
                </div><br />
                <button className='buttonuser' type="submit">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
