import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';

const VerifyEmail = () => {
    const [verification_code, setVerificationCode] = useState('');
    const [verificationError, setVerificationError] = useState(null);
    const [verificationSuccess, setVerificationSuccess] = useState(false);
    const [resendSuccess, setResendSuccess] = useState(false);
    const [resendError, setResendError] = useState(null);
    const history = useHistory();
    const location = useLocation();

    const { email } = location.state || { email: '' };

    const handleSubmit = async () => {
        try {
            // Assuming you have an endpoint to verify the verification_code
            const response = await fetch('http://127.0.0.1:8000/apiv1/user/verify-email/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, verification_code }),
            });

            if (response.ok) {
                setVerificationSuccess(true);
                setVerificationError(null);

                setTimeout(() => {
                    setVerificationSuccess(false);
                    window.location.href= '/login'; // Use window.location.href= to navigte to /login
                }, 3000);
            } else {
                const responseData = await response.json();
                setVerificationSuccess(false);
                setVerificationError(responseData.error || 'An unexpected error occurred during email verification.');
            }
        } catch (error) {
            console.error('Email verification error:', error.message);
            setVerificationSuccess(false);
            setVerificationError(`An unexpected error occurred during email verification: ${error.message}`);
        }
    };

    const handleResend = async () => {
        try {
            // Assuming you have an endpoint to resend the verification email
            const resendResponse = await fetch('http://127.0.0.1:8000/apiv1/user/resend-verification-email/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (resendResponse.ok) {
                setResendSuccess(true);
                setResendError(null); // Clear any previous resend errors
            } else {
                const resendData = await resendResponse.json();

                if (resendResponse.status === 400 && resendData.error === 'Email is already verified') {
                    setResendError('Email is already verified');
                } else if (resendResponse.status === 404 && resendData.error === 'User not found') {
                    setResendError('User with this email does not exist');
                } else {
                    setResendError(resendData.error || 'An unexpected error occurred during resend verification email.');
                }

                setResendSuccess(false);
            }
        } catch (error) {
            console.error('Resend verification email error:', error.message);
            setResendSuccess(false);
            setResendError(`An unexpected error occurred during resend verification email: ${error.message}`);
        }
    };

    return (
        <div className="container" style={{ marginTop: '10%', marginBottom: "15%" }}>
            <Form className="verification-form">
                <div className='container'>
                    <h2 style={{ textAlign: "center" }}>Verify Email</h2>
                    {verificationError && (
                        <Alert
                            color="danger"
                            style={{ marginTop: '5%', fontSize: '15px', border: 'none', backgroundColor: '#e0e0e0', color: 'red' }}
                        >
                            {verificationError}
                        </Alert>
                    )}
                    {verificationSuccess && (
                        <Alert
                            color="success"
                            style={{ marginTop: '5%', fontSize: '15px', border: 'none', backgroundColor: '#e0e0e0', color: 'green' }}
                        >
                            Email verified successfully. You can now log in.
                        </Alert>
                    )}
                    {resendError && (
                        <Alert
                            color="danger"
                            style={{ marginTop: '5%', fontSize: '15px', border: 'none', backgroundColor: '#e0e0e0', color: 'red' }}
                        >
                            {resendError}
                        </Alert>
                    )}
                    {resendSuccess && (
                        <Alert
                            color="success"
                            style={{ marginTop: '5%', fontSize: '15px', border: 'none', backgroundColor: '#e0e0e0', color: 'green' }}
                        >
                            Verification email resent successfully. Please check your email.
                        </Alert>
                    )}
                    <FormGroup className="input-box">
                        <Label for="verification_code" className='lbl'>
                            Verification Code:
                        </Label>
                        <Input
                            type="text"
                            className='input'
                            name="verification_code"
                            id="verification_code"
                            placeholder="Enter 6-digit verification code"
                            value={verification_code}
                            onChange={(e) => setVerificationCode(e.target.value)}
                        />
                    </FormGroup>
                    <Button className='button10' color="primary" onClick={handleSubmit}>
                        Verify Email
                    </Button>
                    <div className="resend-link">
                        <p>
                            Didn't receive the code?{' '}
                            <span onClick={handleResend} style={{ cursor: 'pointer', color: '#007BFF' }}>
                                Resend email
                            </span>
                        </p>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default VerifyEmail;
