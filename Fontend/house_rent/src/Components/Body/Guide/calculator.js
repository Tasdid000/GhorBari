import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, Row, Col, Card, CardBody, CardText } from 'react-bootstrap';
import './style.css'
const LoanCalculator = () => {
    const [propertyPrice, setPropertyPrice] = useState('');
    const [downPaymentPercentage, setDownPaymentPercentage] = useState('');
    const [loanPeriod, setLoanPeriod] = useState('20');
    const [interestRate, setInterestRate] = useState(8.90);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [downPaymentValue, setDownPaymentValue] = useState('');
    const [showDetails, setShowDetails] = useState(false);
    const handlePropertyPriceChange = (e) => {
        setPropertyPrice(e.target.value);
        setDownPaymentValue('');
    };
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    const handleDownPaymentChange = (e) => {
        setDownPaymentPercentage(e.target.value);
        if (propertyPrice !== '') {
            const percentage = parseFloat(e.target.value);
            const calculatedDownPayment = (parseFloat(propertyPrice) * percentage) / 100;
            setDownPaymentValue(Math.round(calculatedDownPayment));
        }
    };

    const handleLoanPeriodChange = (e) => {
        setLoanPeriod(e.target.value);
    };

    const handleInterestRateChange = (e) => {
        setInterestRate(e.target.value);
    };


    const calculateMonthlyPayment = () => {
        if (propertyPrice === '' || downPaymentPercentage === '') {
            alert('Please Enter Property Price and Down Payment Percentage First');
            return;
        }

        const principal = parseInt(propertyPrice) - parseFloat(downPaymentValue || 0);
        const rate = parseFloat(interestRate) / 100 / 12;
        const term = parseFloat(loanPeriod) * 12;
        const x = Math.pow(1 + rate, term);
        const monthlyPaymentValue = Math.round((principal * x * rate) / (x - 1));
        setMonthlyPayment(monthlyPaymentValue);
        setShowDetails(true);
    };


    return (
        <div className="loan-calculator">
            <Row>
                <Col md="5" style={{ marginBottom: "3ch" }}>
                    <Form>
                        <FormGroup>
                            <FormLabel>Property Price (BDT):</FormLabel>
                            <FormControl type="number" value={propertyPrice} onChange={handlePropertyPriceChange} />
                        </FormGroup><br />
                        <FormGroup>
                            <FormLabel>
                                Down Payment (%): {propertyPrice ? '' : ''}
                            </FormLabel>
                            <FormControl
                                as="select"
                                value={downPaymentPercentage}
                                onChange={handleDownPaymentChange}
                                disabled={!propertyPrice}
                            >
                                <option value="">Please Enter Property Price First</option>
                                <option value="5">5%</option>
                                <option value="10">10%</option>
                                <option value="15">15%</option>
                                <option value="20">20%</option>
                                <option value="25">25%</option>
                                <option value="30">30%</option>
                                <option value="35">35%</option>
                                <option value="40">40%</option>
                                <option value="45">45%</option>
                                <option value="50">50%</option>
                                {/* Add more options as needed */}
                            </FormControl>
                        </FormGroup><br />
                        <FormGroup><br />
                            <FormLabel>Loan Period (years):</FormLabel>
                            <FormControl as="select" value={loanPeriod} onChange={handleLoanPeriodChange}>
                                <option value="">Choose Loan Period</option>
                                {[...Array(16).keys()].map((year) => (
                                    <option key={year + 15} value={year + 15}>
                                        {year + 15} years
                                    </option>
                                ))}
                            </FormControl>
                        </FormGroup><br />
                        <FormGroup>
                            <FormLabel>Interest Rate:</FormLabel>
                            <FormControl
                                type="range"
                                min="22%"
                                max="30"
                                step="0.1"
                                value={interestRate}
                                onChange={handleInterestRateChange}
                                style={{
                                    WebkitAppearance: 'none',
                                    width: '100%',
                                    height: '15px',
                                    borderRadius: '5px',
                                    background: `linear-gradient(to right, #6053fc 5%, #6053fc ${(interestRate / 30) * 100}%, #ddd ${(interestRate / 30) * 100}%, #ddd 100%)`,
                                    outline: 'none',
                                    opacity: '0.7',
                                    transition: 'opacity .2s',
                                    margin: '10px 0',
                                }}
                            /><br />
                            <span>Interest Rate: {interestRate}%</span>
                        </FormGroup>
                        <Row>
                            <Col md="4" style={{marginTop:"5%"}}>
                                <Button className='button10' onClick={calculateMonthlyPayment}>Calculate</Button>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col md="6" className='container'>
                    {showDetails && (
                        <div style={{}}>
                            <h2>Payment Details</h2>
                            <Card className='shadow p-5' style={{ marginTop: "8%", width: "100%" }}>
                                <CardBody>
                                    <CardText>
                                        <p>Property Price: <span style={{ marginLeft: "20%" }}>{propertyPrice} BDT</span></p><hr />
                                        <p>Down Payment: <span style={{ marginLeft: "19%" }}>{downPaymentValue} BDT</span></p><hr />
                                        <p>Loan Amount: <span style={{ marginLeft: "21%" }}>{propertyPrice - downPaymentValue} BDT approx</span></p><hr />
                                        <p>Period: <span style={{ marginLeft: "33%" }}></span>{loanPeriod} Years</p><hr />
                                        <p>Interest Rate: <span style={{ marginLeft: "23%" }}>{interestRate}%</span></p><hr />
                                        <p>Monthly Payment: <span style={{ marginLeft: "15%" }}>{monthlyPayment} BDT approx</span></p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default LoanCalculator;
