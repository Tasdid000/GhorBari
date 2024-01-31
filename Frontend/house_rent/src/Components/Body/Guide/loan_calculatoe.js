import React, { Component } from "react";
import LoanCalculator from "./calculator";
import './style.css'
class loan_calculator extends Component {
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
                <div className="container" style={{marginTop:"10%"}}>
                    <h1>Loan Calculator</h1><br />
                    <LoanCalculator />
                </div>
                <div className="container">
                    <h1 style={{ textAlign: "center", marginTop: "5ch" }}>
                        Applying For Home Loan in Bangladesh
                    </h1>
                    <div className="container shadow p-5" style={{ marginTop: "4ch", borderRadius: "6px" }}>
                        <h2 style={{ marginTop: "4ch" }}>
                            What Is a Home Loan?
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            A home loan is financial credit provided by a bank or financial institution specifically for purchasing property. It is repaid in monthly installments, including both principal and interest, until the borrowed amount is fully paid off.
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            Different Types of Home Loans
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            Primarily, fixed-interest loans are common in Bangladesh with monthly repayments based on a reducing balance. Although adjustable-rate mortgages might become available as the market evolves.
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            How to Apply for a Home Loan
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            To apply, visit your local bank or contact the customer service line to inquire about the home loan department. Applications are subject to approval at the discretion of the bank. Qualified mortgage advisors can assist with the application process.
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            Documents Required for Home Loan Application
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            Essential documents include the original property title deed in your name, property insurance covering specific risks (fire, earthquakes, flood, cyclones), and the Irrevocable General Power of Attorney (IGPA).
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            Joint Application for Home Loan
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            Yes, joint applications, especially for married couples, are possible. A marriage certificate might be required as evidence for the joint application.
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            Loan Amount You Can Borrow
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            Typically, borrowers can obtain up to 70% of the property valuation, inclusive of registration costs.
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            Home Loan EMI and Calculation
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            EMI (Equated Monthly Installments) is the amount paid periodically until the loan is fully repaid. Online home loan calculators can help determine the EMI based on the loan amount, tenure, and interest rate.
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            Monthly EMI Calculation
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            Monthly EMI is calculated by dividing the sum of the principal and interest by the number of months within the chosen loan tenure.
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            Where to Get Home Loans
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            Home loans are available from various local and international banks in Bangladesh, including HSBC, DBH, BRAC, IFIC, DBBL, Bank One, and potentially from the Bangladesh House Building Finance Corporation.
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            Home Loan Repayment Procedure
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            Repayments are made monthly via automatic debits from your personal account. Loan tenure typically ranges from 5 to 25 years.
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            Maximum Repayment Amount During Loan Tenure
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            Usually, there is no maximum repayment limit. It's advisable to confirm this information with a bank representative.
                        </p>
                        <h2 style={{ marginTop: "4ch" }}>
                            Early Repayment of Home Loan
                        </h2>
                        <p style={{ marginTop: "2ch", fontSize: "20px" }}>
                            Most banks offer partial or early settlement facilities, allowing borrowers to pay off the loan quicker than the scheduled tenure.

                            Always consult with a bank representative or financial advisor for personalized and detailed information regarding home loans in Bangladesh as terms and conditions can vary between institutions.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}
export default loan_calculator;