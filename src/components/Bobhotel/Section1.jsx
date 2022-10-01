
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function Section1() {

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const center = [48.864393823174396, 2.293359784656065];
  
  return (
    <MDBContainer className="pt-4 pb-2">
      <MDBCard>
        <MDBCardBody>
          <div>
            <h2 style={{ display: "inline" }}>Shangri-La Hotel, Paris </h2>
            <Rating
              readonly={true}
              initialValue={5}
              showTooltip
              size={"25px"}
            />
          </div>
          <div>
            <span>
              10 Avenue D'Iéna, 16th - Trocadero, Paris, France, 75016
            </span>
            <span>
              {" "}
              -{" "}
              <>
                <MDBBtn onClick={toggleShow}>See Map</MDBBtn>
                <MDBModal
                  show={basicModal}
                  setShow={setBasicModal}
                  tabIndex="-1"
                >
                  <MDBModalDialog>
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle>Modal title</MDBModalTitle>
                        <MDBBtn
                          className="btn-close"
                          color="none"
                          onClick={toggleShow}
                        ></MDBBtn>
                      </MDBModalHeader>

                      <MDBModalBody>
                        <div
                          id="map-container"
                          className="rounded z-depth-1-half map-container"
                          style={{ height: "400px", width: "auto" }}
                        >
                          <MapContainer
                            center={center}
                            style={{ width: "100%", height: "100%" }}
                            zoom={16}
                            scrollWheelZoom={false}
                          >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={center}>
                              <Popup>Shangri-La Paris</Popup>
                            </Marker>
                          </MapContainer>
                        </div>
                      </MDBModalBody>

                      <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggleShow}>
                          Close
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>
              </>
            </span>
          </div>
          <hr />
          <p>
            Get your trip off to a great start with a stay at this property,
            which offers free Wi-Fi in all rooms. Conveniently situated in the
            16th - Trocadero part of Paris, this property puts you close to
            attractions and interesting dining options. Don't leave before
            paying a visit to the famous Eiffel Tower. Rated with 5 stars, this
            high-quality property provides guests with access to massage,
            restaurant and fitness center on-site.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
