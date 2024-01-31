// ResetPassword.js
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css'
const ResetPassword = () => {
    const history = useHistory();
    const { uid, token } = useParams();
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Optionally, you can use the uid and token to verify their validity
        // Make an API request to your backend to verify the uid and token
        // If they are invalid, you can redirect the user or show an error message
    }, [uid, token]);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `http://127.0.0.1:8000/apiv1/user/reset-password/${uid}/${token}/`,
                { password: password, password2: password2 }
            );
            setMessage(response.data.msg);
            console.log(response)
            // Optionally, you can redirect the user to a login page or another page after a successful password reset
            history.push('/login');
        } catch (error) {
            console.error('Error:', error.message);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div style={{ marginTop: "15%" }}>
                {message && <p style={{ color: 'green' }}>{message}</p>}
                <form className='login-form' onSubmit={handleFormSubmit}>
                    <div className='container'>
                        <h1>Reset Password</h1>
                        <div className='input-box'>
                            <label className='lbl' htmlFor="password">New Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className='input'
                                placeholder='Enter your new password'
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <div className='input-box'>
                            <label className='lbl' htmlFor="password2">Confirm Password:</label>
                            <input
                                type="password"
                                id="password2"
                                name="password2"
                                className='input'
                                placeholder='Confirm Password'
                                value={password2}
                                onChange={handlePassword2Change}
                                required
                            />
                        </div>
                        <div className='className="d-grid gap-2 mt-3'>
                            <button className='button10' type="submit">Reset Password</button>
                        </div>
                    </div>
                </form>
        </div>
    );
};

export default ResetPassword;
