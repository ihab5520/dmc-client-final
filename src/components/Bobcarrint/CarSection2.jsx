import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function CarSection2(props) {
    return (

        <MDBCol md='4' sm='6' className='p-3'>
                        <MDBCard >
                            <MDBCardImage
                                src={props.img}
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>{props.title}</MDBCardTitle>
                                <MDBCardText>
                                    Car hire in {props.text} pick-up locations 
                                </MDBCardText>
                                <MDBCardText>
                                <MDBIcon fas size='lg' icon="car" /> From € {props.price} per day 
                                </MDBCardText>
                                <a href= {props.linktext} className="stretched-link">Search rental cars in {props.title} </a>
                            </MDBCardBody>
                        </MDBCard>
            </MDBCol>

    );
}