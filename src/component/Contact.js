import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';

function Contact() {
  return (
    <Container
        id="contact_me"
        className="d-flex justify-content-end align-items-center vh-100"
    >
      <Card className='w-100'>
        <Card.Header className='text-center'>
          Drop Your Message!
          <Badge bg="danger" className="ms-3">Out Of Order</Badge>
        </Card.Header>
        <Card.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Your Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingName"
              label="Your Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="John Doe" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingOrgName"
              label="Your Organization Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="ABC Pvt Ltd" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="Message"
              className='mb-3'
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
            <div className='d-flex justify-content-end'><Button variant="primary" type="submit" disabled={true}>Send</Button></div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
