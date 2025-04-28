import React from 'react';
import Stack from 'react-bootstrap/Stack';
import {GitHub, LinkedIn, Instagram, Email} from '@mui/icons-material';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const SocialLinks = () => {

    const IconsComponent = ({Icon, link, name}) =>{
        return(
            <div className="">
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
                        <Icon fontSize="large" />
                    </a>
                </OverlayTrigger>    
            </div>
        )
    }

    const iconLinksConfigObject = [
        {Icon: GitHub, link: "https://github.com/kapil-khursade", name: "Github"},
        {Icon: Email, link: "mailto: kapilkhursade.210@gmail.com", name: "Gmail"},
        {Icon: LinkedIn, link: "https://in.linkedin.com/in/kapilkhursadefwd?trk=public_post_follow-view-profile", name: "LinkedIn"},
        {Icon: Instagram, link: "https://www.instagram.com/kapilkkhursade/", name: "Instagram"},
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

export default SocialLinks