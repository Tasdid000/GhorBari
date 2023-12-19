import React, { Component } from "react";
import {FormGroup, Row, Alert } from "reactstrap";
import { Form, Control, Errors, actions } from 'react-redux-form'
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
                <div className="shadow p-5">
                    <div className="" style={{}}>
                        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                        <Form method="post" model="feedback" onSubmit={values => this.handleSubmit(values)}>
                            <h1 className="contacttext">
                                Request Info
                            </h1>
                                <FormGroup>
                                    <Row>
                                        <Control.text
                                            model='.name'
                                            name="name"
                                            placeholder="Name*"
                                            style={{ height: "40px" }}
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
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Control.text
                                            model=".Email"
                                            name="Email"
                                            placeholder="Email*"
                                            style={{ height: "40px" }}
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
                                    </Row>
                                </FormGroup>
                            <Row>
                                <FormGroup>
                                    <Row>
                                        <Control.text
                                            model=".phone_Number"
                                            name="phone_Number"
                                            placeholder="Phone*"
                                            style={{ height: "40px" }}
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
                                    </Row>
                                </FormGroup>
                                {/* <FormGroup>
                                    <Row>
                                        <Control.text
                                            model=".Cell"
                                            name="Cell"
                                            placeholder="Cell"
                                            style={{ height: "40px" }}
                                            validators={{
                                                required,
                                                isNumber
                                            }}
                                        />
                                    </Row>
                                </FormGroup> */}

                            </Row>
                            <FormGroup>
                                <Row>
                                    <Control.textarea
                                        model=".Message"
                                        name="Message"
                                        placeholder="Message*"
                                        style={{ height: "100px", width: "1000px" }}
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
                                </Row>
                            </FormGroup><br />
                            <FormGroup>
                                <a href="tel:01709882474" className="button30"><span className="callnow">Call Now</span></a>
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <a href="/">
                                    <button class="button30"> Submit</button>
                                </a>
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
