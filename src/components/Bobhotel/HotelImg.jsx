
import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function HotelImg() {
  return (
    <MDBRow>
      <MDBCol md="4">
        <img
          src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/paris_shangrila/settings/gallery/images/1-Hotel.jpg"
          className="img-fluid"
          alt=""
          style={{ height: "-webkit-fill-available" }}
        />
      </MDBCol>

      <MDBCol md="8">
        <MDBRow>
          <MDBCol sm="6" md="4" className="mb-2">
            <img
              src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/paris_shangrila/settings/gallery/images/33-La-Suite-Gustave-Eiffel.jpg"
              className="img-fluid"
              alt=""
            />
          </MDBCol>
          <MDBCol sm="6" md="4" className="mb-2">
            <img
              src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/paris_shangrila/settings/gallery/images/70-Lifestyle-Reception.jpg"
              className="img-fluid"
              alt=""
            />
          </MDBCol>
          <MDBCol sm="6" md="4" className="mb-2">
            <img
              src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/paris_shangrila/settings/gallery/images/18-Junior-Suite-Paris-View.jpg"
              className="img-fluid"
              alt=""
            />
          </MDBCol>
          <MDBCol sm="6" md="4" className="mb-2">
            <img
              src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/paris_shangrila/settings/gallery/images/12-Eiffel-View-Room.jpg"
              className="img-fluid"
              alt=""
            />
          </MDBCol>
          <MDBCol sm="6" md="4" className="mb-2">
            <img
              src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/paris_shangrila/settings/gallery/images/16-Junior-Suite.jpg"
              className="img-fluid"
              alt=""
            />
          </MDBCol>
          <MDBCol sm="6" md="4" className="mb-2">
            <img
              src="https://sitecore-cd.shangri-la.com/-/media/Shangri-La/paris_shangrila/settings/gallery/images/30-Duplex-Terrace-Eiffel-View-Suite.jpg"
              className="img-fluid"
              alt=""
            />
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
}