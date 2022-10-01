import React, { useState } from "react";

import {
  faPerson,
  faSuitcase,
  faSuitcaseRolling,
  faSnowflake,
  faDoorOpen,
  faCheck,
  faGasPump,
  faLocationDot,
  faPlane
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBBadge,
} from "mdb-react-ui-kit";

export default function Ex4() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <MDBContainer className="pt-4 pb-2">
      <MDBCard>
        <MDBCardBody>
          <MDBRow className="grid">
            <MDBCol
              className="g-col-4"
              style={{ maxWidth: "200px", width: "100%" }}
            >
              <MDBCardImage
                src="https://cdn2.rcstatic.com/images/car_images/web/citroen/c3_lrg.jpg"
                alt="..."
                fluid
              />
            </MDBCol>
            <MDBCol className="g-col-4">
              <MDBCardBody>
                <MDBCardTitle> Citroen C3 </MDBCardTitle>
                <MDBRow className="row-cols-lg-2">
                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faPerson}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      4 Seats
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faDoorOpen}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      4 Door
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faSuitcase}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      1 Large bag
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faSuitcaseRolling}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      1 Small bag
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faSuitcaseRolling}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      Manual gearbox
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faSnowflake}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      Air Conditioning
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>

            <MDBCol className="g-col-4">
              <MDBCardText style={{ float: "right" }}>
                <small className="text-muted">Price for 2 days:</small>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                  US$ 188.58
                </p>
              </MDBCardText>
            </MDBCol>
          </MDBRow>

          <hr />
          <MDBRow className="grid" style={{ verticalAlign: "top" }}>
            <MDBCol className="g-col-4">
              <div>
                <MDBCardImage
                  src="https://cdn2.rcstatic.com/images/suppliers/wrp/flat/102_logo.gif"
                  alt="..."
                  fluid
                />
                <span> Europcar </span>
              </div>
              <br />
              <div>
                <MDBCardImage
                  src="https://cdn2.rcstatic.com/images/suppliers/wrp/flat/207_logo.gif"
                  alt="..."
                  fluid
                />
                <span> Sixt </span>
              </div>
              <br />
              <div>
                <h4>
                  <MDBBadge className="ms-2">8.2</MDBBadge>
                  Excellent
                </h4>
              </div>
            </MDBCol>

            <MDBCol className="g-col-4">
              <MDBCardBody>
                <MDBRow className="row-cols-lg-2">
                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faGasPump}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      Fuel Policy
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      Amendments
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      500 km per rental
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      Theft Protection
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faPlane}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      Paris Charles de Gaulle Airport
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        size="1x"
                        color="royalblue"
                      />{" "}
                      Collision Damage Waiver
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>

            <MDBCol className="g-col-4">
              <MDBCardText style={{ float: "right" }}>
                <MDBBtn color="success" size="lg">
                  View deal
                </MDBBtn>
                <br />
                <br />
                <MDBBtn className="text-dark" color="light" size="sm">
                  Save for later
                </MDBBtn>
              </MDBCardText>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
