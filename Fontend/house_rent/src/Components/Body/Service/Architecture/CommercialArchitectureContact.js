import React, { Component } from "react";
import { FormGroup, Row, Alert, Label, Col } from "reactstrap";
import { Form, Control, Errors, actions } from 'react-redux-form'
import 'react-phone-input-2/lib/style.css'
import axios from "axios";
import { connect } from 'react-redux';
import { baseUrl7 } from '../../../../redux/baseUrl'
import "./style.css"


const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('CommercialArchitectureContact'))
        }
    }
}


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommercialArchitectureContact extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }
    handleSubmit = values => {
        //console.log(values);
        axios.post(baseUrl7 + "CommercialArchitectureContact", values)
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
            <div className="">
                <div className="container">
                    <div className="" style={{}}>
                        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                        <Form method="post" model="CommercialArchitectureContact" onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup>
                                <Row>
                                    <Col md="4">
                                        <Label htmlfor="examplename" style={{ fontSize: "20px" }}>
                                            Your Name <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                    </Col>
                                    <Col md="6">
                                        <Control.text
                                            model='.name'
                                            name="name"
                                            placeholder=""
                                            className="Residentialcontact"
                                            style={{ height: "40px", width: "100%" }}
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
                                    </Col>
                                </Row>

                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md="4">
                                        <Label htmlfor="exampleEmail" style={{ fontSize: "20px" }}>
                                            Your Email <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                    </Col>
                                    <Col md="6">
                                        <Control.text
                                            model=".Email"
                                            name="Email"
                                            placeholder=""
                                            className="Residentialcontact"
                                            style={{ height: "40px", width: "100%" }}
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
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md="4">
                                        <Label htmlfor="examplephoneNumber" style={{ fontSize: "20px" }}>
                                            Phone Number <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                    </Col>
                                    <Col md="6">
                                        <Control.text
                                            model=".phone_Number"
                                            className="Residentialcontact"
                                            name="phone_Number"
                                            placeholder=""
                                            style={{ height: "40px", width: "100%" }}
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
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md="4">
                                        <Label htmlfor="examplefloor_Area" style={{ fontSize: "20px" }}>
                                            Floor Area (Optional)
                                        </Label>
                                    </Col>
                                    <Col md="6">
                                        <Control.text
                                            model=".floor_Area"
                                            className="Residentialcontact"
                                            name="floor_Area"
                                            style={{ height: "40px" }}
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md="4">
                                        <Label htmlfor="exampleideas" style={{ fontSize: "20px" }}>
                                            Feel Free to Share Your Ideas <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                    </Col>
                                    <Col md="6">
                                        <Control.textarea
                                            model=".ideas"
                                            name="ideas"
                                            className="Residentialcontact"
                                            placeholder=""
                                            style={{ height: "100px", width: "100%" }}
                                            validators={
                                                {
                                                    required
                                                }
                                            }
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".ideas"
                                            show="touched"
                                            messages={
                                                {
                                                    required: "A ideas is required"
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row style={{ marginTop: "3ch" }}>
                                    <Col md="4">
                                    </Col>
                                    <Col md="6">
                                        <a href="/">
                                            <button class="button30"> Submit</button>
                                        </a>
                                    </Col>
                                </Row>

                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, mapDispatchToProps)(CommercialArchitectureContact);
