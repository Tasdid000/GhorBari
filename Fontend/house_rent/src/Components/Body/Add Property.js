import React, { Component } from "react";
import "./style.css";
import { Col, Row } from 'reactstrap';
import Add_Propertyfaqans from "./FAQ Add Property/Add_Property_ans_and_que";
import ClientExperiences from "./ClientExperiences";
import Bloglistforaddproperty from "./Bloglistforaddproperty";

class Add_Property extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            showModal: false,
            showCard: false,
        };
        this.toggleCard = this.toggleCard.bind(this);
    }

    handleGetStartedClick = () => {
        let token = localStorage.getItem('access_token')
        if (token) {
            window.location.href = "/dashboard/userprofile";
        } else {
            this.setState({
                showCard: true
            });
        }
    };
    handleGetloginClick = () => {
        let token = localStorage.getItem('access_token')
        if (!token) {
            window.location.href = "/login";
        }
    };

    checkUserLoginStatus = () => {
        return false;
    };
    toggleCard() {
        this.setState((prevState) => ({
            showCard: !prevState.showCard,
        }));
    }
    render() {
        return (
            <div style={{ overflowX: "hidden", marginBottom: "10%" }}>
                <div className="banner">
                    <Row style={{ paddingTop: "8%" }}>

                        <Col md="6" className="addpropertyclass">
                            <p className="addpropertyheadertext">
                                Rent or Sell Online<br /> with Confidence
                            </p>
                            <p className="addpropertytext">
                                Whether you're selling property online or searching for tenants, effortlessly achieve your goals with Bangladesh's largest real estate marketplace. Begin your journey now!
                            </p>
                            <button className="button23" onClick={this.handleGetStartedClick}>Get Started</button>
                            {this.state.showCard && (
                                <div className="addpropertycard-overlay">
                                    <div className="addpropertycard" style={{ marginTop: '8%' }}>
                                        <div className="close-icon" onClick={this.toggleCard}>
                                            X
                                        </div>
                                        <div className="container" style={{ paddingTop: "5%" }}>
                                            <h2 style={{ fontSize: "25px" }}>You Want To Add Property</h2>
                                            <p style={{ fontSize: "15px" }}>Please Login or Sign Up to add property</p>
                                            <Row style={{ paddingTop: "5%" }}>
                                                <Col md="6">
                                                    <button className="buttonuser" onClick={this.toggleCard}>Skip</button>
                                                </Col>
                                                <Col md="6">
                                                    <button className="buttonimagecard" onClick={this.handleGetloginClick}>Login</button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Col>
                        <Col md="6">
                            <img src="/assets/images/undraw_late_at_night_re_d3mx.svg"
                                className="addpropertyimage"
                            />
                        </Col>
                    </Row>
                </div>
                <div>
                    <p className="propertyheadertext">
                        How it Works
                    </p>
                    <p className="propertytext">
                        Real estate can be complicated on its own. But we are here to<br /> make your journey simple and easy.
                    </p>
                    <div className="container">
                        <Row style={{ marginTop: "10%" }}>
                            <Col md="3">
                                <img src="assets/images/Select house-bro.svg" style={{ width: "100%" }} />
                                <p className="propertyrowtext">
                                    <br />Fill out the request form and submit your request of your property
                                </p>
                            </Col>
                            <Col md="3" style={{ textAlign: "center" }}>
                                <img src="assets/images/Admin-bro.svg" style={{ width: "80%" }} />
                                <p className="propertyrowtext">
                                    One of our representatives will contact you for further information
                                </p>
                            </Col>
                            <Col md="3" style={{ textAlign: "center" }}>
                                <img src="assets/images/House restyling-bro.svg" style={{ width: "80%" }} />
                                <p className="propertyrowtext">
                                    An executive will visit your site to take photos/videos of your property
                                </p>
                            </Col>
                            <Col md="3">
                                <img src="assets/images/undraw_publish_post_re_wmql.svg" style={{ width: "100%" }} />
                                <p className="propertyrowtext">
                                    <br />We will publish your property on the website to attract buyers/tenants
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <p className="propertyheadertext">
                            Customer Experiences
                        </p>
                        <p className="propertytext">
                            There is no greater benchmark for success than customer<br /> satisfaction. Over the years, we’ve built a culture of service.
                        </p>
                        <div className="container" style={{ paddingTop: "5%" }}>
                            <ClientExperiences />
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: "10%" }}>
                    <Add_Propertyfaqans />
                </div>
                <div>
                    <p className="propertyheadertext">
                        Learn More About Property Selling
                    </p>
                    <p className="propertytext">
                        Read the articles to expand your knowledge about how to sell<br /> your flat quickly, find tenants, a seller’s journey and more
                    </p>
                    <div>
                        <Bloglistforaddproperty />
                    </div>
                </div>
                <div className="container" style={{ paddingTop: "10%" }}>
                    <div className="backgroundimageforbanner">
                        <Row>
                            <Col md="6">
                                <h1 className="learnheadertext">
                                    Interested to learn more?
                                </h1>
                                <p className="learntext">
                                    Contact us today to learn more about how you can rent or sell property online quickly and easily.
                                </p>
                            </Col>
                            <Col md="6">
                                <p className="icon"><i class="fa-solid fa-phone"></i> <a href="tel:01709882474"><span className="number">01709882474</span></a></p>

                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default Add_Property;