import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Responsive from './subComponent/Responsive';



function Resume() {
  const resHeightObj = {
    'Desktop': 'vh-100',
    'Tablet': 'p-2',
    'Mobile': 'p-2'
  }

  return (
    <Container
        id="resume"
        className={`text-center d-flex justify-content-center ${Responsive(resHeightObj)}`}
    >
          <iframe 
          src="https://drive.google.com/file/d/1MipxAWCH6g9ti4STDzBjUIJBlvZ8GoRo/preview#toolbar=0"  
          allow="autoplay"
          width={'1000'}
          height={'700'}
          align
          title="resume"></iframe>
    </Container>
  )
}

export default Resume