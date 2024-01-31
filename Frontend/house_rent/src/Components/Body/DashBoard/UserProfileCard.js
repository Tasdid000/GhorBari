import React, { useState } from 'react';
import { Card, CardBody, CardImg, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import "./dashboard.css"
const UserProfileCard = ({ userData }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleUploadImage = async () => {
        try {
            if (!selectedImage) {
                // Handle case where no image is selected
                return;
            }

            const formData = new FormData();
            formData.append('image', selectedImage);

            const response = await axios.put(
                `http://127.0.0.1:8000/apiv1/user/update_profile/${userData.data.id}/`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                }
            );

            // Handle success, show message, or update user data
            window.location.reload();
            console.log(response.data);
        } catch (error) {
            // Handle error
            console.error('Error uploading image:', error);
        }
    };

    return (
        <Card className='profileCard'>
            <CardBody style={{ padding: "0%" }}>
                <div className=''>
                    <CardImg src='/assets/images/profile banner.jpg' height={'150ch'} width={'100%'} style={{ borderTopRightRadius: "15px", borderTopLeftRadius: "15px" }} />
                    <Row>
                        <Col md="4">
                            <div style={{ textAlign: "center", marginTop: "-20%" }}>
                                <CardImg src={`http://127.0.0.1:8000${userData.data.image}`} alt='user image' className='profileiamge' />
                            </div>
                        </Col>
                        <Col md="4">
                        </Col>
                    </Row>
                </div>
                <div style={{ padding: "5% 3% 3%" }}>
                    <Row>
                        <Col md="3" style={{ textAlign: "center" }}>
                            <label className='buttonuser'>
                                Upload New
                                <input type="file" onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} />
                            </label>
                        </Col>
                        <Col md="2" style={{ textAlign: "" }}>
                            <Button type='button' className='buttonimagecard' onClick={handleUploadImage}>
                                Save
                            </Button>
                        </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
    );
};

export default UserProfileCard;
