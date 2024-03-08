import React from 'react';
import './ClientExperiences.css'
import { Card, CardBody, CardText, Col, Row, Container, CardImg } from 'reactstrap';

const ClientExperiences = () => {
    const testimonials = [
        {
            id: 1,
            image: '/assets/images/clintimage.jpg',
            name: 'John Doe',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus nec nunc tincidunt fringilla. Nullam auctor, nunc id aliquam ultricies, nisl nisl aliquet urna, id tincidunt nunc nisl id nunc.',
        },
        {
            id: 2,
            image: '/assets/images/clintimage.jpg',
            name: 'Jane Smith',
            testimonial: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        },
        {
            id: 3,
            image: '/assets/images/clintimage.jpg',
            name: 'Mike Johnson',
            testimonial: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
        },
    ];

    return (
        <Container>
            <Row>
                {testimonials.map((testimonial) => (
                    <Col md="4" key={testimonial.id}>
                        <Card className="testimonial-card">
                            <CardBody>
                                <CardImg src={testimonial.image} className='testimonialcircular--square' />
                                <br /><br />
                                <CardText>
                                    <h3>{testimonial.name}</h3>
                                    <p className='testimonialicon'><i class="fa-solid fa-quote-left"></i></p>
                                    <p>{testimonial.testimonial}</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ClientExperiences;
