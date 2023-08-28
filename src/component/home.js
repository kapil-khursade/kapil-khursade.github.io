import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import "../css/home.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GmailIcon from "@mui/icons-material/Mail"

const Home = () => {

    const SocialLinks = () => {
        return (
            <div className="d-flex justify-content-center">
            <Stack direction="horizontal" gap={3} className="flex-wrap">
                <div className="p-2"><GmailIcon color="primary" fontSize="large" /></div>
                <div className="p-2"><GitHubIcon color="primary" fontSize="large" /></div>
                <div className="p-2"><LinkedInIcon color="primary" fontSize="large" /></div>
                <div className="p-2"><InstagramIcon color="primary" fontSize="large" /></div>
             </Stack>
             </div>
        )
    }
    return (
        <Container id="home" className="text-center">
            <Stack gap={3}>
                <div className="p-5 mt-5">
                        <Image src="https://i.postimg.cc/vZTK09pv/photome-2.jpg" 
                                roundedCircle
                                className="profile-image" />
                </div>
                <div className="p-1" ><h1 className="fw-bold white-text" >Kapil Khursade</h1></div>
                <div className="p-1"><p className="white-text">Hi I'm Full Stack Web Developer</p></div>
                <div className="p-1"><SocialLinks/></div>
            </Stack>
        </Container>
    );
}

export default Home;
