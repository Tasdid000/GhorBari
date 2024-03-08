import React, { useState } from "react";
import { FormGroup, Alert, Label } from "reactstrap";
import axios from "axios";

const Propertyinfo = (props) => {
    const [alertShow, setAlertShow] = useState(false);
    const [alertText, setAlertText] = useState(null);
    const [alertType, setAlertType] = useState(null);
    const [defaultMessage, setDefaultMessage] = useState(`I would like to inquire about your property {propertyId}. Please contact me at your earliest convenience.`);
    const [values, setValues] = useState({
        name: "",
        phone_Number: "",
        Email: "",
        Message: "",
        userId: props.userId,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const { propertyId } = props;

        // Validate email and phone number
        if (!validateEmail(values.Email)) {
            showAlert("Invalid email format", "danger");
            return;
        }

        if (!validatePhoneNumber(values.phone_Number)) {
            showAlert("Invalid phone number.", "danger");
            return;
        }
        values.Message = `I would like to inquire about your property ${propertyId}. Please contact me at your earliest convenience.`;

        axios
            .post(`http://127.0.0.1:8000/apiv1/user/propertyinfo/`, values, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.status === 201) {
                    showAlert("Submitted Successfully", "success");
                    setTimeout(() => {
                        setAlertShow(false);
                        window.location.href = window.location.href;
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const validateEmail = (email) => {
        // Simple email validation using regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        // Phone number validation: 11 digits
        const regex = /^\d{11}$/;
        return regex.test(phoneNumber);
    };

    const showAlert = (text, type) => {
        setAlertShow(true);
        setAlertText(text);
        setAlertType(type);
    };

    const { propertyId } = props;

    return (
        <div>
            <div>
                <div>
                    <form className="apply-form" method="post" onSubmit={handleSubmit}>
                        <Alert style={{ background: "none", border: "none", textAlign: "center" }} isOpen={alertShow} color={alertType}>
                            {alertText}
                        </Alert>
                        <h3 style={{ fontSize: "20px", textAlign: "center" }}>Email agent for more information</h3>

                        <FormGroup>
                            <input type="hidden" name="userId" value={props.userId} disabled />
                        </FormGroup>
                        <FormGroup className="input-box">
                            <Label style={{ textAlign: "left" }} htmlFor="examplename" className="lbl">
                                Your Name <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input type="text" name="name" placeholder="Enter your name" className="input" onChange={handleChange} required />
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label style={{ textAlign: "left" }} htmlFor="examplephoneNumber" className="lbl">
                                Phone Number <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input type="text" name="phone_Number" placeholder="Enter your Phone Number" className="input" onChange={handleChange} />
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label style={{ textAlign: "left" }} htmlFor="exampleEmail" className="lbl">
                                Your Email <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input type="email" name="Email" placeholder="Enter your Email" className="input" onChange={handleChange} required />
                        </FormGroup>

                        <FormGroup className="input-box-message">
                            <Label style={{ textAlign: "left" }} htmlFor="exampleMessage" className="lbl">
                                Message <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <textarea name="Message" className="input-massage" defaultValue={defaultMessage.replace('{propertyId}', propertyId)} required />
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
};

export default Propertyinfo;
