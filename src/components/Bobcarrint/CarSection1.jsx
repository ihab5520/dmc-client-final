import React from 'react';
import {
    MDBCard,
    MDBRow,
    MDBCardBody,
    MDBTypography,
    MDBCol,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function CarSection2(props) {
    return (
        <MDBCard className='mt-2'>
            <MDBRow>
                <MDBCol md='1' className='d-flex align-items-center justify-content-center ps-5'>
                    <MDBIcon fas className='ms-1' size='5x' icon={props.icon} />
                </MDBCol>
                <MDBCol md='11'>
                    <MDBCardBody>
                        <MDBTypography blockquote >
                            <h3>{props.title}</h3>
                            <footer>
                                {props.text}
                            </footer>
                        </MDBTypography>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>

        </MDBCard>
    );
}