import React, { Component } from "react";

import "./style.css";
import { Col, Row } from 'reactstrap';
import Add_Propertyfaqans from "./FAQ Add Property/Add_Property_ans_and_que";
import Cookies from "js-cookie";

class Add_Property extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleGetStartedClick = () => {
        // Check the user's login status (replace this with your actual logic)
        // const userIsLoggedIn = this.checkUserLoginStatus();

        // Update the state based on the login status
        // this.setState({ isLoggedIn: userIsLoggedIn });
        let token = localStorage.getItem('access_token')
        // Redirect the user
        if (token) {
            window.location.href = "/dashboard/userprofile"; // Redirect to userprofile page
        } else {
            window.location.href = "/login"; // Redirect to login page
        }
    };

    // Replace this function with your actual login status check logic
    checkUserLoginStatus = () => {
        // This is just a placeholder, replace it with your actual logic
        // For example, you might check if the user is authenticated via a session or token
        // and return true if logged in, false otherwise.
        return false; // Assume the user is not logged in for this example
    };
    render() {
        return (
            <div style={{ overflowX: "hidden"}}>
                <div className="banner">
                    <Row style={{ paddingTop: "8%" }}>
                        <Col md="6" className="addpropertyclass">
                            <p className="addpropertyheadertext">
                                Rent or Sell<br /> Property Online
                            </p>
                            <p className="addpropertytext">
                                Looking to sell property online or are you in search of tenants?
                                Do it with ease with the largest real estate marketplace in
                                Bangladesh. Start your journey now!
                            </p>
                            <a href="#" onClick={this.handleGetStartedClick}>
                                <button className="button23">Get Started</button>
                            </a>

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
                                <br/>Fill out the request form and submit your request of your property
                                </p>
                            </Col>
                            <Col md="3" style={{textAlign:"center"}}>
                                <img src="assets/images/Admin-bro.svg" style={{ width: "80%"}} />
                                <p className="propertyrowtext">
                                    One of our representatives will contact you for further information
                                </p>
                            </Col>
                            <Col md="3" style={{textAlign:"center"}}>
                                <img src="assets/images/House restyling-bro.svg" style={{ width: "80%" }} />
                                <p className="propertyrowtext">
                                    An executive will visit your site to take photos/videos of your property
                                </p>
                            </Col>
                            <Col md="3">
                                <img src="assets/images/undraw_publish_post_re_wmql.svg" style={{ width: "100%" }} />
                                <p className="propertyrowtext">
                                <br/>We will publish your property on the website to attract buyers/tenants
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
                        <div className="container">
                            <Row style={{ marginTop: "5%" }}>
                                <Col md="3">
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div >
                    <Add_Propertyfaqans />
                </div>
                <div>
                    <p className="propertyheadertext">
                        Learn More About Property Selling
                    </p>
                    <p className="propertytext">
                        Read the articles to expand your knowledge about how to sell<br /> your flat quickly, find tenants, a seller’s journey and more
                    </p>
                </div>
                <div className="container">
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