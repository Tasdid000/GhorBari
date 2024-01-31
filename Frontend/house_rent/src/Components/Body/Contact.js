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
        //document.title = "Contact";
        return (
            <div className="contact">
                <div className="container p-5">
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
                                    <Col md="6" style={{marginBottom:"5%"}}>
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
            </div>
        );
    }
}
export default connect(null, mapDispatchToProps)(Contact);
