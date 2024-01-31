import React, { Component } from "react";
import "./style.css"
import { Col, Row } from "reactstrap";
import Contact from "./Contact";
import MultiSearch from "./Search/search";
import TabComponent from "./Tabs";
// import BannerSlider from "./bannerimaheslider/bannerslider";
import { Carousel } from 'react-responsive-carousel';
// import Property from "./Property/Property";
class Home extends Component {
    render() {
        return (
            <div style={{ overflowX: "hidden" }}>
                <div className="minscreen">
                    <p className="headertext">
                        Search properties for sale and for rent in Sylhet
                    </p>
                    <MultiSearch />
                </div>
                <div className="container" style={{ marginTop: "10%" }}>
                    <div className="image-slider-containers">
                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            showStatus={false}
                            autoPlay={true}
                            interval={5000}
                            transitionTime={500}
                            stopOnHover={false}
                            showIndicators={false}
                            showArrows={true}
                            className="custom-carousels"
                        >
                            <div style={{ backgroundImage: `url('/assets/images/bannerhome1.jpg')`, textAlign: "left", zIndex: "-2" }}>
                                <div className="sliderimages">
                                    <h3 style={{ textAlign: "left", }} >
                                        Discover immersive virtual property tours
                                    </h3>
                                    <p style={{ fontSize: "20px", lineHeight: "30px", marginTop: "2%", marginBottom: "2%" }}>Explore properties from the comfort of your home</p>
                                    <button type="button" className="button0">View Now</button>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url('/assets/images/bannerhome2.jpg')`, textAlign: "left", zIndex: "-2" }}>
                                <div className="sliderimages1">
                                    <h3 >
                                        Explore your future home with detailed videos
                                    </h3>
                                    <p style={{ fontSize: "20px", lineHeight: "30px", marginTop: "2%", marginBottom: "2%" }}>View your dream homes online</p>
                                    <button type="button" className="button1">View Now</button>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="placelist">
                    <p className="Populartext">
                        Popular Sylhet Neighborhoods
                    </p>
                    <TabComponent />
                </div>
                <div className="">
                    <div className="container">
                        <Row style={{ paddingTop: "5%" }}>
                            <Col md="6" className="container">
                                <h1 style={{ paddingTop: "20%", color: "#6053fc" }}>Get in touch</h1>
                                <p style={{ padding: "5% 0% 0%", fontSize: "20px" }}>Reach us anytime through our website and our social media platforms. You can also visit us at our offices & marketplaces.</p>
                                <br /><br />
                                <a href="tel:01709882474" style={{ textDecoration: "none", color: "black", fontSize: "20px" }}>
                                    <i class="fa-solid fa-phone" style={{ color: "#6053fc" }}></i> 01709882474
                                </a><br /><br />
                                <a href="mailto:ghorbariproperty@gmail.com" style={{ textDecoration: "none", color: "black", fontSize: "24px" }}>
                                    <i class="fa-regular fa-envelope" style={{ color: "#6053fc" }}></i> ghorbariproperty@gmail.com
                                </a>
                            </Col>
                            <Col md="5">
                                <Contact />
                            </Col>

                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;