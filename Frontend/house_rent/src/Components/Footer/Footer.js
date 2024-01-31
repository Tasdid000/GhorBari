import React from "react";
import "./footer.css"
import { Col, Row } from "react-bootstrap";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Row style={{ padding: "3%" }}>
                    <Col md="3">
                        <img src="/assets/images/logo.png" width={"100px"} />
                        <p style={{ color: "white", paddingTop: "10px" }}>Discover your ideal home with our assistance as we redefine your dream living space.</p>
                        <a className="footeremail" href="mailto:ghorbariproperty@gmail.com">ghorbariproperty@gmail.com</a>
                    </Col>
                    <Col md="3">
                        <h5 style={{ color: "white"}}>SERVICES</h5>
                    </Col>
                    <Col md="3">
                    </Col>
                    <Col md="3">
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Footer;