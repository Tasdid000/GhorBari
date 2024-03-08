import React, { Component } from "react";
import { FormGroup, Row, Alert, Label, Col } from "reactstrap";
import { Form, Control, Errors, actions, } from 'react-redux-form'
import 'react-phone-input-2/lib/style.css'
import axios from "axios";
import { connect } from 'react-redux';
import { baseUrl2 } from '../../redux/baseUrl'
import "./style.css"


const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }
    handleSubmit = values => {
        //console.log(values);
        axios.post(baseUrl2 + "feedback", values)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        alertShow: true,
                        alertText: "Submitted Successfully",
                        alertType: "success"
                    });
                    setTimeout(() => {
                        this.setState({
                            alertShow: false
                        })
                    }, 2000)
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        this.props.resetFeedbackForm();
    }

    render() {
        return (
            <div className="contact" style={{ overflowX: "hidden" }}>
                <div style={{ backgroundImage: "url('/assets/images/contact.jpeg')", backgroundSize: "cover", backgroundPosition: "top center", height: "400px", paddingBottom: "5%" }}>
                    <h1 style={{ textAlign: "center", paddingTop: "15%" }}>Contact Us</h1><br />
                    <p style={{ textAlign: "center", fontSize: "17px" }}>We can help. Our team of experts is on hand to answer ypur questions.</p>
                </div>
                <div style={{marginTop:"5%"}}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d276.83599039224794!2d91.87100641734938!3d24.91118420520654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1707232077388!5m2!1sen!2sbd"
                        width="100%"
                        height="450"
                        style={{ border: "none" }}
                        allowFullScreen=""about
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <Row style={{ marginTop: "10%" }}>
                    <Col md="6" className="container">
                        <h1 style={{ paddingTop: "8%", color: "#6053fc" }}>Get in touch</h1>
                        <p style={{ padding: "5% 0% 0%", fontSize: "20px" }}>Reach us anytime through our website and our social media platforms. You can also visit us at our offices & marketplaces.</p>
                        <br /><br />
                        <a href="tel:01709882474" style={{ textDecoration: "none", color: "black", fontSize: "20px" }}>
                            <i class="fa-solid fa-phone" style={{ color: "#6053fc" }}></i> 01709882474
                        </a><br /><br />
                        <a href="mailto:ghorbariproperty@gmail.com" style={{ textDecoration: "none", color: "black", fontSize: "24px" }}>
                            <i class="fa-regular fa-envelope" style={{ color: "#6053fc" }}></i> ghorbariproperty@gmail.com
                        </a>
                    </Col>
                    <Col md="5">
                        <div className="container">
                            <div className="" style={{}}>
                                <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                                <Form method="post" model="feedback" onSubmit={values => this.handleSubmit(values)}>
                                    <FormGroup className="input-box">
                                        <Label htmlfor="examplename" className="lbl">
                                            Your Name <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <Control.text
                                            model='.name'
                                            name="name"
                                            className="input"
                                            placeholder="Enter your name"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={
                                                {
                                                    required: "Name is required",
                                                }
                                            }
                                        />
                                    </FormGroup>
                                    <FormGroup className="input-box">
                                        <Label htmlfor="exampleEmail" className="lbl">
                                            Your Email <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <Control.text
                                            model=".Email"
                                            name="Email"
                                            placeholder="Enter your Email"
                                            className="input"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".Email"
                                            show="touched"
                                            messages={
                                                {
                                                    required: "We need your email address so we could contact you.",
                                                }
                                            }
                                        />
                                    </FormGroup>
                                    <FormGroup className="input-box">
                                        <Label htmlfor="examplephoneNumber" className="lbl">
                                            Phone Number <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <Control.text
                                            model=".phone_Number"
                                            name="phone_Number"
                                            placeholder="Enter Phone Number"
                                            className="input"
                                            validators={{
                                                required,
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".phone_Number"
                                            show="touched"
                                            messages={
                                                {
                                                    required: "Phone Number is required, so you can be contacted ",
                                                }
                                            }
                                        />
                                    </FormGroup>
                                    <FormGroup className="input-box-message">
                                        <Label htmlfor="exampleMessage" className="lbl">
                                            Message <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <Control.textarea
                                            model=".Message"
                                            name="Message"
                                            className="input-massage"
                                            placeholder="Enter your Message"
                                            validators={
                                                {
                                                    required
                                                }
                                            }
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".Message"
                                            show="touched"
                                            messages={
                                                {
                                                    required: "A message is required to interact with the agent(s) "
                                                }
                                            }
                                        />
                                    </FormGroup><br />
                                    <FormGroup>
                                        <Row>
                                            <Col md="6" style={{ marginBottom: "5%" }}>
                                                <a href="/">
                                                    <button class="button30"> Submit</button>
                                                </a>
                                            </Col>
                                            <Col md="6">
                                                <a href="tel:01709882474" className="button30"><span className="callnow">Call Now</span></a>
                                            </Col>
                                        </Row>

                                        <p className="enquiry">
                                            By sending an enquiry, you agree to our Terms of use.
                                        </p>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </Col>

                </Row>

            </div>
        );
    }
}
export default connect(null, mapDispatchToProps)(Contact);
