import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container
      id="about_me"
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Row className="align-items-center">
        {/* Image Section - Hidden below 500px */}
        <Col
          xs={12}
          md={5}
          className="mb-4 mb-md-0 d-none d-sm-block"
        >
          <Image
            src="https://i.ibb.co/wSYCg8s/my-reshikesh-image.jpg"
            alt="Kapil Keshav Khursade"
            className="img-fluid rounded"
            style={{ maxHeight: "30rem", objectFit: "cover" }}
          />
        </Col>

        {/* Card Section */}
        <Col xs={12} md={7}>
          <Card className="border-0 shadow-lg">
            <Card.Body>
              <Card.Title className="text-center">
                <h2>About Me</h2>
              </Card.Title>
              <Card.Text className="text-right">
                <p className="lead" style={{fontSize: "1em"}}>
                  I'm <strong>Kapil Keshav Khursade</strong>, a passionate and dedicated{" "}
                  <strong>Ruby On Rails Developer</strong>. With a knack for solving
                  problems and a love for clean, efficient code, I thrive on
                  creating elegant solutions that deliver value.
                </p>
                <p style={{fontSize: "1em"}}>
                  I specialize in backend development with RoR, database management
                  with PostgreSQL, and frontend development with React and React
                  Native. I'm always eager to learn new technologies and improve
                  my craft. My journey has been fueled by curiosity and a desire to
                  create impactful projects.
                </p>
                <p  style={{fontSize: "1em"}}>
                  Beyond work, I enjoy playing chess, working out, and watching
                  cricket, which helps me stay balanced and inspired. Let's connect
                  and create something amazing together!
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
