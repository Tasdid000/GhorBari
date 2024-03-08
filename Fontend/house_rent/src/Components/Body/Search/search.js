import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyList from '../Property/PropertyList';
import { Card, CardBody, CardHeader, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Propertyinfo from '../Property/propertyinfo';
import "./style.css";

const SearchComponent = () => {
  const [type, setType] = useState('');
  const [completion, setCompletion] = useState('');
  const [purpose, setPurpose] = useState('');
  const [Property_Address, setProperty_Address] = useState('');
  const [Beds, setBeds] = useState('');
  const [Baths, setBaths] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPropertyInfo, setShowPropertyInfo] = useState(false);
  const [currentPropertyId, setCurrentPropertyId] = useState(null);

  useEffect(() => {
    handleSearch();
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 9);
    }, 3000);
    return () => clearInterval(interval);
  }, [type, completion, purpose, Property_Address, Beds, Baths]);

  const handleSearch = () => {
    setLoading(true);
    setError(null);

    const propertyAddressLower = Property_Address.toLowerCase();

    if (!type && !completion && !purpose && !Property_Address && !Beds && !Baths) {
      setLoading(false);
      setSearchResults([]);
      return;
    }

    axios
      .get('http://127.0.0.1:8000/apiv1/user/properties-search/', {
        params: {
          type: type,
          Completion: completion,
          Purpose: purpose,
          property_Address: propertyAddressLower,
          Beds: Beds,
          Baths: Baths,
        },
      })
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.response);
        setError('An error occurred during the search. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const toggleCard = (propertyId) => {
    setShowPropertyInfo((prevShowPropertyInfo) => !prevShowPropertyInfo);
    setCurrentPropertyId(propertyId);
  };

  const closePopup = () => {
    setShowPropertyInfo(false);
    setCurrentPropertyId(null);
  };

  const resetSearchFields = () => {
    setType('');
    setCompletion('');
    setPurpose('');
    setProperty_Address('');
    setBeds('');
    setBaths('');
  };

  return (
    <div style={{ marginBottom: '10%' }}>
      <div className='search' style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '15px', border: "1px solid #6053fc" }}>
        <select id="propertyType" value={type} onChange={(e) => setType(e.target.value)} style={{ width: 'auto', padding: '10px', fontSize: '16px', backgroundColor: '#ffffff', border: '1px solid #ced4da', borderRadius: '4px' }}>
          <option value="">Type</option>
          <option value="Office">Office</option>
          <option value="Apartment">Apartment</option>
          <option value="Land">Land</option>
        </select>

        <input
          type="text"
          placeholder="Location"
          className='Property_Address'
          name='Property_Address'
          value={Property_Address}
          onChange={(e) => setProperty_Address(e.target.value)}
          style={{ width: '40%', padding: '10px', fontSize: '16px', backgroundColor: '#ffffff', border: '1px solid #ced4da', borderRadius: '4px' }}
        />

        <select id="completionStatus" value={completion} onChange={(e) => setCompletion(e.target.value)} style={{ width: 'auto', padding: '10px', fontSize: '16px', backgroundColor: '#ffffff', border: '1px solid #ced4da', borderRadius: '4px' }}>
          <option value="">Completion</option>
          <option value="Ready">Ready</option>
          <option value="Not Ready">Not Ready</option>
        </select>

        <select id="Purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} style={{ width: 'auto', padding: '10px', fontSize: '16px', backgroundColor: '#ffffff', border: '1px solid #ced4da', borderRadius: '4px' }}>
          <option value="">Purpose</option>
          <option value="For Rent">Rent</option>
          <option value="For Sale">Sale</option>
        </select>
        <select id="Beds" value={Beds} onChange={(e) => setBeds(e.target.value)} style={{ width: 'auto', padding: '10px', fontSize: '16px', backgroundColor: '#ffffff', border: '1px solid #ced4da', borderRadius: '4px' }}>
          <option value="">Beds</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select id="Baths" value={Baths} onChange={(e) => setBaths(e.target.value)} style={{ width: 'auto', padding: '10px', fontSize: '16px', backgroundColor: '#ffffff', border: '1px solid #ced4da', borderRadius: '4px' }}>
          <option value="">Baths</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button className="buttonuser" onClick={resetSearchFields}>
          Reset
        </button>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {error ? (
              <p style={{ color: 'red' }}>{error}</p>
            ) : (
              <div>
                {searchResults.length === 0 ? (
                  <PropertyList />
                ) : (
                  searchResults.map((result) => (
                    <div key={result.Reference_number} style={{ cursor: 'pointer' }}>
                      <Row>
                        <Col md="9" key={result.Reference_number}>
                          <Card
                            style={{
                              elevation: '10px',
                              marginTop: '5%',
                              boxSizing: 'border-box',
                              borderRadius: '25px',
                              boxShadow: '0 0 10px 5px rgba(57,125,192,0.09)',
                              border: 'none',
                              marginBottom: '5px',
                              height: '90%',
                              boxSizing: 'inherit',
                            }}
                          >
                            <CardBody
                              className="container"
                              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                            >
                              <Row style={{ padding: '10px' }}>
                                <Col
                                  md="6"
                                  style={{
                                    backgroundImage: `url(${result[`image${currentImageIndex + 1}`]})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '100%',
                                  }}
                                >
                                  {/* ... (rest of the image column) */}
                                </Col>
                                <Col md="6" className="">
                                  <CardHeader
                                    tag={Link}
                                    to={`/property/${result.Reference_number}`}
                                    style={{
                                      border: 'none',
                                      backgroundColor: 'white',
                                      fontSize: '25px',
                                      cursor: 'pointer',
                                      fontWeight: '600',
                                      color: '#6053fc',
                                    }}
                                  >
                                    <span style={{ fontSize: '20px', fontWeight: '500' }}>BDT</span> {result.rent_Amount}
                                  </CardHeader>
                                  <CardText style={{ fontSize: '14px' }}>
                                    <Row>
                                      <Col md="10">
                                        <span style={{ marginRight: '10px' }}>
                                          <span style={{ fontSize: '17px', fontWeight: '500' }}>{result.type}</span> |
                                        </span>
                                        <span style={{ fontSize: '17px', fontWeight: '500', paddingRight: '5px' }}>
                                          Area: <span style={{ fontSize: '15px', fontWeight: '400' }}>{result.property_Area}</span>
                                        </span>
                                        {result.type === 'Apartment' && (
                                          <span>
                                            | <i className="fa-solid fa-bed"></i> {result.Beds}
                                            <i className="fa-solid fa-bath" style={{ paddingLeft: '5px' }}></i> {result.Baths}
                                          </span>
                                        )}
                                      </Col>
                                    </Row>
                                  </CardText>
                                  <CardText style={{ color: '#6053fc', fontSize: '15px' }}>{result.property_title}</CardText>
                                  <CardText style={{ fontSize: '17px' }}>
                                    <i className="fa-solid fa-location-dot" style={{ color: '#6053fc' }}></i> {result.property_Address}
                                  </CardText>
                                  <Row style={{ marginTop: '15%' }}>
                                    <Col md="6" style={{ marginBottom: '5%' }}>
                                      <button className="button30" onClick={() => toggleCard(result.Reference_number)}>
                                        Email
                                      </button>
                                      {showPropertyInfo && currentPropertyId === result.Reference_number && (
                                        <div className="card-overlay" style={{ paddingTop: '10%' }}>
                                          <div className="card">
                                            <div className="close-icon" onClick={closePopup}>
                                              X
                                            </div>
                                            <Propertyinfo propertyId={result.Reference_number} userId={result.userId} />
                                          </div>
                                        </div>
                                      )}
                                    </Col>
                                    <Col md="6">
                                      <a href={`tel:${result.userphone_Number}`} className="button30">
                                        <span className="callnow">Call</span>
                                      </a>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col md="3"></Col>
                      </Row>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
