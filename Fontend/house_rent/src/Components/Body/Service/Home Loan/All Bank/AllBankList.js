import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardBody, CardImg, Row, Col, CardHeader, CardText } from 'reactstrap';
import './style.css';
// import LoanCalculator from '../../../Guide/calculator';
import Apply_for_bank from '../Apply for bank/apply_for_bank';

class BankDetailsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankDetails: [],
            showModal: false,
            showCard: false
        };
        this.toggleCard = this.toggleCard.bind(this);
    }

    toggleCard() {
        this.setState(prevState => ({
            showCard: !prevState.showCard
        }));
    }

    componentDidMount() {
        this.fetchBankDetails();
    }

    fetchBankDetails = () => {
        axios.get('http://127.0.0.1:8000/apiv1/user/bank_details/')
            .then(response => {
                this.setState({ bankDetails: response.data });
            })
            .catch(error => {
                console.error('Error fetching bank details:', error);
            });
    };

    render() {
        const { bankDetails } = this.state;

        return (
            <div className="container">
                <h2 style={{ margin: "5%", textAlign: "center" }}>Home Loan From Bank</h2>
                <div className="card-containers">
                    {bankDetails.map(bank => (
                        <Card className="cardallbank" key={bank.id}>
                            <CardBody>
                                <CardImg src={bank.bank_image} style={{ maxWidth: "100px" }} />
                                <CardHeader style={{ marginTop: "3%", backgroundColor: "white", border: "0", fontSize: "20px", fontWeight: "600" }}>{bank.bank_name}</CardHeader>
                                <table border="0">
                                    <tbody>
                                        <tr>
                                            <td className='td'>
                                                Max Loan Amount:
                                            </td>
                                            <td className='td'>
                                                {bank.Max_Loan_Amount}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='td'>
                                                Interest Rate:
                                            </td>
                                            <td className='td'>
                                                {bank.Interest_Rate}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='td'>
                                                Tenure:
                                            </td>
                                            <td className='td'>
                                                {bank.Tenure}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="button41" onClick={this.toggleCard}>Apply Now</button>
                                {this.state.showCard && (
                                    <div className="card-overlay" style={{ paddingTop: "10%" }}>
                                        <div className="card">
                                            <div className="close-icon" onClick={this.toggleCard}>X</div>
                                            <h1 style={{ fontSize: "25px", fontWeight: "500", textAlign: "center", marginTop: "10%" }}>Apply For Home Loan</h1>
                                            <div className='container'>
                                                <Apply_for_bank BankId={bank.id}/>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
}

export default BankDetailsList;