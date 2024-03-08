import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardText, Row, Col, CardImg } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Propertyinfo from './propertyinfo';
class PropertyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      property: [],
      loading: true,
      error: null,
      currentImageIndex: 0,
      showModal: false,
      showCard: false,
    };
    this.toggleCard = this.toggleCard.bind(this);
  }

  componentDidMount() {
    // Fetch property data from the API
    axios.get('http://127.0.0.1:8000/apiv1/user/Property/')
      .then(response => {
        this.setState({
          property: response.data,
          userId: response.data.userId,
          loading: false,
        });
      })
      .catch(error => {
        console.error('Error fetching property data:', error);
        this.setState({
          error: 'Error fetching property data. Please try again later.',
          loading: false,
        });
      });
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ currentImageIndex: (prevState.currentImageIndex + 1) % 9 }));
    }, 3000);
  }

  componentWillUnmount() {
    // Cleanup any async tasks if needed
  }
  toggleCard(referenceNumber) {
    this.setState((prevState) => ({
      showCard: !prevState.showCard,
      currentPropertyId: referenceNumber,
    }));
  }
  render() {
    const { property, loading, error, currentImageIndex } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    const { PropertySelect } = this.props;

    return (
      <div className="container mx-6" style={{ paddingBottom: "10%", paddingTop: "5%" }}>
        <Row>
          {property.map((property, index) => {
            const imageUrl = property[`image${(currentImageIndex + index) % 9 + 1}`];

            return (
              <Col md="9" key={property.Reference_number}>
                <Card
                  style={{
                    elevation: "10px",
                    marginTop: "5%",
                    boxSizing: "border-box",
                    borderRadius: "25px",
                    boxShadow: "0 0 10px 5px rgba(57,125,192,0.09)",
                    border: "none",
                    marginBottom: "5px",
                    height: "90%",
                    boxSizing: 'inherit',
                  }}
                >
                  <CardBody className="container" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <Row style={{ padding: "10px" }}>
                      <Col md="6" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
                        {/* You can remove the CardImg component */}
                      </Col>
                      <Col md="6" className=''>
                        <CardHeader
                          tag={Link}
                          to={`/property/${property.Reference_number}`}
                          style={{
                            border: "none",
                            backgroundColor: "white",
                            fontSize: "25px",
                            cursor: "pointer",
                            fontWeight: "600",
                            color: "#6053fc",
                          }}
                        ><span style={{ fontSize: "20px", fontWeight: "500" }}>BDT</span> {property.rent_Amount}
                        </CardHeader>
                        <CardText style={{ fontSize: "14px" }}>
                          <Row>
                            <Col md="10">
                              <span style={{ marginRight: "10px" }}>
                                <span style={{ fontSize: "17px", fontWeight: "500" }}>{property.type}</span>    |
                              </span>
                              <span style={{ fontSize: "17px", fontWeight: "500", paddingRight: "5px" }}>
                                Area: <span style={{ fontSize: "15px", fontWeight: "400" }}>{property.property_Area}</span>
                              </span>
                              {property.type === "Apartment" && (
                                <span>
                                  |  <i className="fa-solid fa-bed"></i> {property.Beds}
                                  <i className="fa-solid fa-bath" style={{ paddingLeft: "5px" }}></i> {property.Baths}
                                </span>
                              )}
                            </Col>
                          </Row>
                        </CardText>
                        <CardText style={{ color: "#6053fc", fontSize: "15px" }}>
                          {property.property_title}
                        </CardText>
                        <CardText style={{ fontSize: "17px" }}>
                          <i className="fa-solid fa-location-dot" style={{ color: "#6053fc" }}></i> {property.property_Address}
                        </CardText>
                        <Row style={{ marginTop: "15%" }}>
                          <Col md="6" style={{ marginBottom: "5%" }}>
                            <button className="button30" onClick={() => this.toggleCard(property.Reference_number)}>Email</button>
                            {this.state.showCard && this.state.currentPropertyId === property.Reference_number && (
                              <div className="card-overlay">
                                <div className="card" style={{ marginTop: '8%' }}>
                                  <div className="close-icon" onClick={this.toggleCard}>
                                    X
                                  </div>
                                  <Propertyinfo propertyId={property.Reference_number} userId={property.userId}/>
                                </div>
                              </div>
                            )}
                          </Col>
                          <Col md="6">
                            <a href={`tel:${property.userphone_Number}`} className="button30"><span className="callnow">Call</span></a>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
          <Col md="3"></Col>
        </Row>
      </div>
    );
  }
}

export default PropertyList;
