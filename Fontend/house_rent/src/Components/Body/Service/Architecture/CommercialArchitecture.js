import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import CommercialArchitectureContact from "./CommercialArchitectureContact";
import Architecturefaqans from "./FAQ/ans_and_que";
import CommercialArchitectureEmployee from "./Employe/CommercialArchitectureemployee";
class CommercialArchitecture extends Component {
    render() {
        return (
            <div style={{ overflowX: "hidden" }}>
                <div className="backgroundCommercialArchitecture">
                    <Row>
                        <Col md="4" className="ResidentialArchitecture">
                            <h1 className="CommercialArchitectureheadertext">
                                Crafting a Homes for Unforgettable Memories
                            </h1>
                            <p className="CommercialArchitecturtext">
                                Transform Your Vision into Reality <br />Contact Us to Create Your Dream Home
                            </p>
                        </Col>
                    </Row>
                    <div style={{ backgroundColor: "white", width: "100%" }}>
                        <div style={{ backgroundColor: "#6053fc", width: "100%", height: "auto", marginTop: "20ch", }}>
                            <h1 style={{ fontSize: "30px", textAlign: "center", paddingTop: "7%", paddingBottom: "7%", color: "white" }}>
                                Embrace the Moments Turning Houses into Homes
                            </h1>
                        </div>
                        <div className="container mx-8" style={{ paddingTop: "10ch" }}>
                            <Row style={{ marginTop: "5ch" }}>
                                <Col md="6" style={{ padding: "5% 1% 0% 5%" }}>
                                    <h1 style={{ fontSize: "30px", textAlign: "" }}>
                                        Dynamic Commercial Spaces
                                    </h1><br /><br />
                                    <p style={{ fontSize: "20px" }}>
                                        Innovative designs harmonize with your business vision, enhancing functionality and aesthetics for commercial spaces that inspire success and productivity
                                    </p>
                                </Col>
                                <Col md="5">
                                    <div>
                                        <img src="/assets/images/undraw_building_re_xfcm.svg" style={{ height: "30ch", width: "100%", padding: "1% 1% 1%" }} />
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "20ch" }}>
                                <Col md="5">
                                    <div>
                                        <img src="/assets/images/undraw_urban_design_kpu8.svg" style={{ height: "30ch", width: "100%", padding: "1% 1% 1%" }} />
                                    </div>
                                </Col>
                                <Col md="6" style={{ padding: "5% 1% 0% 5%" }}>
                                    <h1 style={{ fontSize: "30px", textAlign: "" }}>
                                        Architecture for Modern Business
                                    </h1><br /><br />
                                    <p style={{ fontSize: "20px" }}>
                                        Elevating Functionality, Aesthetics, and Productivity in Commercial Environments
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        {/* <div style={{ backgroundColor: "#6053fc", marginTop: "10ch", paddingBottom: "5ch" }}>
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
                        </div> */}
                        <div className="container" style={{ marginTop: "10%" }}>
                            <h1 style={{ textAlign: "center", paddingTop: "3ch", fontSize: "35px" }}>
                                What We Provide
                            </h1>
                            <Row style={{ marginTop: "10%" }}>
                                <Col md="7">
                                    <h3 style={{ textAlign: "center", color: "#6053fc" }}>Strategic Commercial Space Planning</h3>
                                </Col>
                                <Col md="5">
                                    <p style={{ fontSize: "17px", }}>Tailoring our expertise to your business needs, we provide strategic space planning services to optimize the layout and functionality of your commercial spaces. From efficient workflow design to customer-focused layouts, we ensure your space serves its purpose effectively.</p>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "10%" }}>
                                <Col md="5">
                                    <p style={{ fontSize: "17px", }}>Our team understands the importance of branding in commercial architecture. We offer design solutions that align with your brand identity, creating spaces that not only meet functional requirements but also contribute to a cohesive and impactful brand image.</p>
                                </Col>
                                <Col md="7">
                                    <h3 style={{ textAlign: "center", color: "#6053fc" }}>Branding-Focused Design Solutions</h3>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "10%" }}>
                                <Col md="7">
                                    <h3 style={{ textAlign: "center", color: "#6053fc" }}>Code Compliance and Regulatory Navigation</h3>
                                </Col>
                                <Col md="5">
                                    <p style={{ fontSize: "17px", }}>Navigating through the complex landscape of building codes and regulations is a crucial aspect of commercial architecture. We ensure that your project meets all necessary codes and regulations, providing a seamless and compliant construction process. Our expertise in this area minimizes delays and ensures a smooth path from concept to completion.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <CommercialArchitectureEmployee />
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
                                    className="carousel carousel-slider"
                                >
                                    <div>
                                        <img src='/assets/images/commercialarchitecture1.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/commercialarchitecture2.jpg' alt="Image 1" />

                                    </div>
                                    <div>
                                        <img src='/assets/images/commercialarchitecture3.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/commercialarchitecture4.jpg' alt="Image 1" />
                                    </div>


                                    <div>
                                        <img src='/assets/images/Gallery/3d-rendering-abstract-building.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/3d-rendering-cartoon-house.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/anime-flat-building-illustration.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/sketch-modern-building(1).jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/sketch-modern-building.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/three-dimensional-house-model.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/view-building-with-cartoon-style-architecture(1).jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/view-building-with-cartoon-style-architecture.jpg' alt="Image 1" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#6053fc", width: "100%", height: "auto", marginTop: "20ch", }}>
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
                            <CommercialArchitectureContact />
                        </div>
                        <div className="container">
                            <div className="backgroundimageforbanner">
                                <Row>
                                    <Col md="6">
                                        <h1 className="learnheadertext">
                                            Just a call away
                                        </h1>
                                        <p className="learntext">
                                            If you want personalized space planning, renovations, and customized furniture services, look no further than Bproperty Architecture.
                                        </p>
                                    </Col>
                                    <Col md="6">
                                        <p className="icon"><i class="fa-solid fa-phone"></i> <a href="tel:01709882474"><span className="number">01709882474</span></a></p>

                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div style={{ marginTop: "5%" }}>
                            <Architecturefaqans />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommercialArchitecture;