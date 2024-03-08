import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Label, Alert, FormGroup, Row, Col } from 'reactstrap';
import './styles.css';

const Register = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [password2, setPassword2] = useState('');
    const [phone_Number, setPhoneNumber] = useState('');

    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password2Error, setPassword2Error] = useState('');
    const [emailExistsError, setEmailExistsError] = useState('');
    const [registrationError, setRegistrationError] = useState('');

    const [registrationSuccess, setRegistrationSuccess] = useState(false); // New state variable

    const required = (val, field) => (val ? '' : `Please enter ${field}.`);
    const validEmail = (val) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val) ? '' : 'Please enter a valid email address.';
    const isNumber = (val, field, desiredLength) => {
        if (isNaN(Number(val)) || val.length !== desiredLength) {
            return `Please enter a valid ${field}.`;
        }
        return '';
    };

    const handleRegister = async () => {
        try {
            // Reset any previous errors
            setEmailError('');
            setNameError('');
            setPhoneNumberError('');
            setPasswordError('');
            setPassword2Error('');
            setEmailExistsError('');
            setRegistrationError('');

            // Validation logic
            setEmailError(validEmail(email));
            setNameError(required(name, 'your name'));
            setPhoneNumberError(isNumber(phone_Number, 'phone number', 11));
            setPasswordError(required(password, 'password'));

            // Check if password confirmation is empty
            if (!password2) {
                setPassword2Error('Please confirm your password.');
            } else {
                // Check if passwords match
                if (password !== password2) {
                    setPassword2Error('Passwords do not match');
                }
            }

            // Check if there are any validation errors
            if (
                emailError ||
                nameError ||
                phoneNumberError ||
                passwordError ||
                password2Error ||
                emailExistsError
            ) {
                return;
            }

            // Continue with registration logic
            const response = await fetch('http://127.0.0.1:8000/apiv1/user/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name, password, password2, phone_Number }),
            });

            const responseData = await response.json();
            console.log('Response Data:', responseData);

            if (!response.ok) {
                if (response.status === 409 && responseData.errors && responseData.errors.email) {
                    setEmailExistsError(responseData.errors.email[0]);
                } else {
                    setRegistrationError(
                        'User with this email address already exists. Please use a different email address.'
                    );
                }
            } else {
                console.log('Registration successful');
                setRegistrationSuccess(true);
                history.push('/VerifyEmail', { email });
            }
        } catch (error) {
            console.error('Registration error:', error.message);
            setRegistrationError(`An unexpected error occurred during registration: ${error.message}`);
        }
    };

    return (
        <div className='registrationbackground'>
            <Row>
                <Col md="5" className='container mx-4'>
                    <img src='/assets/images/undraw_mobile_login_re_9ntv.svg' className='loginimage' alt="Login" />
                </Col>
                <Col md="6">
                    <div className='registration-form'>
                        <Form className='container'>
                            <h2 style={{ textAlign: 'center', paddingTop: '5%' }}>Register</h2>
                            <div style={{ paddingTop: '0%' }}>
                                {registrationSuccess && (
                                    <Alert
                                        className="alert alert-success"
                                        role="alert"
                                        style={{ marginTop: '10%', fontSize: '15px' }}
                                    >
                                        User registered successfully. Check your email for verification.
                                    </Alert>
                                )}
                                {emailExistsError && (
                                    <Alert
                                        className="alert alert-danger"
                                        role="alert"
                                        style={{ marginTop: '10%', fontSize: '30px' }}
                                    >
                                        {emailExistsError}
                                    </Alert>
                                )}
                                {registrationError && (
                                    <Alert
                                        className="alert alert-danger"
                                        role="alert"
                                        style={{
                                            marginTop: '10%',
                                            fontSize: '15px',
                                            border: 'none',
                                            backgroundColor: '#e0e0e0',
                                            color: 'red',
                                        }}
                                    >
                                        {registrationError}
                                    </Alert>
                                )}
                            </div>
                            <FormGroup className="input-box">
                                <Label htmlFor="examplename" className="lbl">
                                    Your Name <b style={{ color: 'red', fontSize: '14px' }}>*</b>
                                </Label>
                                <Input
                                    className='input'
                                    type='text'
                                    placeholder="Enter your name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                                {nameError && <div className="error">{nameError}</div>}
                            </FormGroup>
                            <FormGroup className="input-box">
                                <Label htmlFor="exampleemail" className="lbl">
                                    Your Email <b style={{ color: 'red', fontSize: '14px' }}>*</b>
                                </Label>
                                <Input
                                    className='input'
                                    type='email'
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                {emailError && <div className="error">{emailError}</div>}
                            </FormGroup>
                            <FormGroup className="input-box">
                                <Label htmlFor="examplephone_Number" className="lbl">
                                    Phone Number <b style={{ color: 'red', fontSize: '14px' }}>*</b>
                                </Label>
                                <Input
                                    className='input'
                                    type='number'
                                    placeholder="Enter your phone number"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phone_Number}
                                />
                                {phoneNumberError && <div className="error">{phoneNumberError}</div>}
                            </FormGroup>
                            <FormGroup className="input-box">
                                <Label htmlFor="examplepassword" className="lbl">
                                    Password <b style={{ color: 'red', fontSize: '14px' }}>*</b>
                                </Label>
                                <Input
                                    className='input'
                                    type='password'
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                {passwordError && <div className="error">{passwordError}</div>}
                            </FormGroup>
                            <FormGroup className="input-box">
                                <Label htmlFor="examplepassword2" className="lbl">
                                    Confirm Password <b style={{ color: 'red', fontSize: '14px' }}>*</b>
                                </Label>
                                <Input
                                    className='input'
                                    type='password'
                                    placeholder="Confirm your password"
                                    onChange={(e) => setPassword2(e.target.value)}
                                    value={password2}
                                />
                                {password2Error && <div className="error">{password2Error}</div>}
                            </FormGroup>
                        </Form>
                        <Row className='container'>
                            <Col md="5">
                                <button className='button10' style={{ marginTop: '5%' }} onClick={handleRegister}>
                                    Register
                                </button>
                            </Col>
                            <Col md="7">
                                <p style={{ textAlign: 'center', fontSize: '13px', paddingTop: '10%' }}>
                                    Have an account. <a href='/login' style={{ textDecoration: 'none', color: '#6053fc' }}>
                                        Sign In
                                    </a>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Register;
