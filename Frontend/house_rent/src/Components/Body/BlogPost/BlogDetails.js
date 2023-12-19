import React from 'react';
import { Card, CardBody, CardText, CardHeader, CardImg } from 'reactstrap';
const BlogDetails = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px",width:"1315px",fontFamily: "Open Sans,sans-serif"}}>
                <CardBody style={{ textAlign: "left", paddingLeft:"15%", paddingRight:"15%" }}>
                    <CardHeader style={{
                        border: "none", backgroundColor: "white", fontSize: "36px",
                        fontWeight: "600", textAlign: "left", color:"#0668E1"
                    }}>
                        {props.Blog.title}
                    </CardHeader>
                    <CardText className='container'>
                        <p>
                            <a href='/about'>
                                <span style={{ paddingRight: "3%", color: "black" }}>{props.Blog.athour}</span>
                            </a>
                            {props.Blog.TimeStamp}</p>
                    </CardText> <br/><br/>
                    <CardImg className='container'
                        src={props.Blog.image}
                        alt={props.Blog.title}
                        style={{ height: "300px"}}
                    />
                    <CardText className='container' style={{ marginTop: "10%", fontSize: "17px" }}>
                        {props.Blog.content}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default BlogDetails;