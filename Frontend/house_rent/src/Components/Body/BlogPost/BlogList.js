import React from 'react';
import { Card, CardBody, CardHeader, CardImg, CardText, Row, Col } from 'reactstrap';



const Bloglist = props => {
    return (
        <div className='container mx-6' style={{ msOverflowX: "hidden", marginTop: "10%" }}>
            <Row>
                <Col md="9">
                    <Card style={{ border: "none" }}>
                        <CardBody>
                            <Row>
                                <Col md="5">
                                    <CardImg
                                        src={props.Blog.image}
                                        alt={props.Blog.title}
                                    />
                                </Col>
                                <Col md="7">
                                    <CardText style={{ fontSize: "14px" }}>
                                        <p>
                                            {/* <span style={{ marginRight: "10px" }}>
                                                {props.Blog.category} --
                                            </span> */}
                                            {/* <span>
                                                {props.Blog.TimeStamp}
                                            </span> */}

                                        </p>
                                    </CardText>
                                    <CardHeader
                                        onClick={props.BlogSelect} style={{
                                            border: "none", backgroundColor: "white", fontSize: "25px", textAlign: "left", color: "#0668E1", cursor: "pointer", padding: "0%"
                                        }}>
                                        {props.Blog.title}
                                    </CardHeader>
                                    <CardText>
                                        <span>
                                            {props.Blog.TimeStamp}
                                        </span>
                                    </CardText>
                                    <CardText style={{ marginTop: "30px", fontSize: "15px" }}>
                                        {props.Blog.desc}...
                                    </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <hr />
                </Col>
                <Col md="3">
                    <Row>
                        <Col style={{textAlign:"center"}}>
                            <a href='https://www.facebook.com'>
                                <i class="fa-brands fa-facebook" style={{ fontSize: "35px", color: "#33579e", marginRight: "5%" }}></i>
                            </a>
                            <a href='https://www.twitter.com'>
                                <i class="fa-brands fa-square-x-twitter" style={{ fontSize: "35px", color: "#00aff3", marginRight: "5%" }}></i>
                            </a>
                            <a href='https://www.pinterest.com'>
                                <i class="fa-brands fa-pinterest" style={{ fontSize: "35px", color: "#ef3a2b", marginRight: "5%" }}></i>
                            </a>
                            <a href='https://www.youtube.com'>
                                <i class="fa-brands fa-youtube" style={{ fontSize: "35px", color: "#dd0017", marginRight: "5%" }}></i>
                            </a>
                            <a href='https://www.linkedin.com'>
                                <i class="fa-brands fa-linkedin" style={{ fontSize: "35px", color: "#00aff3" }}></i>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    );
}

export default Bloglist;