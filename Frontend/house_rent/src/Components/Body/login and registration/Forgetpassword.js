// src/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make an API request to your Django backend to initiate the password reset
            const response = await axios.post(
                'http://127.0.0.1:8000/apiv1/user/send-reset-password-email/',
                { email }
            );

            // Assuming the response contains a success message
            setMessage(response.data.msg);

            // Optionally, you can clear the email field after a successful submission
            setEmail('');
            setSuccessMessage('Password reset link sent successfully. Please check your email.');
        } catch (error) {
            // Handle errors, e.g., display an error message to the user
            console.error('Error:', error.message);
        }
    };

    return (
        <div className='reset-form' style={{ marginTop: "15%" }}>
            <div className='container'>
                <h1 style={{ marginTop: "2%", textAlign: "center", fontSize: "25px" }}>Reset Password</h1>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <form className='input-box' onSubmit={handleFormSubmit}>
                    <label htmlFor="email" className='lbl'>Email:</label>
                    <input
                        type="email"
                        className='input'
                        id="email"
                        placeholder='Enter Valid Email'
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <div className='className="d-grid gap-2 mt-3'>
                        <button className='button10' type="submit">Reset Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
