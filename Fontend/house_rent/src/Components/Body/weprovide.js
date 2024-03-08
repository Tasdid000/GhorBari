import React from 'react';
import './weprovide.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const WeProvide = () => {
    return (
        <div className='container'>
            <div className='category-menu-content row'>
                <div className='item col-12 col-sm-6 col-md-3 col-lg-3'>
                    <p><i className="fa-solid fa-people-roof" style={{ fontSize: "35px", color: "#6053fc", fontWeight: "600" }}></i></p>
                    <p style={{ fontSize: "20px", fontWeight: "600" }}>Family House</p>
                </div>
                <div className='item col-12 col-sm-6 col-md-3 col-lg-3'>
                    <p><i className="fa-regular fa-building" style={{ fontSize: "35px", color: "#6053fc", fontWeight: "600" }}></i></p>
                    <p style={{ fontSize: "20px", fontWeight: "600" }}>Apartment</p>
                </div>
                <div className='item col-12 col-sm-6 col-md-3 col-lg-3'>
                    <img src='/assets/images/office-building.png' width={"30%"} height={"30%"} /><br /><br />
                    <p style={{ fontSize: "20px", fontWeight: "600" }}>Office</p>
                </div>
                <div className='item col-12 col-sm-6 col-md-3 col-lg-3'>
                    <img src='/assets/images/address.png' width={"30%"} height={"30%"} /><br /><br />
                    <p style={{ fontSize: "20px", fontWeight: "600" }}>Land</p>
                </div>
                <div className='item col-12 col-sm-6 col-md-3 col-lg-3'>
                    <p><i class="fa-solid fa-user" style={{ fontSize: "35px", color: "#6053fc" }}></i></p>
                    <p style={{ fontSize: "20px", fontWeight: "600" }}>Sublet</p>
                </div>
            </div>
        </div>

    );
};

export default WeProvide;
