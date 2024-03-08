import React, { useState } from "react";
import { FormGroup, Alert, Label, Row, Col } from "reactstrap";
import axios from "axios";
import { baseUrl14 } from '../../../redux/baseUrl';
import "./Jobstyle.css";

const ApplyJob = ({ JobPosition }) => {
    const [formData, setFormData] = useState({
        JobPosition: JobPosition,
        Name: "",
        Email: "",
        phoneNumber: "",
        Degree: "",
        CV: null,  // Initialize CV as null
    });

    const [alertData, setAlertData] = useState({
        showAlert: false,
        alertText: null,
        alertType: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create FormData object
            const formDataObj = new FormData();
            formDataObj.append("JobPosition", JobPosition);
            formDataObj.append("Name", e.target.Name.value);
            formDataObj.append("Email", e.target.Email.value);
            formDataObj.append("phoneNumber", e.target.phoneNumber.value);
            formDataObj.append("Degree", e.target.Degree.value);
            formDataObj.append("CV", e.target.CV.files[0]);

            // Make a POST request to the API
            const response = await axios.post(baseUrl14, formDataObj, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 201) {
                // Display success message
                setAlertData({
                    showAlert: true,
                    alertText: "Submitted Successfully",
                    alertType: "success"
                });

                // Reset the form data
                e.target.reset();
                setTimeout(() => {
                    setAlertData({
                        showAlert: false
                    });
                }, 2000);
            }
        } catch (error) {
            console.log(error.response);
            setAlertData({
                showAlert: true,
                alertText: "Submission Failed. Please try again.",
                alertType: "danger"
            });
        }
    };

    return (
        <div>
            <div className="container">
                <div>
                    <Alert isOpen={alertData.showAlert} color={alertData.alertType}>
                        {alertData.alertText}
                    </Alert>
                    <form onSubmit={handleSubmit} className="jobapplyform" encType="multipart/form-data">
                        <Row>
                            <Col md="6">
                                <FormGroup className="input-box">
                                    <Label htmlFor="JobPosition" className="lbl">
                                        Your Preferred Position <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                    </Label>
                                    <input
                                        type="text"
                                        name="JobPosition"
                                        className="input"
                                        value={JobPosition}
                                        disabled
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup className="input-box">
                                    <Label htmlFor="Name" className="lbl">
                                        Full Name(As per NID) <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                    </Label>
                                    <input
                                        type="text"
                                        name="Name"
                                        className="input"
                                        placeholder="Enter your name"
                                        value={formData.Name}
                                        onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup className="input-box">
                                    <Label htmlFor="Email" className="lbl">
                                        Email Address <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                    </Label>
                                    <input
                                        type="email"
                                        name="Email"
                                        className="input"
                                        placeholder="Enter your Email"
                                        value={formData.Email}
                                        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup className="input-box">
                                    <Label htmlFor="phoneNumber" className="lbl">
                                        Contact Number <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                    </Label>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        className="input"
                                        placeholder="Enter your phone number"
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup className="input-box">
                                    <Label htmlFor="Degree" className="lbl">
                                        Latest Degree Earned<b style={{ color: "red", fontSize: "14px" }}>*</b>
                                    </Label>
                                    <select
                                        className="input"
                                        name="Degree"
                                        value={formData.Degree}
                                        onChange={(e) => setFormData({ ...formData, Degree: e.target.value })}
                                    >
                                        <option value="">Select your degree</option>
                                        <option value="BSC In CSE">BSC In CSE</option>
                                        <option value="BSC In EEE">BSC In EEE</option>
                                        <option value="BSC In ETE">BSC In ETE</option>
                                        <option value="Professional Certification">Professional Certification</option>
                                        <option value="Bachelor Degree">Bachelor Degree</option>
                                        <option value="ITIL">ITIL</option>
                                        <option value="CCNA">CCNA</option>
                                        <option value="MTCNA">MTCNA</option>
                                    </select>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup style={{paddingTop:"8%"}}>                                    
                                    <input
                                        type="file"
                                        name="CV"
                                        onChange={(e) => setFormData({ ...formData, CV: e.target.files[0] })}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup style={{ textAlign: "center" }}>
                            <div style={{ marginBottom: "5%", marginTop:"7%" }}>
                                <button type="submit" className="button30">Submit</button>
                            </div>
                        </FormGroup>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;
