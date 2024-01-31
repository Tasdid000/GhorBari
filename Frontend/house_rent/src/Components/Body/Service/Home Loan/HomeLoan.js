import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import LoanCalculator from '../../Guide/calculator';
import './homeloan.css';
import ApplyForBank from "./Apply for bank/apply_for_bank";

class HomeLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCard: false
        };
        this.toggleCard = this.toggleCard.bind(this);
    }

    toggleCard() {
        this.setState(prevState => ({
            showCard: !prevState.showCard
        }));
    }

    render() {
        return (
            <div style={{ overflowX: "hidden" }}>
                <div className="homeloanbackground">
                    <Row style={{ paddingBottom: "6%" }}>
                        <Col md="6" className="ResidentialInterior">
                            <h1 className="homeloanheadertext">
                                House Loan
                           
                            </h1>
                            <p className="homeloantext">
                                Explore diverse financing options to secure your dream home financing.
                            </p>
                            <Row style={{ paddingTop: "5%" }}>
                                <Col md="4" style={{ marginBottom: "5%", }}>
                                    <button class="button40" onClick={this.toggleCard}>Apply For Loan</button>
                                    {this.state.showCard && (
                                        <div className="card-overlay" style={{paddingTop:"10%"}}>
                                            <div className="cardforbank">
                                                <div className="close-icon" onClick={this.toggleCard}>X</div>
                                                <h4 style={{textAlign:"center", marginTop:"5%"}}>Apply For Loan</h4>
                                                <div><ApplyForBank /></div>
                                            </div>
                                        </div>
                                    )}
                                </Col>
                                <Col md="4">
                                    <a href="/all_bank_list">
                                        <button class="button33"> View All Banks </button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
                    <div className="container" style={{ marginTop: "10%" }}>
                        <h1 style={{ textAlign: "center" }}>
                            How Home Loans Benefit You?
                        </h1>
                        <div className="container">
                            <Row style={{ marginTop: "10%" }}>
                                <Col md="3" style={{ textAlign: "center", marginTop: "3%" }}>
                                    <img src="assets/images/liquidity.png" style={{ width: "30%", textAlign: "center" }} />
                                    <h4 style={{ marginTop: "5%" }}>Liquidity</h4>
                                    <p className="propertyrowtext">
                                        Quick access to funding for your property needs
                                    </p>
                                </Col>
                                <Col md="3" style={{ textAlign: "center", marginTop: "3%" }}>
                                    <img src="assets/images/tax.png" style={{ width: "30%", textAlign: "center" }} />
                                    <h4 style={{ marginTop: "5%" }}>Tax returns</h4>
                                    <p className="propertyrowtext">
                                        Taking a loan comes with huge tax return benefits
                                    </p>
                                </Col>
                                <Col md="3" style={{ textAlign: "center", marginTop: "3%" }}>
                                    <img src="assets/images/financial.png" style={{ width: "30%", textAlign: "center" }} />
                                    <h4 style={{ marginTop: "5%" }}>Financial Aid</h4>
                                    <p className="propertyrowtext">
                                        When short of funds, a loan helps you drive your dreams
                                    </p>
                                </Col>
                                <Col md="3" style={{ textAlign: "center", marginTop: "3%" }}>
                                    <img src="assets/images/protection.png" style={{ width: "30%", }} />
                                    <h4 style={{ marginTop: "5%" }}>Safer</h4>
                                    <p className="propertyrowtext">
                                        Bank verified properties ensure that your investment is secure
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="container" style={{ marginTop: "10%" }}>
                        <h2 style={{ textAlign: "center" }}>
                            Home Loan Calculator
                        </h2>
                        <div style={{ marginTop: "5%" }}>
                            <LoanCalculator />
                        </div>

                    </div>
                    {/* <div style={{ marginTop: "5%" }}>
                        <h1 style={{ textAlign: "center" }}>
                            Our Partners
                        </h1>
                    </div> */}
                    <section id="apply">
                        <div className="container">
                            <h2 style={{ textAlign: "center", marginTop: "10%" }}>
                                How to apply
                            </h2>
                            <p style={{ fontSize: "20px", textAlign: "center", marginTop: "3%" }}>Fill out this form to be directed to the best bank for your needs</p>
                            <div><ApplyForBank /></div>
                        </div>
                    </section>
                    <div style={{ backgroundColor: "#D8DADB" }}>
                        <div className="container" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                            <h2 style={{ textAlign: "center" }}>
                                Contact Us
                            </h2>
                            <p style={{ textAlign: "center", marginTop: "3%", fontSize: "18px" }}>
                                You can contact us for inquiries through any of the following medium.
                            </p>
                            <Row>
                                <Col md="4" style={{ textAlign: "center", marginTop: "3%" }}>
                                    <a href="tel:01709882474">
                                        <button class="button30"><i class="fa-solid fa-phone"></i> Call</button>
                                    </a>
                                </Col>
                                <Col md="4" style={{ textAlign: "center", marginTop: "3%" }}>
                                    <a href="#apply">
                                        <button class="button30"><i class="fa-solid fa-envelope"></i> Email</button>
                                    </a>
                                </Col>
                                <Col md="4" style={{ textAlign: "center", marginTop: "3%" }}>
                                    <a href="sms:+8801709882474">
                                        <button class="button30"><i class="fa-solid fa-comments"></i> SMS</button>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeLoan;