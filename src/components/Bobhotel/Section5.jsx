import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardText,
  MDBCardImage,
  MDBCardTitle
} from "mdb-react-ui-kit";

export default function Section5 () {
  return (
    <MDBContainer className="pt-1 pb-3">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="1">
            <MDBCardImage
              src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/calendar-clock-icon.png"
              alt="..."
              style={{ maxHeight: "90px" }}
              fluid
            />
          </MDBCol>
          <MDBCol md="11">
            <MDBCardBody>
              <MDBCardTitle>
                Your dates are popular among travelers
              </MDBCardTitle>
              <MDBCardText>
                Users are booking a place in Paris every 1 minutes on DMC.com
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
