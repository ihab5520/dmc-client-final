import Axios from 'axios'
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInputGroup, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import logo from '../../Utilities/image/logopro.ico';
import './Contact.css'


export default function Contact() {
  const [name, setName] = useState("")
  const [fromEmail, setFromEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")



  const sendEmail = (e) => {
    e.preventDefault()
    Axios.post('/api/v1/email/contact',
      {
        email: fromEmail,
        subject: subject,
        name: name,
        message: message
      })
      .then(res => {
        if (res.data.success) {
          setFromEmail("")
          setSubject("")
          setName("")
          setMessage("")
          alert("Email successfully sent")
        } else {
          alert("Email sending failed")
        }
      })
      .catch(err => {
        console.log("something wrong")
      })
  }

  const mapIcon1 = Leaflet.icon({
    iconUrl: logo,
    iconSize: [58, 68]
  })

  return (
    <>
      <div>
        <MDBContainer className="my-5 contact-page-container">
          <h2 className="h1-responsive font-weight-bold text-center mt-5 contact-title">
            Contact <span className="green-color">U</span>
            <span className="green-color">s</span>
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">
            Have any questions? We'd love to hear from you.
          </p>
          <MDBRow>
            <MDBCol lg="4" className="lg-0 mb-4">
              <MDBCard>
                <MDBCardBody>
                  <div className="form-header blue accent-1">
                    <h3 className="mt-2 white-text pt-2 pb-2 ml-1">
                      Write to us:
                    </h3>
                  </div>
                  <p className="dark-grey-text">
                    We'll get back to you shortly!
                  </p>
                  <form className="form-contact" onSubmit={sendEmail}>
                    <div className="md-form">
                      <MDBInputGroup
                        className="mb-3"
                        noBorder
                        textBefore={<MDBIcon fas icon="user" />}
                      >
                        <MDBInput
                          label="Your name"
                          iconClass="grey-text"
                          type="text"
                          id="form-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </MDBInputGroup>
                    </div>

                    <div className="md-form">
                      <MDBInputGroup
                        className="mb-3"
                        noBorder
                        textBefore={<MDBIcon fas icon="envelope" />}
                      >
                        <MDBInput
                          label="Your email"
                          iconClass="grey-text"
                          type="text"
                          id="form-email"
                          value={fromEmail}
                          onChange={(e) => setFromEmail(e.target.value)}
                        />
                      </MDBInputGroup>
                    </div>

                    <div className="md-form">
                      <MDBInputGroup
                        className="mb-3"
                        noBorder
                        textBefore={<MDBIcon fas icon="tag" />}
                      >
                        <MDBInput
                          label="Subject"
                          iconClass="grey-text"
                          type="text"
                          id="form-subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </MDBInputGroup>
                    </div>

                    <div className="md-form">
                      <MDBInputGroup
                        className="mb-3"
                        noBorder
                        textBefore={<MDBIcon fas icon="pencil-alt" />}
                      >
                        <MDBInput
                          label="Message"
                          iconClass="grey-text"
                          type="textarea"
                          id="form-text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </MDBInputGroup>
                    </div>

                    <div className="text-center">
                      <button
                        className="btn btn-light-blue"
                        color="light-blue"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="7">
              <div
                id="map-container"
                className="rounded z-depth-1-half map-container"
                style={{ height: "400px" }}
              >
                <MapContainer
                  center={[48.8804304958452, 2.3255009016116674]}
                  style={{ width: "100%", height: "100%" }}
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker
                    position={[48.8804304958452, 2.3255009016116674]}
                    icon={mapIcon1}
                  >
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              <br />
              <MDBRow className="text-center row-contact">
                <MDBCol md="6">
                  <button className="btn btn-primary button-location">
                    <MDBIcon
                      fas
                      icon="map-marker-alt"
                      className="map-marker-icon"
                    />
                  </button>
                  <h1 className="location-name mt-2">18 RUE DE MOSCOU 75008</h1>
                  <h1 className="location-name">PARIS, FRANCE</h1>
                </MDBCol>
                <MDBCol md="6">
                  <button className="btn btn-primary button-location">
                    <MDBIcon icon="envelope" className="map-marker-icon" />
                  </button>
                  <p className="location-name location-email mt-3">
                    <a href="mailto:ihab.saleh@dmcvoyage.com">
                      ihab.saleh@dmcvoyage.com
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}