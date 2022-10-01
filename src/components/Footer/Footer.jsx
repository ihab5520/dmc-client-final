import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className=' d-flex container justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-2 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                D M C
              </h6>
              <p>
                Our mission at DMC is to make affordable travel accessible to more people, 
                and to deliver affordable and enjoyable travel experiences that are seamless from end to end.
                By seamless, we mean hassle-free from the moment you start planning your trip.
                To get to our goal.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'> Services </h6>
              <p>
                <a href='/hotels' className='text-reset text-decoration-none'>
                  Hotels & Homes
                </a>
              </p>
              <p>
                <a href='/flights' className='text-reset text-decoration-none'>
                  Flights
                </a>
              </p>
              <p>
                <a href='/airporttransfer' className='text-reset text-decoration-none'>
                  Airport transfer
                </a>
              </p>
              <p>
                <a href='/carrentals' className='text-reset text-decoration-none'>
                  Car rentals
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'> Help </h6>
              <p>
                <a href='/contact' className='text-reset text-decoration-none'>
                  Contact us
                </a>
              </p>
              <p>
                <a href='/faqs' className='text-reset text-decoration-none'>
                  FAQs
                </a>
              </p>
              <p>
                <a href='/privacypolicy' className='text-reset text-decoration-none'>
                  Privacy policy
                </a>
              </p>
              <p>
                <a href='/cookiepolicy' className='text-reset text-decoration-none'>
                  Cookie policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i class="flag flag-france"></i>
               18 RUE DE MOSCOU 75008 PARIS, FRANCE
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ihab.saleh@dmcvoyage.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +33 7 78 10 53 69
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +33 7 78 10 53 69
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className='text-reset fw-bold text-decoration-none' href='https://www.dmc.com/'> DMC -  Ihab Saleh </a>
      </div>
    </MDBFooter>
  );
}