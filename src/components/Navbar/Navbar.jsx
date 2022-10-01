import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import logo from '../../Utilities/image/logo.png';

export default function Header() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer >
          <MDBNavbarBrand href='/'>
            <img
              src={logo}
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>

              <MDBNavbarItem >
                <MDBNavbarLink active aria-current='page' href='/hotels'> Hotels </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/flights'> Flights </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/carrentals'> Car rentals</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/airporttransfer'> Airport transfer </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
            <div className="d-grid gap-2 col-6 d-md-flex justify-content-md-end">

              <MDBBtn className='mx-2' size='sm' tag='a' href='/login'> Login </MDBBtn>
              <MDBBtn className='text-dark' size='sm' color='light' tag='a' href='/register'> Register </MDBBtn>

          </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </>
  );
}