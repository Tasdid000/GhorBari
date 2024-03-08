import React from "react";
import "./footer.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Row style={{ padding: "3%" }}>
                    <Col md="3" style={{ paddingBottom: '5%' }}>
                        <a href="/">
                            <img src="/assets/images/logo.png" width={"100px"} alt="Logo" />
                        </a>
                        <p style={{ color: "white", paddingTop: "10px" }}>
                            Discover your ideal home with our assistance as we redefine your dream living space.
                        </p>
                        <a className="footeremail" href="mailto:ghorbariproperty@gmail.com">
                            ghorbariproperty@gmail.com
                        </a>
                    </Col>
                    <Col md="2" className="container" style={{ paddingBottom: '5%' }}>
                        <h6 style={{ color: "white", textTransform: "uppercase", fontSize: "17px" }}>Services</h6>
                        <a href="/architecture"><p style={{ color: "white", paddingTop: "10px" }}>Architecture</p></a>
                        <a href="/interior"><p style={{ color: "white", paddingTop: "10px" }}>Interior</p></a>
                        <a href="/home_loan"><p style={{ color: "white", paddingTop: "10px" }}>Home Loan</p></a>
                    </Col>
                    <Col md="2" style={{ paddingBottom: '5%' }}>
                        <h6 style={{ color: "white", textTransform: "uppercase", fontSize: "17px" }}>Event</h6>
                        <a href="/career"><p style={{ color: "white", paddingTop: "10px" }}>Careers</p></a>
                    </Col>
                    <Col md="3" style={{ paddingBottom: '5%' }}>
                        <h6 style={{ color: "white", textTransform: "uppercase", fontSize: "17px" }}>Follow</h6>
                        <Row>
                            <Col style={{ textAlign: "center" }}>
                                <a href='https://www.facebook.com'>
                                    <i class="fa-brands fa-facebook" style={{ fontSize: "35px", color: "#33579e", marginRight: "5%" }}></i>
                                </a>
                                <a href='https://www.twitter.com'>
                                    <i class="fa-brands fa-square-x-twitter" style={{ fontSize: "35px", color: "#00aff3", marginRight: "5%" }}></i>
                                </a>
                                <a href='https://www.pinterest.com'>
                                    <i class="fa-brands fa-pinterest" style={{ fontSize: "35px", color: "#ef3a2b", marginRight: "5%" }}></i>
                                </a>
                                <a href='https://www.youtube.com'>
                                    <i class="fa-brands fa-youtube" style={{ fontSize: "35px", color: "#dd0017", marginRight: "5%" }}></i>
                                </a>
                                <a href='https://www.linkedin.com'>
                                    <i class="fa-brands fa-linkedin" style={{ fontSize: "35px", color: "#00aff3" }}></i>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Footer;