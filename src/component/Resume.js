import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';



function Resume() {
  return (
    <Container
        id="resume"
        className="text-center d-flex justify-content-center align-items-center vh-100"
    >
        <Card className="">
          <iframe 
          src="https://drive.google.com/file/d/1MipxAWCH6g9ti4STDzBjUIJBlvZ8GoRo/preview#toolbar=0"  
          allow="autoplay"
          height={"490"}
          align
          title="resume"></iframe>
        </Card>
    </Container>
  )
}

export default Resume