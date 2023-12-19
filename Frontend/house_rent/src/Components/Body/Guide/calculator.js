import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './style.css'
const LoanCalculator = () => {
    const [propertyPrice, setPropertyPrice] = useState('');
    const [downPaymentPercentage, setDownPaymentPercentage] = useState('');
    const [loanPeriod, setLoanPeriod] = useState('');
    const [interestRate, setInterestRate] = useState(22);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [downPaymentValue, setDownPaymentValue] = useState('');

    const handlePropertyPriceChange = (e) => {
        setPropertyPrice(e.target.value);
        setDownPaymentValue('');
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
        // Check if Property Price and Down Payment Percentage are entered before calculating
        if (propertyPrice === '' || downPaymentPercentage === '') {
            alert('Please Enter Property Price and Down Payment Percentage First');
            return;
        }

        const principal = parseFloat(propertyPrice) - parseFloat(downPaymentValue || 0);
        const rate = parseFloat(interestRate) / 100 / 12;
        const term = parseFloat(loanPeriod) * 12;
        const x = Math.pow(1 + rate, term);
        const monthlyPaymentValue = Math.round((principal * x * rate) / (x - 1));
        setMonthlyPayment(monthlyPaymentValue);
    };

    return (
        <div className="loan-calculator">
            <Form className='container'>
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
                <FormGroup>
                    <FormLabel>Down Payment Value (BDT): {downPaymentValue} BDT</FormLabel>
                </FormGroup>
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
                    /><br/>
                    <span>Interest Rate: {interestRate}%</span>
                </FormGroup>
                <Button className='button31' onClick={calculateMonthlyPayment}>Calculate</Button>
            </Form>
            <div className='container' style={{marginTop:"5%"}}>
                <h3>Monthly Payment: {monthlyPayment} BDT</h3>
            </div>
        </div>
    );
};

export default LoanCalculator;
