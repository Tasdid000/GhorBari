import React, { Component } from "react";
import "./style.css"
import { Col, Row } from "reactstrap";
import Contact from "./Contact";
// import Property from "./Property/Property";
class Home extends Component {
    render() {
        return (
            <div style={{ overflowX: "hidden" }}>
                <div className="minscreen">
                    <p className="headertext">
                        Search properties for sale and for rent in Sylhet
                    </p>
                </div>
                <div className="placelist">
                    <p className="Populartext">
                        Popular Sylhet Neighborhoods
                    </p>
                </div>
                <div className="contactbackground">
                    <div className="container">
                        <Row>
                            <Col md="5" className="contactcol">
                                <Contact />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;