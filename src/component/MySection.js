import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import "../css/home.css";
import SocialLinks from './subComponent/SocialLinks';

const MySection = () => {

    return (
        <Container id="my_section" className="text-center d-flex justify-content-center align-items-center vh-100">
            <Stack gap={3}>
                <div className="p-5 mt-5">
                        <Image src="https://i.ibb.co/yQS7d1F/kapil-passport-photo.jpg" 
                                roundedCircle
                                className="profile-image" />
                </div>
                <div className="p-1" ><h1 className="fw-bold white-text" >Kapil Khursade</h1></div>
                <div className="p-1"><p className="white-text">Hi I'm Ruby On Rails Developer</p></div>
                <div className="p-1"><SocialLinks/></div>
            </Stack>
        </Container>
    );
}

export default MySection;
