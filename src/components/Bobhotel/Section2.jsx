import {
  faMedal,
  faSprayCanSparkles,
  faBus,
  faDoorOpen,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Section2() {
  return (
    <MDBContainer className="pt-1 pb-2">
      <MDBCard>
        <MDBCardBody>
          <div className="pb-3">
            <h3> Highlights </h3>
          </div>
          <div>
            <MDBRow
              className="row-cols-2 row-cols-lg-5 g-2 g-lg-3"
              style={{ textAlign: "center" }}
            >
              <MDBCol>
                <FontAwesomeIcon
                  icon={faSprayCanSparkles}
                  size="2x"
                  color="green"
                />
                <div className="p-3">Sparkling clean</div>
              </MDBCol>
              <MDBCol>
                <FontAwesomeIcon icon={faBus} size="2x" color="indianred" />
                <div className="p-3">110 meters to public transportation</div>
              </MDBCol>
              <MDBCol>
                <FontAwesomeIcon icon={faMedal} size="2x" color="black" />
                <div className="p-3">Top Value</div>
              </MDBCol>
              <MDBCol>
                <FontAwesomeIcon
                  icon={faDoorOpen}
                  size="2x"
                  color="royalblue"
                />
                <div className="p-3">Front desk [24-hour]</div>
              </MDBCol>
              <MDBCol>
                <FontAwesomeIcon icon={faPlane} size="2x" color="firebrick" />
                <div className="p-3">Airport transfer </div>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
