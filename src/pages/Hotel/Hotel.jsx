import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import HotelAlert from "../../components/Bobhotel/HotelAlert";
import Breadcrumb from "../../components/Bobhotel/Breadcrumb";
import HotelImg from "../../components/Bobhotel/HotelImg";
import Section1 from "../../components/Bobhotel/Section1";
import Section2 from "../../components/Bobhotel/Section2";
import Section3 from "../../components/Bobhotel/Section3";
import Section4 from "../../components/Bobhotel/Section4";
import Section5 from "../../components/Bobhotel/Section5";

export default function Hotel() {

  return (
    <>
      <HotelAlert />
      <MDBContainer>
        <Breadcrumb />
        <HotelImg />
        <MDBRow>
          <MDBCol md="9">
            <MDBRow>
              <MDBCol md="12">
                <Section1 />
              </MDBCol>
              <MDBCol md="12">
                <Section2 />
              </MDBCol>
              <MDBCol md="12">
                <Section3 />
              </MDBCol>
              <MDBCol md="12">
                <Section5 />
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="3">
            <Section4 />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
