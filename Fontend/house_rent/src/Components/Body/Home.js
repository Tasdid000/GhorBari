import React, { Component } from "react";
import "./style.css";
import TabComponent from "./Tabs";
import { Carousel } from 'react-responsive-carousel';
import Carousels from "./Imageslider";

import AboutUs from "./AboutUS";
import WeProvide from "./weprovide";
import PropertyAdvisors from "./PropertyAdvisors";

class Home extends Component {
    render() {
        return (
            <div style={{ overflowX: "hidden" }}>
                <div className="imageslider">
                    <Carousels />
                </div>
                <div className="container">
                    <h4 style={{ fontSize: "35px" }}>We Provide</h4>
                    <div style={{ marginTop: "5%" }}>
                        <WeProvide />
                    </div>
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
                                    <a href="/property"><button type="button" className="button0">View Now</button></a>
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url('/assets/images/bannerhome2.jpg')`, textAlign: "left", zIndex: "-2" }}>
                                <div className="sliderimages1">
                                    <h3 >
                                        Explore your future home with detailed videos
                                    </h3>
                                    <p style={{ fontSize: "20px", lineHeight: "30px", marginTop: "2%", marginBottom: "2%" }}>View your dream homes online</p>
                                    <a href="/property"><button type="button" className="button0">View Now</button></a>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div>
                    <AboutUs />
                </div>
                <PropertyAdvisors/>
                <div className="placelist">
                    <p className="Populartext">
                        Popular Sylhet Neighborhoods
                    </p>
                    <TabComponent />
                </div>
            </div>
        );
    }
}

export default Home;
