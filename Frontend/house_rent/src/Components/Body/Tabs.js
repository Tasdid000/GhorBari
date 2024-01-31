import React, { useState } from 'react';
import './TabComponent.css'; // Import your CSS file
import { Row } from 'react-bootstrap';
import { Col } from 'reactstrap';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="tab-container">
            <div className="tab-buttons">
                <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
                    For Sale
                </button>
                <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
                    To Rent
                </button>
            </div>
            <div className='container'>
                <div className="tab-content">
                    {activeTab === 1 &&
                        <Row className='container mx-4'>
                            <Col md="6">
                                <h3 style={{ textAlign: "", fontSize: "25px" }}>Sylhet Apartments</h3>
                                <p className='tab-text'>
                                    Housing State
                                </p>
                                <p className='tab-text'>
                                    Boro Bazar
                                </p>
                                <p className='tab-text'>
                                    Supply
                                </p>
                                <p className='tab-text'>
                                    Jalalabad Housing
                                </p>
                            </Col>
                            <Col md="6">
                                <h3 style={{ textAlign: "", fontSize: "25px" }}>Sylhet Popular locations</h3>
                                <p className='tab-text'>
                                    Housing State
                                </p>
                                <p className='tab-text'>
                                    Boro Bazar
                                </p>
                                <p className='tab-text'>
                                    Supply
                                </p>
                                <p className='tab-text'>
                                    Jalalabad Housing
                                </p>
                            </Col>
                        </Row>
                    }
                    {activeTab === 2 &&
                        <Row className='container mx-4'>
                            <Col md="6">
                                <h3 style={{ textAlign: "", fontSize: "25px" }}>Sylhet Apartments</h3>
                                <p className='tab-text'>
                                    Housing State
                                </p>
                                <p className='tab-text'>
                                    Boro Bazar
                                </p>
                                <p className='tab-text'>
                                    Supply
                                </p>
                                <p className='tab-text'>
                                    Jalalabad Housing
                                </p>
                            </Col>
                            <Col md="6">
                                <h3 style={{ textAlign: "", fontSize: "25px" }}>Sylhet Popular locations</h3>
                                <p className='tab-text'>
                                    Housing State
                                </p>
                                <p className='tab-text'>
                                    Boro Bazar
                                </p>
                                <p className='tab-text'>
                                    Supply
                                </p>
                                <p className='tab-text'>
                                    Jalalabad Housing
                                </p>
                            </Col>
                        </Row>
                    }
                </div>
            </div>

        </div>
    );
};

export default TabComponent;
