import React from 'react';
import { Card, CardBody, CardText, CardHeader, CardImg } from 'reactstrap';
const PropertyDetails = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px",width:"1315px",fontFamily: "Open Sans,sans-serif"}}>
                <CardBody style={{ textAlign: "left", paddingLeft:"15%", paddingRight:"15%" }}>
                    <CardHeader style={{
                        border: "none", backgroundColor: "white", fontSize: "36px",
                        fontWeight: "600", textAlign: "left", color:"#0668E1"
                    }}>
                        {props.Property.rent_Amount}
                    </CardHeader>
                    <CardText className='container'>
                        <p>
                            <a href='/about'>
                                <span style={{ paddingRight: "3%", color: "black" }}>{props.Property.type}</span>
                            </a>
                            {props.Property.property_Area}</p>
                    </CardText> <br/><br/>
                    <CardImg className='container'
                        src={props.Property.image}
                        alt={props.Property.type}
                        style={{ height: "300px"}}
                    />
                    <CardText className='container' style={{ marginTop: "10%", fontSize: "17px" }}>
                        {props.Property.property_Address}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default PropertyDetails;