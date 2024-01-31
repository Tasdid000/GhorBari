import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RequestBook from './requestbook';
class BookViewing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            propertyDetails: null,
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const propertyId = match.params.id;

        axios.get(`http://127.0.0.1:8000/apiv1/user/Property/${propertyId}/`)
            .then(response => {
                this.setState({
                    propertyDetails: response.data,
                    loading: false,
                });
                
            })
            .catch(error => {
                console.error('Error fetching property details:', error);
                this.setState({
                    error: 'Error fetching property details. Please try again later.',
                    loading: false,
                });
            });
    }

    render() {
        const { propertyDetails, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }
        const imageUrls = Array.from({ length: 9 }, (_, i) => propertyDetails[`image${i + 1}`]);

        const sliderSettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };
        return (
            <div className='container' style={{ marginTop: "10%", marginBottom:"5%" }}>
                <div>
                    <Row>
                        <Col md="6">
                            {propertyDetails && (
                                <div>
                                    <h1 style={{ fontSize: "25px" }}>Apartments {propertyDetails.Purpose} in Sylhet </h1><br />
                                    <Slider {...sliderSettings}>
                                        {imageUrls.map((imageUrl, index) => (
                                            <div key={index}>
                                                <img src={imageUrl} alt={`image-${index + 1}`} style={{ width: '100%', maxHeight: '1000px', objectFit: 'cover', borderRadius: "8px" }} />
                                            </div>
                                        ))}
                                    </Slider><br />
                                    <h1 style={{
                                        fontSize: "30px",
                                        fontWeight: "600",
                                    }}><span style={{ fontSize: "20px", fontWeight: "500" }}>BDT</span> {propertyDetails.rent_Amount}</h1><br/>
                                    <p style={{ fontSize: "20px", fontWeight: "600" }}>{propertyDetails.property_Address}</p><br/>
                                    <Row>
                                        <Col md="3">
                                            <span><i className="fa-solid fa-bed"></i> {propertyDetails.Beds} Beds</span>
                                        </Col>
                                        <Col md="4">
                                            <span> <i className="fa-solid fa-bath" style={{ paddingLeft: "5px" }}></i> {propertyDetails.Baths} Baths</span>
                                        </Col>
                                        <Col md="4">
                                            <span style={{ fontSize: "15px", fontWeight: "400" }}><i class="fa-solid fa-border-none" style={{ fontSize: "18px" }}></i> {propertyDetails.property_Area}</span>
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </Col>
                        <Col md="5">
                            <RequestBook propertyId={propertyDetails.Reference_number}/>
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}

export default BookViewing;
