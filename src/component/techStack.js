import React from 'react'
import "../css/techStack.css"
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';

const TechStack = () => {

    const IconCompo = ({imageSrc, name}) =>{
        return(
            <Card.Body>
                <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip>
                        <strong>{name}</strong>.
                        </Tooltip>
                    }
                >
                    <Image src={imageSrc} className="language-image"/>
                </OverlayTrigger>    
            </Card.Body> 
        )
    }

    const LangaugeIconConfig = [{imageSrc: "https://i.ibb.co/2yc0z4p/ruby.png", name: "Ruby"},
                                {imageSrc: "https://i.ibb.co/k6Kjjtg/java.png", name: "Java"},
                                {imageSrc: "https://i.ibb.co/z4Ps8NF/javascript.png", name: "JavaScript"}]

    const FramworkIconConfig = [{imageSrc: "https://seeklogo.com/images/R/rails-logo-DD0927D290-seeklogo.com.png", name: "Ruby On Rails"},
                                {imageSrc: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg", name: "Spring Boot"},
                                {imageSrc: "https://www.svgrepo.com/show/303500/react-1-logo.svg", name: "React"},
                                {imageSrc: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg", name: "React Native"}
                                ]

    const TopupsConfig = ["Active Admin", "Carrier Wave", "Devise", "Can Can", "Bootstrap", "Spring Security", "S3-AWS"]

  return (
    <Container id="tech_stack" className="text-center d-flex justify-content-center align-items-center vh-100">
    <Stack gap={3}>
    <Card>
        <Card.Body><h5><Badge bg="dark">Languages</Badge></h5></Card.Body>
        <Stack direction="horizontal" gap={3} className="flex-wrap">
            {LangaugeIconConfig.map((ele) => {
                return <IconCompo imageSrc={ele.imageSrc} name={ele.name}/>
            })}
        </Stack>
    </Card>
    <Card variant="primary">
        <Card.Body><h5><Badge bg="dark">Framworks</Badge></h5></Card.Body>
        <Stack direction="horizontal" gap={3} className="flex-wrap">
            {FramworkIconConfig.map((ele) => {
                    return <IconCompo imageSrc={ele.imageSrc} name={ele.name}/>
                })} 
        </Stack>
    </Card>
    <Card>
    <Card.Body><h5><Badge bg="dark">Some  Topups..</Badge></h5></Card.Body>
        <Stack direction="horizontal" gap={3} className="flex-wrap">
            {TopupsConfig.map((ele) => {
                return <Card.Body><Badge bg="secondary">{ele}</Badge></Card.Body>
            })}
        </Stack>
    </Card>
    </Stack>
    </Container>
  )
}

export default TechStack;


