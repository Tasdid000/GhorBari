import React, { useState } from "react";
import { FormGroup, Alert, Label, Row, Col } from "reactstrap";
import axios from "axios";
import { baseUrl12 } from '../../../redux/baseUrl';
import "./dashboard.css";

const RequestForm = ({ userId }) => {
    const [formData, setFormData] = useState({
        userId: userId,
        name: "",
        Email: "",
        phoneNumber: "",
        Purpose: "",
        PropertyType: "",
        PropertyLocation: "",
        city: ""
    });

    const [alertData, setAlertData] = useState({
        showAlert: false,
        alertText: null,
        alertType: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the API
            const response = await axios.post(baseUrl12 + "requestinfo", formData);

            if (response.status === 201) {
                // Display success message
                setAlertData({
                    showAlert: true,
                    alertText: "Submitted Successfully",
                    alertType: "success"
                });

                // Reset the form data
                setFormData({
                    userId: userId,
                    name: "",
                    Email: "",
                    phoneNumber: "",
                    Purpose: "",
                    PropertyType: "",
                    PropertyLocation: "",
                    city: ""
                });

                // Hide the success message after 2 seconds
                setTimeout(() => {
                    setAlertData({
                        showAlert: false
                    });
                }, 2000);
            }
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
        <div className="contact">
            <div className="container p-5">
                <div>
                    <Alert isOpen={alertData.showAlert} color={alertData.alertType}>
                        {alertData.alertText}
                    </Alert>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h2 style={{ textAlign: "center", fontSize: "25px", fontWeight: "600" }}>
                                Submit Request
                            </h2>
                            <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "400" }}>Please provide all the necessary information<br /> below for a more efficient and effective service.</p>
                        </div>
                        <FormGroup>
                            <input
                                type="hidden"
                                name="userId"
                                value={userId}
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
                            />
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label htmlFor="phoneNumber" className="lbl">
                                Phone Number <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input
                                className="input"
                                placeholder="Enter phone number"
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label htmlFor="Purpose" className="lbl">
                                Property Purpose<b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <select
                                className="input"
                                name="Purpose"
                                value={formData.Purpose}
                                onChange={(e) => setFormData({ ...formData, Purpose: e.target.value })}
                            >
                                <option value="">Select Property Purpose</option>
                                <option value="For Rent">For Rent</option>
                                <option value="For Sale">For Sale</option>
                            </select>
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label htmlFor="PropertyType" className="lbl">
                                Property Type<b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <select
                                className="input"
                                name="PropertyType"
                                value={formData.PropertyType}
                                onChange={(e) => setFormData({ ...formData, PropertyType: e.target.value })}
                            >
                                <option value="">Select Property Type</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Office">Office</option>
                                <option value="Land">Land</option>
                            </select>
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label htmlFor="PropertyLocation" className="lbl">
                                Property Location <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input
                                type="text"
                                name="PropertyLocation"
                                className="input"
                                placeholder="Enter property location"
                                value={formData.PropertyLocation}
                                onChange={(e) => setFormData({ ...formData, PropertyLocation: e.target.value })}
                            />
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label htmlFor="city" className="lbl">
                                Select City<b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <select
                                className="input"
                                name="city"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            >
                                <option value="">Select City</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
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

export default RequestForm;
