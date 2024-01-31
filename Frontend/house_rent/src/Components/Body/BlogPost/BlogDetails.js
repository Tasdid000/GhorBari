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
        <div style={{paddingTop:"10%"}}>
            <Card style={{ marginTop: "10px", width: "100%" }}>
                <CardBody style={{ textAlign: "left", paddingLeft: "15%", paddingRight: "15%" }}>
                    <CardHeader style={{
                        border: "none", backgroundColor: "white", fontSize: "36px",
                        fontWeight: "600", textAlign: "left", color: "#0668E1"
                    }}>
                        {blog.title}
                    </CardHeader>
                    <CardText className='container'>
                        <p>
                            <a href='/about'>
                                <span style={{ paddingRight: "3%", color: "black" }}>{blog.athour}</span>
                            </a>
                            {blog.TimeStamp}
                        </p>
                    </CardText> <br /><br />
                    <CardImg className='container'
                        src={blog.image}
                        alt={blog.title}
                        style={{ height: "300px" }}
                    />
                    <CardText className='container' style={{ marginTop: "10%", fontSize: "17px", lineHeight: "30px" }}>
                        {blog.content}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default BlogDetails;




// import React from 'react';
// import { Card, CardBody, CardText, CardHeader, CardImg } from 'reactstrap';
// const BlogDetails = props => {
//     return (
//         <div>
//             <Card  style={{ marginTop: "10px",width:"1315px"}}>
//                 <CardBody style={{ textAlign: "left", paddingLeft:"15%", paddingRight:"15%" }}>
//                     <CardHeader style={{
//                         border: "none", backgroundColor: "white", fontSize: "36px",
//                         fontWeight: "600", textAlign: "left", color:"#0668E1"
//                     }}>
//                         {props.Blog.title}
//                     </CardHeader>
//                     <CardText className='container'>
//                         <p>
//                             <a href='/about'>
//                                 <span style={{ paddingRight: "3%", color: "black" }}>{props.Blog.athour}</span>
//                             </a>
//                             {props.Blog.TimeStamp}</p>
//                     </CardText> <br/><br/>
//                     <CardImg className='container'
//                         src={props.Blog.image}
//                         alt={props.Blog.title}
//                         style={{ height: "300px"}}
//                     />
//                     <CardText className='container' style={{ marginTop: "10%", fontSize: "17px", lineHeight:"30px" }}>
//                         {props.Blog.content}
//                     </CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// }

// export default BlogDetails;