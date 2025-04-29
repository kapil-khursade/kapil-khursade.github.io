import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import Responsive from './subComponent/Responsive';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LinkIcon from '@mui/icons-material/Link';

function Projects() {

  let projectData = [
    {
        image: "https://i.ibb.co/fvSWbdJ/Screenshot-from-2024-12-25-12-22-19.png",
        title: "UPSC AI Ruby On Rails App",
        description: "Ruby On Rails project that use Active Admin, Sidekiq, Ajax etc to demonstrate my abilites and hands on experience I gained",
        buttons: [
            {
                title: "Repo",
                link: "https://github.com/kapil-khursade/Upsc-Ai",
                Icon: GitHubIcon
            },
            ]
    },
    {
        image: "https://i.ibb.co/2gsMcxj/Moblkeappupsctimage.jpg",
        title: "UPSC AI React Native Mobile App",
        description: "React Native project with implementaton of Navigation Stack, Api data fetching, authentication, Flatlist, Redux State management.",
        buttons: [
            {
                title: "Repo",
                link: "https://github.com/kapil-khursade/Upsc-Ai",
                Icon: GitHubIcon
            }
            ]
    },
    {
      image: "https://i.ibb.co/gFDSRbqv/portfolioss.png",
      title: "Personal Portfolio In React Js",
      description: "A portfolio website made in React Js and deployed on Github pages.",
      buttons: [
          {
              title: "Repo",
              link: "https://github.com/kapil-khursade/kapil-khursade.github.io",
              Icon: GitHubIcon
          },
          {
              title: "Link",
              link: "https://kapil-khursade.github.io/",
              Icon: LinkIcon
          }
          ]
  },
  ];

  const resObjForCardHeight = {
    'Desktop': 'vh-100',
    'Tablet': 'vh-auto p-2',
    'Mobile': 'vh-auto p-2'
  }

  return (
    <Container
    id="project"
    className={`d-flex justify-content-center align-items-center vh-auto p-2`}
    >
    <Row xs={1} md={2} className="g-4">
      {projectData.map((project, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={project.image} />
              <Card.Header className='bg-transparent text-center'><h5>{project.title}</h5></Card.Header>
              <Card.Body>
                <Card.Text>
                {project.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer className='bg-transparent d-flex justify-content-end'>
                   {
                    project.buttons.map((button, bid) => (
                        <Button href={button.link} className='m-1'>
                            {button.title}
                            {button.Icon ? <button.Icon /> : null}
                        </Button>
                    ))
                   }
              </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>

    </Container>
  )
}

export default Projects