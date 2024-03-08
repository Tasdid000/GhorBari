import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardText, CardHeader, CardImg } from 'reactstrap';
import axios from 'axios';

const BlogDetails = (props) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Extract the blogId from the URL parameters
        const blogId = props.match.params.id; // Assuming the parameter name is 'id', adjust accordingly

        // Fetch blog details from the API using the blogId
        axios.get(`http://127.0.0.1:8000/apiv1/user/Post/${blogId}/`)
            .then(response => {
                setBlog(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching blog details:', error);
                setError('Error fetching blog details. Please try again later.');
                setLoading(false);
            });
    }, [props.match.params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ paddingTop: "10%" }}>
            <div style={{ marginTop: "10px", width: "100%" }}>
                <div style={{ textAlign: "left", paddingLeft: "15%", paddingRight: "15%" }}>
                    <h1 style={{
                        border: "none", fontSize: "36px", fontWeight: "600", textAlign: "left", color: "#0668E1"
                    }}>
                        {blog.title}
                    </h1>
                    <p>
                        <p>
                            <i class="fa-regular fa-calendar-days" style={{ color: "#6053fc" }}></i>
                            <span> {blog.TimeStamp}</span>
                        </p>
                    </p> <br /><br />
                    <img className='container'
                        src={blog.image}
                        alt={blog.title}
                        style={{ height: "300px" }}
                    />
                    <p className='container' style={{ marginTop: "10%", fontSize: "17px", lineHeight: "30px" }}>
                        {blog.content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
