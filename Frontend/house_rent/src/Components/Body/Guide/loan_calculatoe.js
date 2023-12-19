import React, { Component } from "react";
import LoanCalculator from "./calculator";
import { Row, Col } from 'reactstrap';
import './style.css'
class load_calculator extends Component {
    render() {
        return (
            <div style={{ overflowX: "hidden" }}>
                <div style={{ paddingTop: "10ch", paddingBottom: "10ch" }} className="loanbackground">
                    <h1 style={{ textAlign: "center", fontSize: "45px", color: "white" }}>
                        Loan Calculator
                    </h1>
                    <p style={{ textAlign: "center", fontSize: "20px", color: "white" }}>
                        Calculate Home Loan For Properties in Bangladesh
                    </p>
                </div>
                <div>
                    <Row>
                        <Col md="6">

                        </Col>
                        <Col md="4">
                            <LoanCalculator />
                        </Col>
                    </Row>
                </div>
                <div>
                    <h1>
                        
                    </h1>
                </div>

            </div>
        )
    }
}
export default load_calculator;