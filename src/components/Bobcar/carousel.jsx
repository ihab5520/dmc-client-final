import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
      <MDBCarousel fade>
        <MDBCarouselItem
        style={{height:"600px" , maxHeight: "600px"}}
          className="w-100 d-block"
          itemId={1}
          src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?cs=srgb&dl=pexels-mike-b-116675.jpg&fm=jpg"
          alt="..."
        />
        <MDBCarouselItem
        style={{height:"600px" , maxHeight: "600px"}}
          className="w-100 d-block"
          itemId={2}
          src="https://images.pexels.com/photos/225841/pexels-photo-225841.jpeg?cs=srgb&dl=pexels-mike-b-225841.jpg&fm=jpg"
          alt="..."
        />
        <MDBCarouselItem
        style={{height:"600px" , maxHeight: "600px"}}
          className="w-100 d-block"
          itemId={3}
          src="https://images.pexels.com/photos/11396006/pexels-photo-11396006.jpeg?cs=srgb&dl=pexels-czapp-%C3%A1rp%C3%A1d-11396006.jpg&fm=jpg"
          alt="..."
        />
        <MDBCarouselItem
        style={{height:"600px" , maxHeight: "600px"}}
          className="w-100 d-block"
          itemId={4}
          src="https://images.pexels.com/photos/11449233/pexels-photo-11449233.jpeg?cs=srgb&dl=pexels-mike-b-11449233.jpg&fm=jpg"
          alt="..."
        />
        <MDBCarouselItem
        style={{height:"600px" , maxHeight: "600px"}}
          className="w-100 d-block"
          itemId={5}
          src="https://images.pexels.com/photos/257851/pexels-photo-257851.jpeg?cs=srgb&dl=pexels-pixabay-257851.jpg&fm=jpg"
          alt="..."
        />
        <MDBCarouselItem
        style={{height:"600px" , maxHeight: "600px"}}
          className="w-100 d-block"
          itemId={6}
          src="https://images.pexels.com/photos/4077265/pexels-photo-4077265.jpeg?cs=srgb&dl=pexels-erik-mclean-4077265.jpg&fm=jpg"
          alt="..."
        />
      </MDBCarousel>
    );
}