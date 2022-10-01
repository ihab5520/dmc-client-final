import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Backtop from "../../components/Backtop/Backtop";

import Carheader from "../../components/Bobcarrint/Carheader";
import CarSection1 from "../../components/Bobcarrint/CarSection1";
import CarSection2 from "../../components/Bobcarrint/CarSection2";
import CarSection3 from "../../components/Bobcarrint/CarSection3";

export default function Carrentals() {
  const cardata1 = [
    {
      title: "World's biggest online car rental service",
      text: "Working with over 900 companies in 160 countries, we can find the right car in the right place, at the right price.",
      icon: "globe-europe",
    },
    {
      title: "Rated by more than 3.5 million people",
      text: "We ask each of our customers to rate the company that provided their car. Check the scores - and make the right choice.",
      icon: "star",
    },
  ];

  const cardata2 = [
    {
      title: "Paris",
      text: "45",
      price: "23.26",
      linktext: "/",
      img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg",
    },
    {
      title: "London",
      text: "75",
      price: "30.26",
      linktext: "/",
      img: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?cs=srgb&dl=pexels-dominika-gregu%C5%A1ov%C3%A1-672532.jpg&fm=jpg",
    },
    {
      title: "Rome",
      text: "40",
      price: "34.72",
      linktext: "/",
      img: "https://images.pexels.com/photos/2678456/pexels-photo-2678456.jpeg?cs=srgb&dl=pexels-samson-bush-2678456.jpg&fm=jpg",
    },
    {
      title: "Milan",
      text: "60",
      price: "24.21",
      linktext: "/",
      img: "https://images.pexels.com/photos/931015/pexels-photo-931015.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-931015.jpg&fm=jpg",
    },
    {
      title: "Istanbul",
      text: "58",
      price: "19.78",
      linktext: "/",
      img: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?cs=srgb&dl=pexels-burak-karaduman-1549326.jpg&fm=jpg",
    },
    {
      title: "Madrid ",
      text: "48",
      price: "20.45",
      linktext: "/",
      img: "https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?cs=srgb&dl=pexels-alex-azabache-3757144.jpg&fm=jpg",
    },
  ];

  return (
    <>
      <div>
        <Carheader />
        <div>
          <MDBContainer>
            <Backtop />
            {cardata1.map((item) => {
              return (
                <CarSection1
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                />
              );
            })}

            <MDBRow className="mb-3 mt-5">
              <h3 className="text-center"> Our most popular destinations </h3>
              {cardata2.map((item) => {
                return (
                  <CarSection2
                    title={item.title}
                    text={item.text}
                    price={item.price}
                    img={item.img}
                    linktext={item.linktext}
                  />
                );
              })}
            </MDBRow>
            <CarSection3 />
          </MDBContainer>
        </div>
      </div>
    </>
  );
}
