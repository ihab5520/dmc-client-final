import { DatePicker} from 'antd';
import Humandropdown from '../Badges/Humandropdown'
import React from 'react';
import {
    MDBInput,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Search() {
    const { RangePicker } = DatePicker;
    return (
      <div
        className="d-flex align-items-center w-100 py-1 px-1"
        style={{ backgroundColor: "rgba(255,255,255,0.8)", border: "3px solid royalblue" }}
      >
        <MDBRow tag="form" className="gy-2 gx-3 align-items-center">
          <MDBCol size="auto">
            <MDBInput id="form13Example1" label="To Where ?" />
          </MDBCol>
          <MDBCol size="auto">
            <Humandropdown />
          </MDBCol>
          <MDBCol size="auto">
            <RangePicker />
          </MDBCol>
          <MDBCol size="auto">
            <MDBBtn size="sm" tag="a" href="/hotels/shangrila">
              Search
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </div>
    );
}