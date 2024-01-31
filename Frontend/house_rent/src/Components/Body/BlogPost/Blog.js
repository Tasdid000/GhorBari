// import React, { Component } from 'react';
// import { ModalBody, Modal } from 'reactstrap';
// import { connect } from 'react-redux';
// import { fetchBlog } from '../../../redux/actionCreators';
// import BlogDetails from './BlogDetails';
// import Bloglist from './BlogList';
// import "./style.css"


// const mapStateToProps = state => {
//     return {
//         Blog: state.Blog,

//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchBlog: () => dispatch(fetchBlog()),
//     }
// }

// class Blog extends Component {
//     state = {
//         selectedBlog: null,
//         modalOpen: false
//     }

//     onBlogSelect = Blog => {
//         this.setState({
//             selectedBlog: Blog,
//             modalOpen: !this.state.modalOpen

//         });
//     }
//     toggleModal = () => {
//         this.setState({
//             modalOpen: !this.state.modalOpen
//         })
//     }


//     componentDidMount() {
//         this.props.fetchBlog();

//     }

//     render() {
//         document.title = "Blog";

//         if (this.props.Blog.isLoading) {
//             return (
//                 <div>

//                 </div>
//             );
//         }
//         else {
//             const Blog = this.props.Blog.Blog.map(item => {
//                 return (
//                     <Bloglist
//                         Blog={item}
//                         key={item.id}
//                         BlogSelect={() => this.onBlogSelect(item)}
//                     />
//                 );
//             })

//             let BlogDetail = null;

//             if (this.state.selectedBlog != null) {
//                 BlogDetail = <BlogDetails
//                     Blog={this.state.selectedBlog}
//                 />
//             }

//             return (
//                 <div style={{ overflow: "hidden" }}>                    
//                     <div className="row">
//                         <div>
//                             {Blog}
//                         </div>
//                         <Modal isOpen={this.state.modalOpen} style={{ border: "none", marginRight: "100%" }}>
//                             <ModalBody>
//                                 {BlogDetail}<br />
//                                 <button onClick={this.toggleModal} class="button24" role="button">Back</button>
//                             </ModalBody>
//                         </Modal>
//                     </div>
//                 </div>
//             );
//         }

//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Blog);