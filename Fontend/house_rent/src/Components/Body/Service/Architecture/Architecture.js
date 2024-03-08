import React from "react";
import { Col, Row } from "react-bootstrap";
import './style.css';
const Architecture = () => {
    return (
        <div>
            <div className="backgroundimages">
                <p className="textArchitecture">
                    Choose your Ghor<span style={{ color: "#6053fc" }}>Bari</span> Architecture service
                </p>
                <Row>
                    <Col style={{ textAlign: "center", paddingTop: "5ch" }}>

                        <a href="/residentialArchitecture" style={{ paddingRight: "2ch" }}>
                            <button class="button30"> RESIDENTIAL</button>
                        </a>
                        <a href="/commercialArchitecture">
                            <button class="button30"> COMMERCIAL</button>
                        </a>
                    </Col>
                </Row>
            </div >
        </div>
    )
}

export default Architecture;

