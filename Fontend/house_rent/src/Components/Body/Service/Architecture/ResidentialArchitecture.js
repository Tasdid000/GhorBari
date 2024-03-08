import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import ResidentialArchitectureContact from "./ResidentialArchitectureContact";
import Architecturefaqans from "./FAQ/ans_and_que";
import ResidentialArchitectureEmployee from "./Employe/ResidentialArchitectureemployee";
class ResidentialArchitecture extends Component {
    render() {

        return (
            <div>
                <div className="backgroundResidentialArchitecture">
                    <Row>
                        <Col md="5" className="ResidentialArchitecture">
                            <h1 className="ResidentialArchitectureheadertext">
                                Your Dream Homes Await
                            </h1>
                            <p className="ResidentialArchitecturetext">
                                Crafting Your Vision into Architectural Brilliance
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
                                        Crafting Home for Lasting Memories
                                    </h1><br /><br />
                                    <p style={{ fontSize: "20px" }}>
                                        Creating Comfort, Accessibility, and Beauty Enriching Homes for Cherished Memories
                                    </p>
                                </Col>
                                <Col md="5">
                                    <div >
                                        <img src="/assets/images/beach house-pana.svg" />
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "20ch" }}>
                                <Col md="5">
                                    <div >
                                        <img src="/assets/images/Build your home-amico.svg" />
                                    </div>
                                </Col>
                                <Col md="6" style={{ padding: "5% 1% 0% 5%" }}>
                                    <h1 style={{ fontSize: "30px", textAlign: "" }}>
                                        Design your Haven
                                    </h1><br /><br />
                                    <p style={{ fontSize: "20px" }}>
                                        Design Your Personal Haven. Tailored Designs for a Home That Reflects Your Style, Comfort, and Unique Story.
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
                                <Col md="6">
                                    <h3 style={{ textAlign: "center", color: "#6053fc" }}>Apartment Building Design</h3>
                                </Col>
                                <Col md="6">
                                    <p style={{ fontSize: "17px", }}>Architecture is a very powerful tool to control the environment , society and life style of us.It can be control the way of our behavior, reflects  our mood. Architecture a not only a way of functional arrangement but also define how we will react to each others. Sometimes the environment and social behave can be control by architecture. So We should be more careful when we are  going to designing something as an architect. The value always get increased when we can include these sophisticated elements in our design. So we incorporate our in-depth knowledge to every single project.</p>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "10%" }}>
                                <Col md="6">
                                    <p style={{ fontSize: "17px", }}>There’s a place we will always remember. A place where the best childhood memories come from. It’s your first nest your father’s home. which is more than a place, it’s a feeling of primary safety and comfort. Here it is, minimalistic and honest to the bones.The original task for the building sounded as “I want a house of lines”. Between the lines : Getting the maximum from the minimum of the basic materials – concrete, glass and rebated roof – is possible due to a competent approach to the composition. From a professional point of view, this is an architectural concrete & glass, and, from the creative one, it is a concrete of poetry and glass of verse. The walls are the bridgehead for creativity. Perhaps they will once be adorned by  their inhabitants.</p>
                                </Col>
                                <Col md="6">
                                    <h3 style={{ textAlign: "center", color: "#6053fc", paddingTop: "5%" }}>Duplex House Design</h3>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <ResidentialArchitectureEmployee />
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
                                        <img src='/assets/images/residentialArchitecture1.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/residentialArchitecture2.jpg' alt="Image 1" />

                                    </div>
                                    <div>
                                        <img src='/assets/images/residentialArchitecture3.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/residentialArchitecture4.jpg' alt="Image 1" />
                                    </div>


                                    <div>
                                        <img src='/assets/images/Gallery/3d-house-model-with-modern-architecture.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/3d-rendering-house-model(1).jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/3d-rendering-house-model(2).jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/3d-rendering-house-model.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/3d-rendering-isometric-house(1).jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/3d-rendering-isometric-house.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/3d-rendering-isometric-house-model.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/3d-rendering-isometric-house-models.jpg' alt="Image 1" />
                                    </div>
                                    <div>
                                        <img src='/assets/images/Gallery/set-designer-work-indoors.jpg' alt="Image 1" />
                                    </div><div>
                                        <img src='/assets/images/Gallery/view-3d-house-model.jpg' alt="Image 1" />
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
                            <ResidentialArchitectureContact />
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

export default ResidentialArchitecture;