import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, CardImg, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Bloglist = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch blog data from the API
        axios.get('http://127.0.0.1:8000/apiv1/user/Post/')
            .then(response => {
                setBlogs(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching blog data:', error);
                setError('Error fetching blog data. Please try again later.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='container mx-6' style={{ msOverflowX: "hidden", marginTop: "10%" }}>
            <Row>
                {blogs.map(blog => (
                    <Col md="9" key={blog.id}>
                        <Card style={{ border: "none" }}>
                            <CardBody>
                                <Row>
                                    <Col md="5">
                                        <CardImg
                                            src={blog.image}
                                            alt={blog.title}
                                        />
                                    </Col>
                                    <Col md="7">
                                        <CardHeader
                                            tag={Link}
                                            to={`/blog/${blog.id}`} // Assuming each blog has an 'id' property
                                            style={{
                                                border: "none",
                                                backgroundColor: "white",
                                                fontSize: "25px",
                                                textAlign: "left",
                                                color: "#0668E1",
                                                cursor: "pointer",
                                                padding: "0%"
                                            }}
                                        >
                                            {blog.title}
                                        </CardHeader>
                                        <CardText style={{ marginTop: "30px", fontSize: "15px", backgroundColor: "#6053fc", width: "55px", padding: "2px 6px 2px", borderRadius: "10px", color: "white" }}>
                                            {blog.category}
                                        </CardText>
                                        <CardText style={{ marginTop: "30px", fontSize: "15px" }}>
                                            {blog.desc}...
                                        </CardText>
                                        <CardText>
                                            <i class="fa-regular fa-calendar-days" style={{ color: "#6053fc" }}></i>
                                            <span> {blog.TimeStamp}</span>
                                        </CardText>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <hr />
                    </Col>
                ))}
                {/* <Col md="3">
                    <Row>
                        <Col style={{ textAlign: "center" }}>
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
                </Col> */}
            </Row>
        </div>
    );
}

export default Bloglist;
