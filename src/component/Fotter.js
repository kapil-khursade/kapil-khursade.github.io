import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';
import SocialLinks from './subComponent/SocialLinks';
import { Email, Home, Phone } from '@mui/icons-material';

function Fotter() {

  const d = new Date();

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with me on social networks:</span>
      </div>

      <div className='me-5 d-none d-lg-block'>
         <SocialLinks/>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon color='secondary' icon='gem' className='me-3' />
              Kapil Khursade
            </h6>
            <p>
              Ruby On Rails Developer and React Native Developer
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Credits</h6>
            <p>
               Made with &nbsp;
              <a href='https://react.dev/' className='text-reset'>
                React
              </a>
            </p>
            <p>
                Componants from &nbsp;
              <a href='https://react-bootstrap.netlify.app/' className='text-reset'>
                React-Bootstrap
              </a>
            </p>
            <p>
                Deployed On &nbsp; 
              <a href='https://pages.github.com/' className='text-reset'>
                Github Page
              </a>
            </p>
            <p>
                Background by  &nbsp; 
              <a href='https://particles.js.org/' className='text-reset'>
                Particles js
              </a>
            </p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <Home/>
              Bhusawal, Jalgaon 425201, India
            </p>
            <p>
              <Email/>
              kapilkhursade.210@gmial.com
            </p>
            <p>
              <Phone/> + 91 8605514442
            </p>
            <p>
              <Phone/> + 91 8208475709
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © {d.getFullYear()} Copyright:
      <a className='text-reset fw-bold' href='www.google.com'>
        Kapil Khursade
      </a>
    </div>
  </MDBFooter>
  )
}

export default Fotter



