import React from 'react';
import {
    MDBCard,
    MDBCol,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';

export default function Homecard(props) {
    return (
        <MDBCol size='6' md='3' sm='12'>
               <MDBCard>
                <MDBCardImage
                        src={props.img}
                        position="top"
                        style={{ height: '13rem' }}
                        alt="..."
                    />
                    <MDBCardBody>
                        <MDBCardTitle>{props.title}</MDBCardTitle>
                        <MDBCardText>
                            {props.text}
                        </MDBCardText>
                    </MDBCardBody>
               </MDBCard>
        </MDBCol>

    );
}