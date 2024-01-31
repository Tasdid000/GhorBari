import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import CommercialInteriorContact from "./CommercialInteriorContact";
import Interiorfaqans from "./FAQ/ans_and_que";
class CommercialInterior extends Component {
    render() {
        return (
            <div className="backgroundCommercialInterior">
                <div md="6" className="CommercialInterior">
                    <h1 className="CommercialInteriorheadertext">
                        Designed to Succeed
                    </h1>
                    <p className="CommercialInteriortext">
                        Connect with us for brand specific customization
                    </p>
                </div>
                <div style={{ backgroundColor: "white", width: "100%" }}>
                    <div style={{ backgroundColor: "#0668e1", width: "100%", height: "auto", marginTop: "20ch", }}>
                        <h1 className="container" style={{ fontSize: "30px", textAlign: "center", paddingTop: "7%", paddingBottom: "7%", color: "white" }}>
                            Make a statement with your brand
                        </h1>
                    </div>
                    <div style={{ paddingTop: "10ch" }}>
                        <div className="container mx-8">
                            <h1 style={{ textAlign: "center" }}>
                                Ghor<span style={{ color: "#6053fc" }}>Bari</span> Interior
                            </h1>
                            <p style={{ textAlign: "center", fontSize: "18px", marginTop: "3ch" }}>
                                The ambiance of your workspace significantly impacts clients, customers, employees, and your brand's image. Our dedicated interior designers specialize in crafting and implementing spaces tailored to your brand and business needs promptly, ensuring an optimal environment.
                            </p>
                        </div>
                        <img src="/assets/images/commersialinterior.jpg" style={{ width: "100%", height: "auto", marginTop: "4ch" }} />
                        <div className="container mx-8">
                            <Row>
                                <Col md="4" style={{ textAlign: "center", marginTop: "10ch" }}>
                                    <h1 style={{ fontSize: "25px" }}>
                                        Strong First Impression
                                    </h1>
                                    <p>
                                        First impressions mean a lot to clients and customers. We believe in interior designs that create the strongest first impression and boost the way your consumers see you.
                                    </p>
                                </Col>
                                <Col md="4" style={{ textAlign: "center", marginTop: "10ch" }}>
                                    <h1 style={{ fontSize: "25px" }}>
                                        Maximum Productivity
                                    </h1>
                                    <p>
                                        Our experts plan out the best layout, mood board, and design to improve mood and maximize productivity in the workplace.
                                    </p>
                                </Col>
                                <Col md="4" style={{ textAlign: "center", marginTop: "10ch" }}>
                                    <h1 style={{ fontSize: "25px" }}>
                                        Customized Furniture
                                    </h1>
                                    <p>
                                        We ensure the furnishings and furniture in your workplace are exactly the way you need to satisfy the needs of your clientele and employees.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="container mx-8" style={{ paddingTop: "10ch" }}>
                        <h1 style={{ textAlign: "center" }}>
                            Undertaking Success
                        </h1>
                        <Row style={{ marginTop: "10ch" }}>
                            <Col md="6" style={{ padding: "5% 1% 0% 5%" }}>
                                <h1 style={{ fontSize: "30px", textAlign: "" }}>
                                    Office
                                </h1><br />
                                <p style={{ fontSize: "20px" }}>
                                    Create an Office Space That Wows Clients and Enables Seamless Movement for Your Employees.
                                </p>
                            </Col>
                            <Col md="5">
                                <div style={{ borderStyle: "solid", borderRadius: "6px", borderWidth: "2px", boxShadow: "" }}>
                                    <img src="/assets/images/office.jpg" style={{ height: "30ch", width: "100%", padding: "1% 1% 1%" }} />
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "20ch" }}>
                            <Col md="5">
                                <div style={{ borderStyle: "solid", borderRadius: "6px", borderWidth: "2px", boxShadow: "" }}>
                                    <img src="/assets/images/Retail.jpg" style={{ height: "30ch", width: "100%", padding: "1% 1% 1%" }} />
                                </div>
                            </Col>
                            <Col md="6" style={{ padding: "5% 1% 0% 5%" }}>
                                <h1 style={{ fontSize: "30px", textAlign: "" }}>
                                    Retail Outlets
                                </h1><br /><br />
                                <p style={{ fontSize: "20px" }}>
                                    Craft Captivating Retail Spaces where Showcase Your Products and Services in Unparalleled Style, Highlighting Your Prime Offerings to Captivate Consumers.
                                </p>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "10ch" }}>
                            <Col md="6" style={{ padding: "5% 1% 0% 5%" }}>
                                <h1 style={{ fontSize: "30px", textAlign: "" }}>
                                    Restaurants
                                </h1><br />
                                <p style={{ fontSize: "20px" }}>
                                    Unlocking Dining Experiences Where Ambiance and Decor Set the Stage for Memorable Meals in Your Restaurant's Renewed Atmosphere.
                                </p>
                            </Col>
                            <Col md="5">
                                <div style={{ borderStyle: "solid", borderRadius: "6px", borderWidth: "2px", boxShadow: "" }}>
                                    <img src="/assets/images/Restaurants.jpg" style={{ height: "30ch", width: "100%", padding: "1% 1% 1%" }} />
                                </div>
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
                                    <img src="/assets/images/paint-roller.png" style={{ width: "150px", border: "solid", borderRadius: "50%", padding: "5px 5px 5px", borderColor: "white" }} />
                                    <h2 style={{ marginTop: "2ch", color: "white" }}>
                                        Decorate
                                    </h2>
                                    <p style={{ marginTop: "2ch", color: "white" }}>
                                        An elementary change in the interior to improve the appearance and create a great first impression.
                                    </p>
                                </Col>
                                <Col md="3" style={{ textAlign: "center", marginTop: "10ch" }}>
                                    <img src="/assets/images/cement.png" style={{ width: "150px", border: "solid", borderRadius: "50%", padding: "5px 5px 5px", borderColor: "white" }} />
                                    <h2 style={{ marginTop: "2ch", color: "white" }}>
                                        Renovate
                                    </h2>
                                    <p style={{ marginTop: "2ch", color: "white" }}>
                                        An elementary change in the interior to improve the appearance and create a great first impression.
                                    </p>
                                </Col>
                                <Col md="3" style={{ textAlign: "center", marginTop: "10ch" }}>
                                    <img src="/assets/images/wall.png" style={{ width: "150px", border: "solid", borderRadius: "50%", padding: "5px 5px 5px", borderColor: "white" }} />
                                    <h2 style={{ marginTop: "2ch", color: "white" }}>
                                        Remodel
                                    </h2>
                                    <p style={{ marginTop: "2ch", color: "white" }}>
                                        Complete environment remodeling to establish brand values and improve functional productivity.
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
                                    <img src='/assets/images/commercialinterior1.jpg' alt="Image 1" />
                                </div>
                                <div>
                                    <img src='/assets/images/commercialinterior2.jpg' alt="Image 1" />

                                </div>
                                <div>
                                    <img src='/assets/images/commercialinterior3.jpg' alt="Image 1" />
                                </div>
                                <div>
                                    <img src='/assets/images/commercialinterior4.jpg' alt="Image 1" />
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
                        <CommercialInteriorContact />
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

export default CommercialInterior;