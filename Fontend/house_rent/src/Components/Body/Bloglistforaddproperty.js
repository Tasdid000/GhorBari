import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, CardImg, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ClientExperiences.css'

const Bloglistforaddproperty = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch blog data from the API
        axios.get('http://127.0.0.1:8000/apiv1/user/Post/')
            .then(response => {
                // Shuffle the blogs array
                const shuffledBlogs = response.data.sort(() => 0.5 - Math.random());
                // Get the first 3 blogs
                const selectedBlogs = shuffledBlogs.slice(0, 3);
                setBlogs(selectedBlogs);
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
                    <Col md="4" key={blog.id}>
                        <Card style={{ border: "none" }} className='Bloglistforaddpropertycard'>
                            <CardBody>
                                <CardImg
                                    src={blog.image}
                                    alt={blog.title}
                                />
                                <CardHeader
                                    tag={Link}
                                    to={`/blog/${blog.id}`}
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
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Bloglistforaddproperty;
