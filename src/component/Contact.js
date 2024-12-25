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
    <Card>
        <Card.Header className='text-center'>Drop Your Message!</Card.Header><Badge bg="danger">Out Of Order</Badge>
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
           controlId="floatingPassword" 
           label="Your Name"
           className="mb-3"
        >
            <Form.Control type="text" placeholder="Jhon Doe" />
        </FloatingLabel>

        <FloatingLabel 
           controlId="floatingPassword" 
           label="Your Organzation Name"
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
        <Button disabled variant="primary" type="submit">Send</Button>
        </Form>
        </Card.Body>
    </Card>
    </Container>
  )
}

export default Contact