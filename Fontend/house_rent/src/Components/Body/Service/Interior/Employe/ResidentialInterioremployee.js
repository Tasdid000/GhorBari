import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardImg, CardText, Col, Row } from 'reactstrap';
import './style.css';

const ResidentialInteriorEmployee = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apiv1/user/Services/')
            .then(response => response.json())
            .then(data => {
                const commercialInteriorServices = data.filter(service => service.Services === 'Residential Interior');
                setServices(commercialInteriorServices);
            })
            .catch(error => {
                console.error('Error fetching Services:', error);
            });
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center", paddingTop: "10%" }}>Our Designers</h1>
            <div className='container' style={{ paddingTop: "5%" }}>
                <Row>
                    {services.map(service => (
                        <Col md="3" key={service.id}>
                            <Card className='employeecard'>
                                <CardBody style={{ textAlign: "center" }}>
                                    <CardImg src={service.image} className='circular--square' />
                                    <br /><br />
                                    <CardText className='employeecardtext'>
                                        <p style={{ fontSize: "20px", fontWeight: "500", color: "#6053fc" }}>{service.employee_Name}</p>
                                        <p>{service.experience} Years Experience</p>
                                        <p>{service.Services}</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div >
    );
};

export default ResidentialInteriorEmployee;