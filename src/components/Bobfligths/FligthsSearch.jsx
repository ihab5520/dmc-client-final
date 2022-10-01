import { DatePicker } from "antd";
import React from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

export default function Search() {
  const { RangePicker } = DatePicker;
  return (
    <div
      className="d-flex align-items-center w-100 py-4 px-5"
      style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
    >
      <MDBRow tag="form" className="gy-2 gx-3 align-items-center">
        <MDBCol size="auto">
          <MDBInput id="form13Example1" label="From Where ?" />
        </MDBCol>
        <MDBCol size="auto">
          <MDBInput id="form13Example1" label="To Where ?" />
        </MDBCol>

        <MDBCol size="auto">
          <RangePicker />
        </MDBCol>
        <MDBCol size="auto">
          <MDBBtn size="sm" tag="a" href="/">
            Search
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </div>
  );
}