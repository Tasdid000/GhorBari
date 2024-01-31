import React, { useState } from "react";
import { FormGroup, Alert, Label, Row, Col } from "reactstrap";
import axios from "axios";
import { baseUrl8 } from '../../../../../redux/baseUrl';
import "./style.css";

const ApplyForBank = ({ BankId }) => {
    const [formData, setFormData] = useState({
        bank_details: BankId,
        name: "",
        Email: "",
        phone_Number: "",
        property_id: "",
    });

    const [alertData, setAlertData] = useState({
        showAlert: false,
        alertText: null,
        alertType: null
    });
    const validateEmail = (Email) => {
        // A simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(Email);
    };

    const validateMobileNumber = (phone_Number) => {
        // Ensure mobile number has exactly 11 digits
        return phone_Number.length === 11 && !isNaN(phone_Number);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {Email, phone_Number } = formData;

        // Validate email and mobile number
        if (!validateEmail(Email)) {
            setAlertData({
                showAlert: true,
                alertText: "Please enter a valid email address.",
                alertType: "danger"
            });
            return;
        }

        if (!validateMobileNumber(phone_Number)) {
            setAlertData({
                showAlert: true,
                alertText: "Mobile number must be 11 digits.",
                alertType: "danger"
            });
            return;
        }
        try {
            const response = await axios.post(baseUrl8 + "bank", formData);

            if (response.status === 201) {
                // Display success message
                setAlertData({
                    showAlert: true,
                    alertText: "Submitted Successfully",
                    alertType: "success"
                });

                // Reset the form data
                setFormData({
                    bank_details: BankId,
                    name: "",
                    Email: "",
                    phone_Number: "",
                    property_id: "",
                });

                // Hide the success message after 2 seconds
                setTimeout(() => {
                    setAlertData({
                        showAlert: false
                    });
                }, 2000);
            }
            window.location.href = window.location.href;
        } catch (error) {
            console.log(error.response);

            // Display error message if submission fails
            setAlertData({
                showAlert: true,
                alertText: "Submission Failed. Please try again.",
                alertType: "danger"
            });
        }
    };

    return (
        <div>
            <div>
                <div>
                    <Alert style={{ background: "none", border: "none", textAlign: "center" }} isOpen={alertData.showAlert} color={alertData.alertType}>
                        {alertData.alertText}
                    </Alert>
                    <form className="apply-form" onSubmit={handleSubmit}>
                        <FormGroup>
                            <input
                                type="hidden"
                                name="bank_details"
                                value={BankId}
                                disabled  // To make it read-only
                            />
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label htmlFor="name" className="lbl">
                                Full Name <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input
                                type="text"
                                name="name"
                                className="input"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label htmlFor="Email" className="lbl">
                                Email Address <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input
                                type="email"
                                name="Email"
                                className="input"
                                placeholder="Enter email address"
                                value={formData.Email}
                                onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                                required
                            />
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label htmlFor="phone_Number" className="lbl">
                                Phone Number <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input
                                className="input"
                                placeholder="Enter phone number"
                                type="text"
                                name="phone_Number"
                                value={formData.phone_Number}
                                onChange={(e) => setFormData({ ...formData, phone_Number: e.target.value })}
                                required
                            />
                        </FormGroup>
                        <FormGroup className="input-box">
                            <Label htmlFor="property_id" className="lbl">
                                Property ID <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input
                                className="input"
                                placeholder="Enter Property ID"
                                type="text"
                                name="property_id"
                                value={formData.property_id}
                                onChange={(e) => setFormData({ ...formData, property_id: e.target.value })}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="6" style={{ marginBottom: "5%" }}>
                                    <button type="submit" className="button30">Submit</button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyForBank;

