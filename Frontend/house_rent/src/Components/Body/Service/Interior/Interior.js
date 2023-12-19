import React, { Component } from "react";
import './style.css';
import { Col, Row } from "react-bootstrap";
class Interior extends Component {
    render() {
        return (
            <div className="backgroundimage">
                <p className="textinterior">
                    Choose your Ghor<span style={{ color: "#6053fc" }}>Bari</span> Interior service
                </p>
                <Row>
                    <Col style={{ textAlign: "center", paddingTop: "5ch" }}>

                        <a href="/residentialinterior" style={{ paddingRight: "2ch" }}>
                            <button class="button30"> RESIDENTIAL</button>
                        </a>
                        <a href="/commercialinterior">
                            <button class="button30"> COMMERCIAL</button>
                        </a>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default Interior;

