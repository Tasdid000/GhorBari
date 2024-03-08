import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from "react-bootstrap";
import "./PropertyAdvisors.css";
class PropertyAdvisors extends Component {
    state = {
        counter1: 0,
        counter2: 0,
        counter3: 0,
        counter4: 0,
        interval1: null,
        interval2: null,
        interval3: null,
        interval4: null,
    };
    updateCounter1 = () => {
        const newCounter1 = (this.state.counter1 + 1) % 18;
        this.setState({
            counter1: newCounter1,
        });

        if (newCounter1 === 17) {
            clearInterval(this.state.interval1);
        }
    };

    updateCounter2 = () => {
        const newCounter2 = (this.state.counter2 + 1) % 5;
        this.setState({
            counter2: newCounter2,
        });

        if (newCounter2 === 4) {
            clearInterval(this.state.interval2);
        }
    };

    updateCounter3 = () => {
        const newCounter3 = (this.state.counter3 + 1) % 7;
        this.setState({
            counter3: newCounter3,
        });

        if (newCounter3 === 6) {
            clearInterval(this.state.interval3);
        }
    };

    updateCounter4 = () => {
        const newCounter4 = (this.state.counter4 + 4) % 59;
        this.setState({
            counter4: newCounter4,
        });

        if (newCounter4 === 48) {
            clearInterval(this.state.interval4);
        }
    };

    componentDidMount() {
        const interval1 = setInterval(this.updateCounter1, 100);
        const interval2 = setInterval(this.updateCounter2, 500);
        const interval3 = setInterval(this.updateCounter3, 200);
        const interval4 = setInterval(this.updateCounter4, 100);

        this.setState({
            interval1,
            interval2,
            interval3,
            interval4,
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval1);
        clearInterval(this.state.interval2);
        clearInterval(this.state.interval3);
        clearInterval(this.state.interval4);
    }

    render() {
        return (
            <div style={{ marginTop: "10%" }}>
                <div className="container" style={{ marginTop: "5%" }}>
                    <Row>
                        <Col md="6">
                            <div className="">
                                <h1 style={{ fontSize: "50px" }}>Your Trusted Property Advisors</h1>
                                <p style={{ marginTop: "10%", fontSize: "20px", marginBottom: "10%" }}>Guiding You to Your Perfect Home Investment with Expertise and Trustworthiness.</p>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="">
                                <Row>
                                    <Col md="6">
                                        <div className="">
                                            <Card className="customerss">
                                                <CardBody className="customersscard">
                                                    <h3 style={{ fontSize: "50px" }}>{this.state.counter1} K+</h3>
                                                    <p style={{ fontSize: "25px" }}>Satisfied Customers</p>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="">
                                            <Card className="experience">
                                                <CardBody className="experiencecard">
                                                    <h3 style={{ fontSize: "50px" }}>{this.state.counter2}</h3>
                                                    <p style={{ fontSize: "25px" }}>Years of Experience</p>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "7%" }}>
                                    <Col md="6">
                                        <div className="1">
                                            <Card className="award">
                                                <CardBody className="awardcard">
                                                    <h3 style={{ fontSize: "50px" }}>{this.state.counter3}</h3>
                                                    <p style={{ fontSize: "25px" }}>Award Winning</p>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="1">
                                            <Card className="PropertyCollections">
                                                <CardBody className="PropertyCollectionscard">
                                                    <h3 style={{ fontSize: "50px" }}>{this.state.counter4}</h3>
                                                    <p style={{ fontSize: "25px" }}>Property Collections</p>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default PropertyAdvisors;
