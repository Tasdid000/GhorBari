import React, { Component } from 'react';
import "./style.css"
import Blog from './Blog';
import Bloglist from './BlogList';

class BlogPage extends Component {
    render() {
        return (
            <div style={{ overflow: "hidden" }}>
                <div className='blogBackground'>
                    <h1 className='blogheader'>
                        Blog
                    </h1>
                    <p className='blogtext'>
                        Find Your Perfect Place. Where Comfort Feels Like Home
                    </p>
                </div>
                <div>
                    <Bloglist/>
                </div>
            </div>
        );
    }

}

export default BlogPage;