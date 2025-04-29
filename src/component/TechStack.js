import React from 'react'
import "../css/techStack.css"
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import Responsive from './subComponent/Responsive';

const TechStack = () => {
    
    const resHeightObj = {
      'Desktop': 'vh-100',
      'Tablet': 'p-2',
      'Mobile': 'p-2'
    }

    const IconCompo = ({imageSrc, name}) =>{
        return(
                <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip>
                        <strong>{name}</strong>.
                        </Tooltip>
                    }
                >
                    <Image src={imageSrc} className="language-image" alt={name} onError={()=> {return name}}/>
                </OverlayTrigger>    
        )
    }

    const LangaugeIconConfig = [{imageSrc: "https://i.ibb.co/2yc0z4p/ruby.png", name: "Ruby"},
                                {imageSrc: "https://i.ibb.co/z4Ps8NF/javascript.png", name: "JavaScript"},
                                {imageSrc: "https://i.ibb.co/k6Kjjtg/java.png", name: "Java"},
                                {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/150px-Python-logo-notext.svg.png", name: "Python"},
                                {imageSrc: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg", name: "Postgres"},
                                {imageSrc: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg", name: "My SQL"},
                                ]

    const FramworkIconConfig = [{imageSrc: "https://seeklogo.com/images/R/rails-logo-DD0927D290-seeklogo.com.png", name: "Ruby On Rails"},
                                {imageSrc: "https://www.svgrepo.com/show/303500/react-1-logo.svg", name: "React"},
                                {imageSrc: "https://reactnative.dev/img/header_logo.svg", name: "React Native"},
                                {imageSrc: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg", name: "Spring Boot"},
                                ]

    const TopupsConfig = ["Active Admin", "Carrier Wave", "Devise", "Can Can", "Bootstrap", "Spring Security", "S3-AWS"]

    return (
        <Container
          id="tech_stack"
          className={`text-center d-flex justify-content-center align-items-center ${Responsive(resHeightObj)}`}
        >
          <Card className="bg-transparent w-100">
            <Stack gap={3}>
              {/* Languages Section */}
              <Card>
                <Card.Header>
                  <h5>
                    <Badge bg="dark">Languages</Badge>
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Stack direction="horizontal" gap={3} className="flex-wrap justify-content-around">
                    {LangaugeIconConfig.map((ele, index) => (
                      <IconCompo key={index} imageSrc={ele.imageSrc} name={ele.name} />
                    ))}
                  </Stack>
                </Card.Body>
              </Card>
      
              {/* Frameworks Section */}
              <Card>
                <Card.Header>
                  <h5>
                    <Badge bg="dark">Frameworks</Badge>
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Stack direction="horizontal" gap={3} className="flex-wrap justify-content-around">
                    {FramworkIconConfig.map((ele, index) => (
                      <IconCompo key={index} imageSrc={ele.imageSrc} name={ele.name} />
                    ))}
                  </Stack>
                </Card.Body>
              </Card>
      
              {/* Topups Section */}
              <Card>
                <Card.Header>
                  <h5>
                    <Badge bg="dark">Some Topups..</Badge>
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Stack direction="horizontal" gap={3} className="flex-wrap justify-content-around">
                    {TopupsConfig.map((ele, index) => (
                      <Badge key={index} bg="secondary">
                        {ele}
                      </Badge>
                    ))}
                  </Stack>
                </Card.Body>
              </Card>
            </Stack>
          </Card>
        </Container>
      );
}

export default TechStack;


