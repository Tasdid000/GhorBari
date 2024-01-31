import React, { Component } from 'react';
import { ModalBody, Modal } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchbank } from '../../../../../redux/actionCreators';
import "./style.css"
import AllBanklist from './AllBankList';

class AllBank extends Component {
    render() {
        return (
            <div style={{ overflow: "hidden", marginTop:"10%" }}>
                <AllBanklist/>
            </div>
        );
    }

}

export default AllBank;