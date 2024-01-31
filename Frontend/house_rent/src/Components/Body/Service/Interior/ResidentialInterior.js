import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css'
import ResidentialInteriorContact from "./ResidentialInteriorContact";
import Interiorfaqans from "./FAQ/ans_and_que";
class ResidentialInterior extends Component {
    render() {
        return (
            <div className="backgroundInterior">
                <Row>
                    <Col md="4" className="ResidentialInterior">
                        <h1 className="ResidentialInteriorheadertext">
                            Crafting a Homes for Unforgettable Memories
                        </h1>
                        <p className="ResidentialInteriortext">
                            Transform Your Vision into Reality <br />Contact Us to Create Your Dream Home
                        </p>
                    </Col>
                </Row>
                <div style={{ backgroundColor: "white", width: "100%" }}>
                    <div style={{ backgroundColor: "#0668e1", width: "100%", height: "auto", marginTop: "20ch", }}>
                        <h1 style={{ fontSize: "30px", textAlign: "center", paddingTop: "7%", paddingBottom: "7%", color: "white" }}>
                            Embrace the Moments Turning Houses into Homes
                        </h1>
                    </div>
                    <div className="container mx-8" style={{ paddingTop: "10ch" }}>
                        <Row style={{ marginTop: "5ch" }}>
                            <Col md="6" style={{ padding: "5% 1% 0% 5%" }}>
                                <h1 style={{ fontSize: "30px", textAlign: "" }}>
                                    Where Every Room Tells Its Unique Story
                                </h1><br /><br />
                                <p style={{ fontSize: "20px" }}>
                                    Creating Comfort, Accessibility, and Beauty Enriching Homes for Cherished Memories
                                </p>
                            </Col>
                            <Col md="5">
                                <div style={{ borderStyle: "solid", borderRadius: "6px", borderWidth: "2px", boxShadow: "" }}>
                                    <img src="/assets/images/3d-rendering-isometric-house.jpg" style={{ height: "30ch", width: "100%", padding: "1% 1% 1%" }} />
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "20ch" }}>
                            <Col md="5">
                                <div style={{ borderStyle: "solid", borderRadius: "6px", borderWidth: "2px", boxShadow: "" }}>
                                    <img src="/assets/images/3dhouse.jpg" style={{ height: "30ch", width: "100%", padding: "1% 1% 1%" }} />
                                </div>
                            </Col>
                            <Col md="6" style={{ padding: "5% 1% 0% 5%" }}>
                                <h1 style={{ fontSize: "30px", textAlign: "" }}>
                                    Where Homes Blossom with Memories
                                </h1><br /><br />
                                <p style={{ fontSize: "20px" }}>
                                    Bring the perfect setting to your home interior for those perfect moments
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <div style={{ backgroundColor: "#6053fc", marginTop: "10ch", paddingBottom: "5ch" }}>
                        <div className="container mx-8">
                            <h1 style={{ textAlign: "center", paddingTop: "3ch", color: "white" }}>
                                What We Provide
                            </h1>
                            <Row style={{ columnGap: "10%", textAlign: "center", overflowX: "hidden" }}>
                                <Col md="3" style={{ textAlign: "center", marginTop: "10ch" }}>
                                    <img src="/assets/images/living-room.png" style={{ width: "150px", border: "solid", borderRadius: "50%", padding: "5px 5px 5px", borderColor: "white" }} />
                                    <h2 style={{ marginTop: "2ch", color: "white" }}>
                                        Decorate
                                    </h2>
                                    <p style={{ marginTop: "2ch", color: "white" }}>
                                        When time is short, a few simple steps in the right direction can make huge changes. See your house in a new coat of paint, lighting, or overall mood
                                    </p>
                                </Col>
                                <Col md="3" style={{ textAlign: "center", marginTop: "10ch" }}>
                                    <img src="/assets/images/home.png" style={{ width: "150px", border: "solid", borderRadius: "50%", padding: "5px 5px 5px", borderColor: "white" }} />
                                    <h2 style={{ marginTop: "2ch", color: "white" }}>
                                        Renovate
                                    </h2>
                                    <p style={{ marginTop: "2ch", color: "white" }}>
                                        Add a little more flare and inspiration to your home. The walls, floors and accents of the house can be tweaked without major reconstruction or time lost.
                                    </p>
                                </Col>
                                <Col md="3" style={{ textAlign: "center", marginTop: "10ch" }}>
                                    <img src="/assets/images/paintwork.png" style={{ width: "150px", border: "solid", borderRadius: "50%", padding: "5px 5px 5px", borderColor: "white" }} />
                                    <h2 style={{ marginTop: "2ch", color: "white" }}>
                                        Remodel
                                    </h2>
                                    <p style={{ marginTop: "2ch", color: "white" }}>
                                        For a complete change in aesthetics, layout and restructure the inside functionality, we can restructure the inside of your house to be the home you’ve always dreamed of.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="container" style={{ marginTop: "10ch" }}>
                        <h2 style={{ textAlign: "center" }}>
                            GALLERY
                        </h2>
                        <div className="image-slider-container">
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
                                className="custom-carousel"
                            >
                                <div>
                                    <img src='/assets/images/residentialinterior1.jpg' alt="Image 1" />
                                </div>
                                <div>
                                    <img src='/assets/images/residentialinterior2.jpg' alt="Image 1" />

                                </div>
                                <div>
                                    <img src='/assets/images/residentialinterior3.jpg' alt="Image 1" />
                                </div>
                                <div>
                                    <img src='/assets/images/residentialinterior4.jpg' alt="Image 1" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#0668e1", width: "100%", height: "auto", marginTop: "20ch", }}>
                        <h1 style={{ fontSize: "30px", textAlign: "center", paddingTop: "7%", paddingBottom: "0%", color: "white" }}>
                            Trust in GhorBari
                        </h1>
                        <p style={{ textAlign: "center", padding: "3% 10% 5%", color: "white", fontSize: "18px" }}>
                            With years of expertise in fulfilling property dreams, Bproperty stands as the ultimate one-stop solutions provider prioritizing your needs. Thousands of customers have entrusted us and left as satisfied clients. Rest assured, your dream home is just a phone call away.
                        </p>
                    </div>
                    <div className="container">
                        <h1 style={{ fontSize: "30px", marginTop: "5ch", marginBottom: "5ch" }}>
                            Send us a message and we will contact you back
                        </h1>
                        <ResidentialInteriorContact />
                    </div>
                    <div className="container">
                        <div className="backgroundimageforbanner">
                            <Row>
                                <Col md="6">
                                    <h1 className="learnheadertext">
                                        Just a call away
                                    </h1>
                                    <p className="learntext">
                                        If you want personalized space planning, renovations, and customized furniture services, look no further than Bproperty Interior.
                                    </p>
                                </Col>
                                <Col md="6">
                                    <p className="icon"><i class="fa-solid fa-phone"></i> <a href="tel:01709882474"><span className="number">01709882474</span></a></p>

                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div style={{marginTop:"5%"}}>
                        <Interiorfaqans/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResidentialInterior;