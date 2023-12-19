import React from 'react';
import { Card, CardBody, CardHeader, CardImg, CardText, Row, Col } from 'reactstrap';



const PropertyList = props => {
    return (
        <div className='container mx-6'>
            <Row>
                <Col md="4">
                    <Card style={{
                        elevation: "10px", marginTop: "5%", boxSizing: "border-box", borderRadius: "25px", fontFamily: "Open Sans,sans-serif",
                        boxShadow: "0 0 10px 5px rgba(57,125,192,0.09)", border: "none", marginBottom: "5px", height:""
                    }}>
                        <CardBody>
                            <Row>
                                <CardImg style={{height:""}}
                                    src={props.Property.image}
                                    alt={props.Property.rent_Amount}
                                />
                                <CardHeader
                                    onClick={props.PropertySelect} style={{
                                        border: "none", backgroundColor: "white", fontSize: "25px", textAlign: "", color: "#0668E1", cursor: "pointer"
                                    }}>
                                    {props.Property.rent_Amount}
                                </CardHeader>
                                <CardText>
                                    <CardText style={{ fontSize: "14px" }}>
                                        <p>
                                            <span style={{ marginRight: "10px" }}>
                                                {props.Property.type} |
                                            </span>
                                            <span>
                                                Area: {props.Property.property_Area}
                                            </span>
                                        </p>
                                    </CardText>
                                </CardText>
                                <CardText style={{fontSize: "15px" }}>
                                    {props.Property.property_Address}
                                </CardText>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

    );
}

export default PropertyList;