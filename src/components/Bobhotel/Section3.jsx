import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";

export default function Section3() {
  return (
    <MDBContainer className="pt-1 pb-3">
      <MDBCard>
        <MDBCardBody>
          <div className="pb-3">
            <h3> Facilities </h3>
          </div>

          <div>
            <MDBRow className="row-cols-2 row-cols-lg-4">
              <MDBCol>
                <div>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="royalblue" />{" "}
                  Airport transfer
                </div>
              </MDBCol>

              <MDBCol>
                <div>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="royalblue" />{" "}
                  Valet parking
                </div>
              </MDBCol>

              <MDBCol>
                <div>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="royalblue" />{" "}
                  Pets allowed
                </div>
              </MDBCol>

              <MDBCol>
                <div>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="royalblue" />{" "}
                  Shuttle service
                </div>
              </MDBCol>

              <MDBCol>
                <div>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="royalblue" />{" "}
                  Swimming pool [indoor]
                </div>
              </MDBCol>

              <MDBCol>
                <div>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="royalblue" />{" "}
                  Spa
                </div>
              </MDBCol>

              <MDBCol>
                <div>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="royalblue" />{" "}
                  Free Wi-Fi in all rooms!
                </div>
              </MDBCol>

              <MDBCol>
                <div>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="royalblue" />{" "}
                  Front desk [24-hour]
                </div>
              </MDBCol>

            </MDBRow>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
