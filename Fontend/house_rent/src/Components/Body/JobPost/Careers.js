import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import "./Jobstyle.css";
import JobList from "./JobList";
import JobDetails from "./JobDetails";

class Careers extends Component {
    render() {
        return (
            <div className="container" style={{ overflowX: "hidden", marginTop: "15%", marginBottom: "10%" }}>
                <Row>
                    <Col md="6" className="container">
                        <h1 style={{ paddingTop: "10%", fontWeight: "600", lineHeight: "60px" }}>Join the Property Solution Leaders</h1>
                        <p style={{ fontSize: "18px", marginTop: "5%" }}>Join the largest property solutions<br /> provider. Unlock your true potential for an<br /> accelerating & fulfilling career in the most<br /> satisfying way.</p>
                        <a href="#JobOPENINGS" style={{ marginTop: "10%" }}><button type="button" className="jobbutton"> VIEW OPENINGS</button></a>
                    </Col>
                    <Col md="6">
                        <img src="/assets/images/undraw_resume_re_hkth.svg" width={"80%"} alt="Resume" />
                    </Col>
                </Row>
                <div style={{ marginTop: "10%" }}>
                    <Row>
                        <Col md="6" className="container">
                            <h1 style={{ paddingTop: "10%", fontWeight: "600", lineHeight: "60px" }}>Our Core Values</h1>
                            <p style={{ fontSize: "18px", marginTop: "5%" }}>GhorBari understands that for talent to reach its full potential, it requires a supportive and inspiring environment. Our culture is characterized by openness, youthfulness, and encouragement, creating the ideal atmosphere for growth. By bringing together the industry's finest minds and leveraging our extensive experience, we provide individuals with unparalleled opportunities to advance their careers. At GhorBari, we believe in nurturing, motivating, and appreciating talent, making it the ultimate destination for those seeking to excel and thrive in their professional journeys.</p>
                            <Row style={{ paddingTop: "5%" }}>
                                <Col>
                                    <span><i className="fa-solid fa-check"></i> Integrity</span>
                                </Col>
                                <Col>
                                    <span><i className="fa-solid fa-check"></i> Responsibility</span>
                                </Col>
                                <Col>
                                    <span><i className="fa-solid fa-check"></i> Respectfulness</span>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: "5%" }}>
                                <Col>
                                    <span><i className="fa-solid fa-check"></i> Confident</span>
                                </Col>
                                <Col>
                                    <span><i className="fa-solid fa-check"></i> Trusting</span>
                                </Col>
                                <Col>
                                    <span><i className="fa-solid fa-check"></i> Passionate</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="6" style={{ marginTop: '10%' }}>
                            <img src="/assets/images/undraw_interview_re_e5jn.svg" width={"80%"} alt="Interview" />
                        </Col>
                    </Row>
                </div>
                <section id="JobOPENINGS">
                    <h1 style={{ textAlign: "center", paddingTop: "10%" }}>Our Openings</h1>
                    <div style={{ paddingTop: "5%" }}>
                        <JobList/>
                    </div>
                </section>
                <div className="container">
                    <div className="backgroundimageforbanner">
                        <Row>
                            <Col md="6">
                                <h1 className="learnheadertext">
                                    Interested to Join GhorBari?
                                </h1>
                                <p className="learntext">
                                    Show us your enthusiasm and interest by sending us your CV along with your preferred position.
                                </p>
                            </Col>
                            <Col md="6">
                                <p className="icon"><i className="fa-regular fa-envelope"></i> <a href="mailto:ghorbariproperty@gmail.com"><span className="number">ghorbariproperty@gmail.com</span></a></p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Careers;
