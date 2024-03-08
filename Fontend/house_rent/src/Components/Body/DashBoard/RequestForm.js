import React, { Component } from "react";
import { FormGroup, Alert, Label, Row, Col } from "reactstrap";
import axios from "axios";
import { baseUrl12 } from '../../../redux/baseUrl';
import "./dashboard.css";

class RequestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userId: props.userId,
                name: "",
                Email: "",
                phoneNumber: "",
                image: Array(10).fill(null), // Array to hold image files
                Floor_Plans: null,
                rent_Amount: "",
                property_Address: "",
                Beds: "",
                Baths: "",
                property_Area: "",
                About_Property: "",
                PropertyType: "",
                Completion: "",
                Purpose: "",
            },
            alertData: {
                showAlert: false,
                alertText: null,
                alertType: null,
            },
        };
    }

    handleFileChange = (files) => {
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                image: Array.from(files).slice(0, 10), // Take up to 10 files
            },
        }));
    };
    handleImageReset = () => {
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                image: Array(10).fill(null),
            },
        }));
    };
    handleFloorPlansChange = (file) => {
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                Floor_Plans: file,
            },
        }));
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const imageCount = this.state.formData.image.filter((item) => item !== null).length;

        if (imageCount < 5) {
            this.setState({
                alertData: {
                    showAlert: true,
                    alertText: "Please upload at least 5 images.",
                    alertType: "danger",
                },
            });
            return;
        }

        try {
            const form = new FormData();
            Object.entries(this.state.formData).forEach(([key, value]) => {
                if (key === "image") {
                    value.forEach((file, index) => {
                        form.append(`image${index}`, file);
                    });
                } else {
                    form.append(key, value);
                }
            });

            const response = await axios.post(baseUrl12 + "requestinfo", form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 201) {
                this.setState({
                    alertData: {
                        showAlert: true,
                        alertText: "Submitted Successfully",
                        alertType: "success",
                    },
                    formData: {
                        userId: this.props.userId,
                        name: "",
                        Email: "",
                        phoneNumber: "",
                        image: Array(10).fill(null),
                        Floor_Plans: null,
                        rent_Amount: "",
                        property_Address: "",
                        Beds: "",
                        Baths: "",
                        property_Area: "",
                        About_Property: "",
                        PropertyType: "",
                        Completion: "",
                        Purpose: "",
                    },
                });

                // Hide the success message after 2 seconds
                setTimeout(() => {
                    this.setState({
                        alertData: {
                            showAlert: false,
                        },
                    });
                }, 2000);
                window.location.reload();
            }
        } catch (error) {
            console.log(error.response);

            // Display error message if submission fails
            this.setState({
                alertData: {
                    showAlert: true,
                    alertText: "Submission Failed. Please try again.",
                    alertType: "danger",
                },
            });
        }
    };

    render() {
        return (
            <div className="contact" >
                <div className="container p-5">
                    <div>
                        <Alert isOpen={this.state.alertData.showAlert} color={this.state.alertData.alertType}>
                            {this.state.alertData.alertText}
                        </Alert>
                        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
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
                                    value={this.props.userId}
                                    disabled
                                />
                            </FormGroup>
                            <Row style={{ paddingTop: "6%" }}>
                                <Col md="6">
                                    <h3 style={{ fontSize: "16px" }}>Upload Your Property Images Here: <b style={{ color: "red", fontSize: "14px" }}>*</b></h3>
                                    <FormGroup className="Imageinput-box">
                                        <Row>
                                            <Col md="5">

                                                <input
                                                    type="file"
                                                    className="Imageinput"
                                                    name="image"
                                                    onChange={(e) => this.handleFileChange(e.target.files)}
                                                    accept="image/*"
                                                    multiple
                                                />

                                            </Col>
                                            <Col md="2">
                                                <button type="reset" onClick={this.handleImageReset} className="buttonuser">Reset</button>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <h3 style={{ fontSize: "16px" }}>Upload Floor Plans: <b style={{ color: "red", fontSize: "14px" }}>*</b></h3>
                                    <FormGroup className="Imageinput-box">
                                        <Row>
                                            <Col md="5">
                                                <input
                                                    type="file"
                                                    className="Imageinput"
                                                    name="Floor_Plans"
                                                    onChange={(e) => this.handleFloorPlansChange(e.target.files[0])}
                                                    accept="image/*"
                                                />
                                            </Col>
                                            <Col md="2">
                                                <button type="reset" onClick={this.handleImageReset} className="buttonuser">Reset</button>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <FormGroup className="input-box">
                                        <Label htmlFor="name" className="lbl">
                                            Full Name <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="input"
                                            placeholder="Enter your name"
                                            value={this.state.formData.name}
                                            onChange={(e) => this.setState({ formData: { ...this.state.formData, name: e.target.value } })}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="input-box">
                                        <Label htmlFor="Email" className="lbl">
                                            Email Address <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <input
                                            type="email"
                                            name="Email"
                                            className="input"
                                            placeholder="Enter email address"
                                            value={this.state.formData.Email}
                                            onChange={(e) => this.setState({ formData: { ...this.state.formData, Email: e.target.value } })}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="input-box">
                                        <Label htmlFor="phoneNumber" className="lbl">
                                            Phone Number <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <input
                                            className="input"
                                            placeholder="Enter phone number"
                                            type="text"
                                            name="phoneNumber"
                                            value={this.state.formData.phoneNumber}
                                            onChange={(e) => this.setState({ formData: { ...this.state.formData, phoneNumber: e.target.value } })}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <FormGroup className="input-box">
                                        <Label htmlFor="rent_Amount" className="lbl">
                                            Rent or Sale Amount <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <input
                                            type="text"
                                            name="rent_Amount"
                                            className="input"
                                            placeholder="Enter rent or sale Amount"
                                            value={this.state.formData.rent_Amount}
                                            onChange={(e) => this.setState({ formData: { ...this.state.formData, rent_Amount: e.target.value } })}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="input-box">
                                        <Label htmlFor="property_Area" className="lbl">
                                            Property Area <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <input
                                            type="text"
                                            name="property_Area"
                                            className="input"
                                            placeholder="Enter Property Area (sqft)"
                                            value={this.state.formData.property_Area}
                                            onChange={(e) => this.setState({ formData: { ...this.state.formData, property_Area: e.target.value } })}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="input-box">
                                        <Label htmlFor="property_Address" className="lbl">
                                            Property Location <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <input
                                            type="text"
                                            name="property_Address"
                                            className="input"
                                            placeholder="Enter property location"
                                            value={this.state.formData.property_Address}
                                            onChange={(e) => this.setState({ formData: { ...this.state.formData, property_Address: e.target.value } })}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <FormGroup className="input-box">
                                        <Label htmlFor="Completion" className="lbl">
                                            About Property<b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <select
                                            className="input"
                                            type="text"
                                            name="Completion"
                                            value={this.state.formData.Completion}
                                            onChange={(e) => this.setState({ formData: { ...this.state.formData, Completion: e.target.value } })}
                                            required
                                        >
                                            <option value="">Select Property Completion</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>
                                        </select>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="input-box">
                                        <Label htmlFor="Purpose" className="lbl">
                                            Property Purpose<b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <select
                                            className="input"
                                            name="Purpose"
                                            value={this.state.formData.Purpose}
                                            onChange={(e) => this.setState({ formData: { ...this.state.formData, Purpose: e.target.value } })}
                                            required
                                        >
                                            <option value="">Select Property Purpose</option>
                                            <option value="For Rent">For Rent</option>
                                            <option value="For Sale">For Sale</option>
                                        </select>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="input-box">
                                        <Label htmlFor="city" className="lbl">
                                            Select City<b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <select
                                            className="input"
                                            name="city"
                                            value={this.state.formData.city}
                                            onChange={(e) => this.setState({ formData: { ...this.state.formData, city: e.target.value } })}
                                            required
                                        >
                                            <option value="">Select City</option>
                                            <option value="Sylhet">Sylhet</option>
                                        </select>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <FormGroup className="input-box">
                                        <Label htmlFor="PropertyType" className="lbl">
                                            Property Type<b style={{ color: "red", fontSize: "14px" }}>*</b>
                                        </Label>
                                        <select
                                            className="input"
                                            name="PropertyType"
                                            value={this.state.formData.PropertyType}
                                            onChange={(e) => this.setState({ formData: { ...this.state.formData, PropertyType: e.target.value } })}
                                            required
                                        >
                                            <option value="">Select Property Type</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Office">Office</option>
                                            <option value="Land">Land</option>
                                        </select>
                                    </FormGroup>
                                </Col>
                                {this.state.formData.PropertyType === "Apartment" && (
                                    <>
                                        <Col md="4">
                                            <FormGroup className="input-box">
                                                <Label htmlFor="Beds" className="lbl">
                                                    Beds <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                                </Label>
                                                <input
                                                    type="text"
                                                    name="Beds"
                                                    className="input"
                                                    placeholder="Enter number of beds"
                                                    value={this.state.formData.Beds}
                                                    onChange={(e) => this.setState({ formData: { ...this.state.formData, Beds: e.target.value } })}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup className="input-box">
                                                <Label htmlFor="Baths" className="lbl">
                                                    Baths <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                                </Label>
                                                <input
                                                    type="text"
                                                    name="Baths"
                                                    className="input"
                                                    placeholder="Enter number of baths"
                                                    value={this.state.formData.Baths}
                                                    onChange={(e) => this.setState({ formData: { ...this.state.formData, Baths: e.target.value } })}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </>
                                )}
                            </Row>

                            <FormGroup className="aboutpropertyinput-box">
                                <Label htmlFor="About_Property" className="lbl">
                                    About Property <b style={{ color: "red", fontSize: "14px" }}>*</b>
                                </Label>
                                <textarea
                                    className="aboutpropertyinput"
                                    type="text"
                                    name="About_Property"
                                    placeholder="Enter About your property"
                                    value={this.state.formData.About_Property}
                                    onChange={(e) => this.setState({ formData: { ...this.state.formData, About_Property: e.target.value } })}
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
                </div >
            </div >
        );
    }
}

export default RequestForm;
