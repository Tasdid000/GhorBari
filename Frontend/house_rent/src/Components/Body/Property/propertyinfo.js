import React, { Component } from "react";
import { FormGroup, Row, Alert, Label } from "reactstrap";
import axios from "axios";

class Propertyinfo extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null,
        defaultMessage: `I would like to inquire about your property {propertyId}. Please contact me at your earliest convenience.`,
        values: {
            name: "",
            phone_Number: "",
            Email: "",
            Message: "",
        },
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { propertyId } = this.props;
        const { values } = this.state;

        // Validate email and phone number
        if (!this.validateEmail(values.Email)) {
            this.showAlert("Invalid email format", "danger");
            return;
        }

        if (!this.validatePhoneNumber(values.phone_Number)) {
            this.showAlert("Invalid phone number.", "danger");
            return;
        }

        // Assign propertyId to the 'Message' field in the values
        values.Message = `I would like to inquire about your property ${propertyId}. Please contact me at your earliest convenience.`;

        axios
            .post(`http://127.0.0.1:8000/apiv1/user/propertyinfo/`, values, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.status === 201) {
                    this.showAlert("Submitted Successfully", "success");
                    setTimeout(() => {
                        this.setState({
                            alertShow: false,
                        });
                        window.location.href = window.location.href;
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            values: {
                ...prevState.values,
                [name]: value,
            },
        }));
    };

    validateEmail = (email) => {
        // Simple email validation using regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    validatePhoneNumber = (phoneNumber) => {
        // Phone number validation: 11 digits
        const regex = /^\d{11}$/;
        return regex.test(phoneNumber);
    };

    showAlert = (text, type) => {
        this.setState({
            alertShow: true,
            alertText: text,
            alertType: type,
        });
    };

    render() {
        const { propertyId } = this.props;
        const { alertShow, alertText, alertType, defaultMessage } = this.state;

        return (
            <div>
                <div>
                    <div>
                        <form className="apply-form" method="post" onSubmit={this.handleSubmit}>
                            <Alert style={{background:"none", border:"none", textAlign:"center"}} isOpen={alertShow} color={alertType}>
                                {alertText}
                            </Alert>
                            <h3 style={{ fontSize: "20px", textAlign: "center" }}>Email agent for more information</h3>
                            <FormGroup className="input-box">
                                <Label style={{ textAlign: "left" }} htmlFor="examplename" className="lbl">
                                    Your Name <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                </Label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="input"
                                    onChange={this.handleChange}
                                    required
                                />
                            </FormGroup>

                            <FormGroup className="input-box">
                                <Label style={{ textAlign: "left" }} htmlFor="examplephoneNumber" className="lbl">
                                    Phone Number <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                </Label>
                                <input
                                    type="text"
                                    name="phone_Number"
                                    placeholder="Enter your Phone Number"
                                    className="input"
                                    onChange={this.handleChange}

                                />
                            </FormGroup>

                            <FormGroup className="input-box">
                                <Label style={{ textAlign: "left" }} htmlFor="exampleEmail" className="lbl">
                                    Your Email <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                </Label>
                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Enter your Email"
                                    className="input"
                                    onChange={this.handleChange}
                                    required
                                />
                            </FormGroup>

                            <FormGroup className="input-box-message">
                                <Label style={{ textAlign: "left" }} htmlFor="exampleMessage" className="lbl">
                                    Message <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                </Label>
                                <textarea
                                    name="Message"
                                    className="input-massage"
                                    defaultValue={defaultMessage.replace('{propertyId}', propertyId)}
                                    required
                                />
                            </FormGroup>

                            <FormGroup style={{ marginTop: "15%" }}>
                                <button type="submit" className="button30">
                                    Submit
                                </button>
                            </FormGroup>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Propertyinfo;
