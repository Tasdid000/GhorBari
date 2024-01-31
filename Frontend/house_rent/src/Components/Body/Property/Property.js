// import React, { Component } from 'react';
// import { Card, CardBody, CardHeader, CardText, Row, Col } from 'reactstrap';
// import Propertyinfo from './propertyinfo';

// class PropertyList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentImageIndex: 0,
//       showCard: false,
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState((prevState) => ({ currentImageIndex: (prevState.currentImageIndex % 9) + 1 }));
//     }, 3000); // Change interval as needed
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   toggleCard = () => {
//     this.setState((prevState) => ({ showCard: !prevState.showCard }));
//   };
//   handlePropertyinfoSubmit = (propertyId, formData) => {
//     // Prepare the request body
//     const requestBody = {
//       property_id: propertyId,
//       full_name: formData.name,
//       email: formData.Email,
//       phone: formData.phone_Number,
//       Message: formData.Message,
//     };

//     // Make a POST request to the API endpoint
//     fetch('http://127.0.0.1:8000/apiv1/user/propertyinfo/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestBody),
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Handle the API response if needed
//         console.log('API Response:', data);
//       })
//       .catch(error => {
//         // Handle errors
//         console.error('Error:', error);
//       });

//     // Close the Propertyinfo popup
//     this.toggleCard();
//   };

//   render() {
//     const { currentImageIndex, showCard } = this.state;
//     const { Property, PropertySelect } = this.props;
//     const imageUrl = Property[`image${currentImageIndex}`];

//     return (
//       <div className="container mx-6" style={{ paddingBottom: "10%" }}>
//         <Row>
//           <Col md="9">
//             <Card
//               style={{
//                 elevation: "10px",
//                 marginTop: "5%",
//                 boxSizing: "border-box",
//                 borderRadius: "25px",
//                 fontFamily: "Open Sans, sans-serif",
//                 boxShadow: "0 0 10px 5px rgba(57,125,192,0.09)",
//                 border: "none",
//                 marginBottom: "5px",
//               }}
//             >
//               <CardBody className="container">
//                 <Row>
//                   <Col md="6">
//                     <img
//                       src={imageUrl}
//                       alt={`image${currentImageIndex}`}
//                       style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                     />
//                   </Col>
//                   <Col md="6">
//                     <CardHeader
//                       onClick={PropertySelect}
//                       style={{
//                         border: "none",
//                         backgroundColor: "white",
//                         fontSize: "25px",
//                         textAlign: "",
//                         cursor: "pointer",
//                         fontWeight: "600"
//                       }}
//                     >
//                       <p><span style={{ fontSize: "20px", fontWeight: "500" }}>BDT</span> {Property.rent_Amount}</p>
//                     </CardHeader>
//                     <CardText style={{ fontSize: "14px" }}>
//                       <Row>
//                         <Col md="9">
//                           <span style={{ marginRight: "10px" }}>
//                             <span style={{ fontSize: "17px", fontWeight: "500" }}>{Property.type}</span>    |
//                           </span>
//                           <span style={{ fontSize: "17px", fontWeight: "500", paddingRight: "5px" }}>
//                             Area: <span style={{ fontSize: "15px", fontWeight: "400" }}>{Property.property_Area}</span>
//                           </span>
//                           {Property.type === "Apartment" && (
//                             <span>
//                               |  <i className="fa-solid fa-bed"></i> {Property.Beds}
//                               <i className="fa-solid fa-bath" style={{ paddingLeft: "5px" }}></i> {Property.Baths}
//                             </span>
//                           )}
//                         </Col>
//                       </Row>
//                     </CardText>
//                     <CardText style={{ fontSize: "17px" }}>
//                       <i className="fa-solid fa-location-dot"></i> {Property.property_Address}
//                     </CardText>
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col md="6" style={{ marginBottom: "5%" }}>
//                         <button className="button30" onClick={this.toggleCard}>Email</button>
//                         {showCard && (
//                           <div className="card-overlay" style={{ paddingTop: "10%" }}>
//                             <div className="card">
//                               <div className="close-icon" onClick={this.toggleCard}>X</div>
//                               <Propertyinfo
//                                 propertyId={Property.id}
//                                 onClose={this.toggleCard}
//                                 onSubmit={this.handlePropertyinfoSubmit}
//                               />
//                             </div>
//                           </div>
//                         )}
//                       </Col>
//                       <Col md="6">
//                         <a href="tel:01709882474" className="button30"><span className="callnow">Call</span></a>
//                       </Col>
//                     </Row>
//                   </Col>
//                 </Row>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col md="3"></Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default PropertyList;


// // import React, { Component } from 'react';
// // import { ModalBody, Modal } from 'reactstrap';
// // import { connect } from 'react-redux';
// // import { fetchProperty } from '../../../redux/actionCreators';
// // import PropertyDetails from './PropertyDetails';
// // import PropertyList from './PropertyList';
// // import "./style.css"


// // const mapStateToProps = state => {
// //     return {
// //         Property: state.Property,

// //     }
// // }
// // const mapDispatchToProps = dispatch => {
// //     return {
// //         fetchProperty: () => dispatch(fetchProperty()),
// //     }
// // }

// // class Property extends Component {
// //     state = {
// //         selectedProperty: null,
// //         modalOpen: false
// //     }

// //     onPropertySelect = Property => {
// //         this.setState({
// //             selectedProperty: Property,
// //             modalOpen: !this.state.modalOpen

// //         });
// //     }
// //     toggleModal = () => {
// //         this.setState({
// //             modalOpen: !this.state.modalOpen
// //         })
// //     }


// //     componentDidMount() {
// //         this.props.fetchProperty();

// //     }

// //     render() {

// //         if (this.props.Property.isLoading) {
// //             return (
// //                 <div>

// //                 </div>
// //             );
// //         }
// //         else {
// //             const Property = this.props.Property.Property.map(item => {
// //                 return (
// //                     <PropertyList
// //                         Property={item}
// //                         key={item.id}
// //                         PropertySelect={() => this.onPropertySelect(item)}
// //                     />
// //                 );
// //             })

// //             let PropertyDetail = null;

// //             if (this.state.selectedProperty != null) {
// //                 PropertyDetail = <PropertyDetails
// //                     Property={this.state.selectedProperty}
// //                 />
// //             }

// //             return (
// //                 <div style={{ overflow: "hidden" }}>
// //                     <div className="row">
// //                         <div style={{ marginTop: "10%" }}>
// //                             {Property}
// //                         </div>
// //                         <Modal isOpen={this.state.modalOpen} style={{ border: "none", marginRight: "100%" }}>
// //                             <ModalBody>
// //                                 {PropertyDetail}<br />
// //                                 <button onClick={this.toggleModal} class="button24" role="button">Back</button>
// //                             </ModalBody>
// //                         </Modal>
// //                     </div>
// //                 </div>
// //             );
// //         }

// //     }
// // }

// // export default connect(mapStateToProps, mapDispatchToProps)(Property);