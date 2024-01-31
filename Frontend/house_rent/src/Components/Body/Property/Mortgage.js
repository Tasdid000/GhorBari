import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import "./style.css"

const MortgageCalculator = ({ totalPrice: initialTotalPrice }) => {
    const [totalPrice, setTotalPrice] = useState(initialTotalPrice.replace(/,/g, '')); // Remove commas
    const [loanPeriod, setLoanPeriod] = useState('25'); // Default loan period
    const [downPaymentPercentage, setDownPaymentPercentage] = useState(30); // Default down payment percentage
    const [interestRate, setInterestRate] = useState('11'); // Default interest rate
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [downPayment, setDownPayment] = useState('');
    const [totalLoanAmount, setTotalLoanAmount] = useState('');

    // Initialize state with default values and trigger auto-calculation
    useEffect(() => {
        setTotalPrice(initialTotalPrice.replace(/,/g, ''));
        setLoanPeriod('25');
        setDownPaymentPercentage(30);
        setInterestRate('11');
    }, [initialTotalPrice]);

    useEffect(() => {
        calculateMortgage();
    }, [totalPrice, loanPeriod, downPaymentPercentage, interestRate]);

    // Calculate down payment when total price changes
    useEffect(() => {
        const calculatedDownPayment = (parseInt(totalPrice) * downPaymentPercentage) / 100;
        setDownPayment(parseInt(calculatedDownPayment));
    }, [totalPrice, downPaymentPercentage]);

    const calculateMortgage = () => {
        const principal = parseInt(totalPrice) - parseInt(downPayment);
        const interestRatePerMonth = parseInt(interestRate) / 100 / 12;
        const numberOfPayments = parseInt(loanPeriod) * 12;

        const monthlyPayment =
            (principal * interestRatePerMonth) /
            (1 - Math.pow(1 + interestRatePerMonth, -numberOfPayments));

        const calculatedDownPayment = (parseInt(totalPrice) * downPaymentPercentage) / 100;

        setMonthlyPayment(parseInt(monthlyPayment));
        setDownPayment(parseInt(calculatedDownPayment));
        setTotalLoanAmount(principal + parseInt(monthlyPayment) * numberOfPayments);
    };

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div>
            <Row className='mortgage'>
                <Col md="8" style={{ padding: "5%" }}>
                    <div className='input-box'>
                        <label style={{ fontSize: "18px", fontWeight: "500" }}>
                            Total Price (BDT)
                        </label><br />
                        <input
                            type="text"
                            className='input'
                            value={totalPrice}
                            onChange={(e) => setTotalPrice(e.target.value.replace(/,/g, ''))}
                        />
                    </div>
                    <div className='input-box'>
                        <label style={{ fontSize: "18px", fontWeight: "500" }}>
                            Loan Period (Years)
                        </label><br />
                        <input
                            type="text"
                            className='input'
                            value={loanPeriod}
                            onChange={(e) => setLoanPeriod(e.target.value)}
                        />
                    </div>
                    <div className='input-box'>
                        <label style={{ fontSize: "18px", fontWeight: "500" }}>
                            Down Payment (BDT)
                        </label><br />
                        <input
                            type="text"
                            value={downPayment}
                            onChange={(e) => setDownPaymentPercentage(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>Down Payment Percentage: {downPaymentPercentage}%</p>
                    </div>
                    <div className='input-box'>
                        <label style={{ fontSize: "18px", fontWeight: "500" }}>
                            Interest Rate (%)
                        </label><br />
                        <input
                            type="text"
                            className='input'
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                        />
                    </div>
                </Col>
                <Col md="4" className='mortgage1'>
                    <div style={{ padding: "10%" }}>
                        {monthlyPayment !== null && (
                            <div>
                                <h1 style={{
                                    fontSize: "30px",
                                    fontWeight: "600",
                                }}><span style={{ fontSize: "20px", fontWeight: "500" }}>BDT</span> {formatNumberWithCommas(monthlyPayment)}</h1>
                                <h5 style={{ textAlign: "right" }}>per month</h5>
                            </div>
                        )}
                        {totalLoanAmount !== '' && (
                            <div>
                                <h3 style={{ paddingTop: "50%", fontSize: "18px", color: "gray", textAlign:"center" }}>Total Loan Amount</h3>
                                <h1 style={{
                                    fontSize: "30px",
                                    fontWeight: "600",
                                }}><span style={{ fontSize: "20px", fontWeight: "500" }}>BDT</span> {formatNumberWithCommas(totalLoanAmount)}</h1>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MortgageCalculator;
