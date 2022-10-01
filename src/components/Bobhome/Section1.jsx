import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export default function Section1() {
  return (
    <MDBContainer>
      <MDBRow className="mg-0">
        <MDBCol md="5" className="p-5 ps-md-3">
          <h2 className="mt-0 mb-4">About</h2>
          <div style={{ fontSize: "18px" }}>
            <p className="lh-base">
              Our mission at DMC is to make affordable travel accessible to more
              people, and to deliver affordable and enjoyable travel experiences
              that are seamless from end to end. By seamless, we mean
              hassle-free from the moment you start planning your trip. To get
              to our goal.
            </p>
          </div>
          <MDBListGroup
            light
            numbered
            style={{ minWidth: "16rem", fontSize: "18px" }}
          >
            <MDBListGroupItem> faster </MDBListGroupItem>
            <MDBListGroupItem> Better </MDBListGroupItem>
            <MDBListGroupItem> Safer </MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>

        <MDBCol md="7" className="mb-md-0 p-md-2">
          <img
            src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/0/E/%7B30EDF68D-4178-4031-829A-20A75A627F1E%7DSLPR_AboutHotel_1920x940.jpg?w=600&h=500&mode=crop&scale=both"
            className="w-100"
            style={{ height: "500px" }}
            alt="..."
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
