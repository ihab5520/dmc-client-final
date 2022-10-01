import React, { Component } from "react";
import {
  faLocationDot,
  faPersonWalkingLuggage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MDBBadge,
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardLink
} from "mdb-react-ui-kit";

export default class Section4 extends Component {
  render() {
    return (
      <MDBContainer className="pt-4 pb-2">
        <MDBCard>
          <MDBCardLink href="https://goo.gl/maps/gQkSa7efvMgLmZFw8">
            <MDBCardImage
              position="top"
              alt="..."
              src="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?cs=srgb&dl=pexels-dominika-roseclay-1252500.jpg&fm=jpg"
            />
          </MDBCardLink>

          <MDBCardBody>
            <MDBCardText>
              <FontAwesomeIcon
                icon={faLocationDot}
                size="1x"
                color="royalblue"
              />{" "}
              location - Inside city center
            </MDBCardText>
            <MDBCardText>
              <FontAwesomeIcon
                icon={faPersonWalkingLuggage}
                size="1x"
                color="royalblue"
              />{" "}
              Exceptional for walking
            </MDBCardText>
          </MDBCardBody>

          <MDBListGroup>
            <MDBListGroupItem
              noBorders
              className="d-flex justify-content-between align-items-center"
            >
              Palais d'Iena
              <MDBBadge pill color="primary">
                80 m
              </MDBBadge>
            </MDBListGroupItem>

            <MDBListGroupItem
              noBorders
              className="d-flex justify-content-between align-items-center"
            >
              American Center for art and culture
              <MDBBadge pill color="primary">
                140 m
              </MDBBadge>
            </MDBListGroupItem>

            <MDBListGroupItem
              noBorders
              className="d-flex justify-content-between align-items-center"
            >
              Panthéon Bouddhique
              <MDBBadge pill color="primary">
                150 m
              </MDBBadge>
            </MDBListGroupItem>

            <MDBListGroupItem
              noBorders
              className="d-flex justify-content-between align-items-center"
            >
              Musee Guimet des Arts Asiatiq
              <MDBBadge pill color="primary">
                160 m
              </MDBBadge>
            </MDBListGroupItem>

            <MDBListGroupItem
              noBorders
              className="d-flex justify-content-between align-items-center"
            >
              Passerelle Debilly
              <MDBBadge pill color="primary">
                230 m
              </MDBBadge>
            </MDBListGroupItem>
          </MDBListGroup>

          <MDBListGroup>
            <MDBListGroupItem
              noBorders
              className="d-flex justify-content-between align-items-center"
            >
              Eiffel Tower
              <MDBBadge pill color="primary">
                630 m
              </MDBBadge>
            </MDBListGroupItem>

            <MDBListGroupItem
              noBorders
              className="d-flex justify-content-between align-items-center"
            >
              Arc de Triomphe
              <MDBBadge pill color="primary">
                1.1 km
              </MDBBadge>
            </MDBListGroupItem>

            <MDBListGroupItem
              noBorders
              className="d-flex justify-content-between align-items-center"
            >
              Champs-Elysees
              <MDBBadge pill color="primary">
                1.3 km
              </MDBBadge>
            </MDBListGroupItem>

            <MDBListGroupItem
              noBorders
              className="d-flex justify-content-between align-items-center"
            >
              Musee d'Orsay Museum
              <MDBBadge pill color="primary">
                2.4 km
              </MDBBadge>
            </MDBListGroupItem>

            <MDBListGroupItem
              noBorders
              className="d-flex justify-content-between align-items-center"
            >
              Louvre Museum
              <MDBBadge pill color="primary">
                3.2 km
              </MDBBadge>
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCard>
      </MDBContainer>
    );
  }
}
