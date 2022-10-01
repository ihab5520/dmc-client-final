import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import CarAlert from "../../components/Bobcar/CarAlert";
import Section1 from "../../components/Bobcar/Section1";
import Section2 from "../../components/Bobcar/Section2";
import Carousel from "../../components/Bobcar/carousel";
import Ex1 from "../../components/Bobcar/Ex1";
import Ex2 from "../../components/Bobcar/Ex2";
import Ex3 from "../../components/Bobcar/Ex3";
import Ex4 from "../../components/Bobcar/Ex4";



export default function Car() {

  return (
    <>
      <CarAlert />
      <MDBContainer>
        <Carousel />
        <MDBRow>
          
          <MDBCol md="3">
            <Section2 />
          </MDBCol>
          <MDBCol md="9">
            <MDBRow>
              <MDBCol md="12">
                <Section1 />
              </MDBCol>
              <MDBCol md="12">
                <Ex1 />
              </MDBCol>
              <MDBCol md="12">
                <Ex2 />
              </MDBCol>
              <MDBCol md="12">
                <Ex3 />
              </MDBCol>
              <MDBCol md="12">
                <Ex4 />
              </MDBCol>
            </MDBRow>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </>
  );
}
