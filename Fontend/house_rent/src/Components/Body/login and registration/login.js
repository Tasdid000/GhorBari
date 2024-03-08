import React, { useState } from 'react';
import axios from 'axios';
import { useHistory} from 'react-router-dom'; // Import Redirect from react-router-dom
import { Col, Row, Alert } from 'react-bootstrap';
import './styles.css';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // New state for error message
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    };

    try {
      const { data } = await axios.post("http://127.0.0.1:8000/token/", user);
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);

      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("Error in token fetch");
      }
    }
  };

  return (
    <div className='container' style={{ marginTop: '10%' }}>
      <Row>
        <Col md="5">
          <img src='/assets/images/undraw_secure_login_pdn4.svg' className='loginimage' alt='Login' />
        </Col>
        <Col md="6">
          <div className="login-form">
            <form className="container" onSubmit={submit}>
              <div className="Auth-form-content">
                <h3 style={{ textAlign: "center", paddingTop: "5%" }}>Log In</h3>
                {error && <Alert variant="" style={{ color: "red" }}>{error}</Alert>} {/* Alert for error */}
                <div className="input-box">
                  <label className="lbl">Email</label>
                  <input
                    className="input"
                    placeholder="Enter Email"
                    name='email'
                    type='email'
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <label className="lbl">Password</label>
                  <input
                    name='password'
                    type="password"
                    className="input"
                    placeholder="Enter password"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <Row>
                  <Col md="">
                    <div className="d-grid gap-2 mt-3" style={{ marginTop: "20%" }}>
                      <button type="submit" className="button10">LOG IN</button>
                    </div>
                  </Col>
                  <Col md="">
                    <a href='/forgotpassword' className='forgottext'>Forgot password?</a>
                  </Col>
                </Row>
                <div className='registerdiv'>
                  <a href='/register' className='registertext'>Don't have an account?</a>
                </div>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
