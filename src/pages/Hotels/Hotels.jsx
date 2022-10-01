import React from "react";
import "./Hotels.css";
import Backtop from "../../components/Backtop/Backtop";
import Covid from "../../components/Covid/Covid";
import Hotelheader from "../../components/Bobhome/Hotelheader";
import Section1 from "../../components/Bobhome/Section1";
import Section2 from "../../components/Bobhome/Section2";
import Overheard from "../../components/Bobhome/Section3";
import Homecard from "../../components/Bobhome/Homecard";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default function Hotels() {

  const homedata = [
    { title: 'Apartments', text: '156,786 properties', img:'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg' },
    { title: 'Vacation ', text: '517,703 properties', img: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1320686.jpg&fm=jpg' },
    { title: 'Private Villas', text: '181,167 properties', img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg' },
    { title: 'Bungalows', text: '8,801 properties', img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg' },
  ]

  return (
    <div className="page">
      <div className="page">
        <Covid />
        <Hotelheader />
      </div>
      <div>
        <MDBContainer className="page-container">
          <Backtop />
          <Section2 />
          <Section1 />

          <MDBRow className="mb-3 mt-5">
            <h2 className="text-center pb-5">
              Explore more travel vacation rentals{" "}
            </h2>
            {homedata.map((item) => {
              return (
                <Homecard title={item.title} text={item.text} img={item.img} />
              );
            })}
          </MDBRow>

          <Overheard />
        </MDBContainer>
      </div>
    </div>
  );
}
