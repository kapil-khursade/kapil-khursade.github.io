import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import Responsive from './subComponent/Responsive';

function Contact() {

  const form = useRef();
  const [messageSent, setMessageSent] = useState('FORM')

  const resObjForCardWidth =  {
    'Desktop': 'w-50',
    'Tablet': 'w-100',
    'Mobile': 'w-100'
  }

  const resObjForCardHeight = {
    'Desktop': 'vh-100',
    'Tablet': 'p-2',
    'Mobile': 'p-2'
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bipup5k', 'template_l4dpncb', form.current, {
        publicKey: 'p_LdBJU-8bQGzT8rz',
      })
      .then(
        () => {
          setMessageSent('SUCCESS')
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageSent('ERROR')
        },
      );
  };

  return (
    <Container
        id="contact_me"
        className={`d-flex justify-content-end align-items-center ${Responsive(resObjForCardHeight)}`}
    >
      {messageSent=='FORM' && <Card className={Responsive(resObjForCardWidth)}>
        <Card.Header className='text-center'>
          Drop Your Message!
          {
          //<Badge bg="danger" className="ms-3">Out Of Order</Badge>
          }
        </Card.Header>
        <Card.Body>
          <Form  ref={form} onSubmit={sendEmail}>
            <FloatingLabel
              controlId="floatingInput"
              label="Your Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" name="user_email" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingName"
              label="Your Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="John Doe" name="user_name" required={true}/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="Message"
              className='mb-3'
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: '150px' }}
                name="message"
                required={true}
              />
            </FloatingLabel>
            <div className='d-flex justify-content-end'><Button variant="primary" type="submit">Send</Button></div>
          </Form>
        </Card.Body>
      </Card>}

      {messageSent=='SUCCESS' && <Card className='w-100'>
        <Card.Header className='text-center'>
          Thanks for reaching out to me. I will get back to you soon.
        </Card.Header>
        </Card>
      }
      {messageSent=='ERROR' && <Card className='w-100'>
        <Card.Header className='text-center'>
          Sorry.
          <Badge bg="danger" className="ms-3">Something Went Wrong.</Badge>
        </Card.Header>
        </Card>
      }
    </Container>
  );
}

export default Contact;
