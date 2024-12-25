import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import "../css/home.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GmailIcon from "@mui/icons-material/Mail"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const MySection = () => {

    const IconsComponent = ({Icon, link, name}) =>{
        return(
            <div className="p-2">
                <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip>
                        <strong>{name}</strong>.
                        </Tooltip>
                    }
                >
                    <a href={link} target="_blank" rel="noreferrer">
                        <Icon  color="primary" fontSize="large" />
                    </a>
                </OverlayTrigger>    
            </div>
        )
    }

    const SocialLinks = () => {

        const iconLinksConfigObject = [
            {Icon: GitHubIcon, link: "https://github.com/kapil-khursade", name: "Github"},
            {Icon: GmailIcon, link: "mailto: kapilkhursade.210@gmail.com", name: "Gmail"},
            {Icon: LinkedInIcon, link: "//www.linkedin.com/in/kapilkhursadefwd/", name: "LinkedIn"},
            {Icon: InstagramIcon, link: "https://www.instagram.com/kapilkkhursade/", name: "Instagram"},
        ]
        return (
            <div className="d-flex justify-content-center">
            <Stack direction="horizontal" gap={3} className="flex-wrap">
                 {iconLinksConfigObject.map((config) => {
                     return <IconsComponent Icon={config.Icon} link={config.link} name={config.name}/>
                 })}
            </Stack>
            </div>
        )
    }
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
