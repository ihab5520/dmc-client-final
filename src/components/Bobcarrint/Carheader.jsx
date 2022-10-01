import React from "react";
import Search from "../../components/Bobcarrint/CarrentSearch";
import { MDBContainer } from "mdb-react-ui-kit";


export default function Carheader() {
  return (

<MDBContainer fluid className='pb-4'>
        <div className="text-center p-5 bg-image"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?cs=srgb&dl=pexels-negative-space-97079.jpg&fm=jpg')"
          }}
        >
          <div className="pb-5">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <div>
                <h1 className="mb-1 text-white">
                  Car Hire – Search, Compare & Save
                </h1>
                <h4 className="mb-3 text-white">
                  Compare 900 companies at over 60,000 locations. Price Match
                  Guarantee
                </h4>
              </div>
                <div>
                    <Search />
                </div>
            </div>
          </div>
          </div>
          </MDBContainer>
  );
}
