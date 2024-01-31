import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Row, Col, Card, CardBody } from 'reactstrap';
import {
    FacebookIcon,
    TelegramIcon,
    EmailIcon,
    TwitterIcon,
    WhatsappIcon,
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    EmailShareButton,
    WhatsappShareButton,
} from 'react-share';
import Propertyinfo from './propertyinfo';
import MortgageCalculator from './Mortgage';
import { Link } from 'react-router-dom';

class PropertyDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            property: null,
            loading: true,
            error: null,
            showSharePopup: false,
            showModal: false,
            showCard: false,
        };
        this.toggleCard = this.toggleCard.bind(this);
    }

    componentDidMount() {
        const propertyId = this.props.match.params.id;

        axios.get(`http://127.0.0.1:8000/apiv1/user/Property/${propertyId}/`)
            .then(response => {
                this.setState({
                    property: response.data,
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

    toggleCard() {
        this.setState((prevState) => ({
            showCard: !prevState.showCard,
        }));
    }
    toggleSharePopup = () => {
        this.setState(prevState => ({
            showSharePopup: !prevState.showSharePopup,
        }));
    };
    render() {
        const { property, loading, error, showSharePopup } = this.state;


        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        const imageUrls = Array.from({ length: 6 }, (_, i) => property[`image${i + 1}`]);
        const propertyId = property ? property.Reference_number : null;

        const sliderSettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };
        const shareUrl = "www.localhost:3000//property/" + property.Reference_number;
        return (
            <div style={{ paddingTop: "10%", overflowx: "hidden", marginBottom: "10%" }}>
                <div className='container'>
                    <Row>
                        <Col md="9">
                            <Slider {...sliderSettings}>
                                {imageUrls.map((imageUrl, index) => (
                                    <div key={index}>
                                        <img src={imageUrl} alt={`image-${index + 1}`} style={{ width: '100%', maxHeight: '1000px', objectFit: 'cover', borderRadius: "8px" }} />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col md="3">
                            <Row style={{ marginTop: "5%" }}>
                                <div style={{ paddingBottom: "5%" }}>
                                    <img src={property.image7} style={{ width: '100%', maxHeight: '240px', objectFit: 'cover', borderRadius: "8px" }} />
                                </div>
                                <div style={{ paddingBottom: "5%" }}>
                                    <img src={property.image8} style={{ width: '100%', maxHeight: '240px', objectFit: 'cover', borderRadius: "8px" }} />
                                </div>
                                <div>
                                    <img src={property.image9} style={{ width: '100%', maxHeight: '240px', objectFit: 'cover', borderRadius: "8px" }} />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className='container' style={{ paddingTop: "5%" }}>
                    <Row>
                        <Col md="8">
                            <div>
                                <Row>
                                    <Col md="7">
                                        <h1 style={{
                                            fontSize: "30px",
                                            fontWeight: "600",
                                        }}><span style={{ fontSize: "20px", fontWeight: "500" }}>BDT</span> {property.rent_Amount}</h1>
                                    </Col>
                                    <Col md="3">
                                        <div>
                                            <Link to={`/book-viewing/${propertyId}`}>
                                                <button className='buttonbook'><i className="fa-regular fa-calendar-days"></i> Book Viewing </button>
                                            </Link>

                                        </div><br />
                                    </Col>
                                    <Col md="2">
                                        <div>
                                            {/* Modify the button to toggle the share popup */}
                                            <button className='buttonbook' onClick={this.toggleSharePopup}><i className="fa-regular fa-share-from-square"></i> Share </button>
                                        </div>
                                    </Col>
                                </Row>
                                {showSharePopup && (
                                    <div className="share-popup">
                                        <FacebookShareButton url={shareUrl} style={{ padding: "10px" }}>
                                            <FacebookIcon size={40} round={true} />
                                        </FacebookShareButton>

                                        <TwitterShareButton url={shareUrl} style={{ padding: "10px" }}>
                                            <TwitterIcon size={40} round={true} />
                                        </TwitterShareButton>

                                        <TelegramShareButton url={shareUrl} style={{ padding: "10px" }}>
                                            <TelegramIcon size={40} round={true} />
                                        </TelegramShareButton>

                                        <WhatsappShareButton url={shareUrl} style={{ padding: "10px" }}>
                                            <WhatsappIcon size={40} round={true} />
                                        </WhatsappShareButton>

                                        <EmailShareButton url={shareUrl} style={{ padding: "10px" }}>
                                            <EmailIcon size={40} round={true} />
                                        </EmailShareButton>

                                    </div>
                                )}
                                <div style={{ paddingTop: "5%" }}>
                                    <p style={{ fontSize: "20px", fontWeight: "600" }}>{property.property_Address}</p>
                                    <Row>
                                        <Col md="2">
                                            <span><i className="fa-solid fa-bed"></i> {property.Beds} Beds</span>
                                        </Col>
                                        <Col md="2">
                                            <span> <i className="fa-solid fa-bath" style={{ paddingLeft: "5px" }}></i> {property.Baths} Baths</span>
                                        </Col>
                                        <Col md="2">
                                            <span style={{ fontSize: "15px", fontWeight: "400" }}><i class="fa-solid fa-border-none" style={{ fontSize: "18px" }}></i> {property.property_Area}</span>
                                        </Col>
                                    </Row>
                                    <div style={{ marginTop: "3%" }}>
                                        <p style={{ fontSize: "20px", fontWeight: "500" }}>{property.property_title}</p>
                                        <p style={{ fontSize: "15px", fontWeight: "400" }}>{property.About_Property}</p>
                                    </div>
                                    <div style={{ paddingTop: "5%" }}>
                                        <h3>Property Information</h3>
                                        <Row style={{ paddingTop: "5%" }}>
                                            <Col md="6">
                                                <p style={{ fontSize: "19px" }}>Type <span style={{ paddingLeft: "38%", fontSize: "17px", fontWeight: "500" }}>{property.type}</span></p>
                                                <hr /><br />
                                                <p style={{ fontSize: "19px" }}>Purpose <span style={{ paddingLeft: "30%", fontSize: "17px", fontWeight: "500" }}>{property.Purpose}</span></p>
                                                <hr /><br />
                                                <p style={{ fontSize: "19px" }}>Reference no. <span style={{ paddingLeft: "18%", fontSize: "17px", fontWeight: "500" }}>{property.Reference_number}</span></p>
                                                <hr /><br />
                                            </Col>
                                            <Col md="6">
                                                <p style={{ fontSize: "19px" }}>Completion <span style={{ paddingLeft: "38%", fontSize: "17px", fontWeight: "500" }}>{property.Completion}</span></p>
                                                <hr /><br />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div style={{ paddingTop: "5%" }}>
                                        <h3>Floor Plans</h3>
                                        <div style={{ paddingTop: "5%", textAlign: "center" }}>
                                            <img src={property.Floor_Plans}  width={"500px"}/>
                                        </div>

                                    </div>
                                </div>
                                <div style={{ marginTop: "10%" }}>
                                    <h3>Mortgage</h3>
                                    <p>Calculate and view the monthly mortgage on this apartment</p>
                                    <MortgageCalculator totalPrice={property.rent_Amount} />
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <Card className='propertyemail'>
                                <CardBody className='container'>
                                    <div style={{ textAlign: "center" }}>
                                        <p style={{ color: "white" }}>Manage by</p>
                                        <img src='/assets/images/logo.png' height={"50px"} /><br />
                                        <p style={{ color: "white" }}>ghorbari.com</p>
                                    </div>
                                    <Row style={{ marginTop: "5%" }}>
                                        <Col md="6" style={{ marginBottom: "5%", textAlign: "center" }}>
                                            <button className="button30" style={{ fontSize: "15px", fontWeight: "400" }} onClick={this.toggleCard}><i class="fa-regular fa-envelope"></i> Email</button>
                                            {this.state.showCard && (
                                                <div className="requestcard-overlay">
                                                    <div className="requestcard" style={{ marginTop: '8%' }}>
                                                        <div className="close-icon" onClick={this.toggleCard}>
                                                            X
                                                        </div>
                                                        <div className="">
                                                            <Propertyinfo propertyId={property.Reference_number} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Col>
                                        <Col md="6" style={{ textAlign: "center" }}>
                                            <a href="tel:01709882474" className="callnow"><button className="button30" style={{ fontSize: "15px", fontWeight: "400" }}> <i class="fa-solid fa-phone"></i> Call</button></a>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div >
        );
    }
}
export default PropertyDetails;
