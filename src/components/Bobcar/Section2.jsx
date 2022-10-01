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
  MDBCardLink,
  MDBAccordionItem,
  MDBAccordion,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default class Section2 extends Component {
  render() {
    return (
      <MDBContainer className="pt-4 pb-2">
        <MDBCard>
          <MDBListGroup>
            <MDBAccordion flush initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle="Supplier">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Europcar"
                />
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckChecked"
                  label="Sixt"
                />
              </MDBAccordionItem>
            </MDBAccordion>

            <MDBAccordion flush initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle="Supplier Rating">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Excellent: 8+"
                />
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckChecked"
                  label="Very good: 7+"
                />
              </MDBAccordionItem>
            </MDBAccordion>

            <MDBAccordion flush initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle="Supplier Location">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="In Terminal"
                />
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBListGroup>

          <MDBAccordion flush initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle="Fuel policy">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Like for Like"
              />
            </MDBAccordionItem>
          </MDBAccordion>

          <MDBAccordion flush initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle="Car Specifications">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="With Air-conditioning"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="Automatic Transmission"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="Manual gearbox"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="4+ Doors"
              />
            </MDBAccordionItem>
          </MDBAccordion>

          <MDBAccordion flush initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle="Seats">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="4 Seats"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="5 Seats"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="6 Seats"
              />
            </MDBAccordionItem>
          </MDBAccordion>

          <MDBAccordion flush initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle="Damage excess">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="1300,00 € or less"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="1700,00 € or less"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="2200,00 € or less"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="5500,00 € or less"
              />
            </MDBAccordionItem>
          </MDBAccordion>

          <MDBAccordion flush initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle="Deposit at pick-up">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label=" Under 300,00 € "
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="Under 500,00 € "
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="Under 900,00 € "
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="Under 1100,00 € "
              />
            </MDBAccordionItem>
          </MDBAccordion>

          <MDBAccordion flush initialActive={1}>
            <MDBAccordionItem
              collapseId={1}
              headerTitle="Payment cards at pick-up"
            >
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label=" Debit card"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="Credit card "
              />
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCard>
      </MDBContainer>
    );
  }
}
