import React from 'react';
import {
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter
} from 'mdb-react-ui-kit';

export default function Overheard() {
    return (
        <MDBContainer>
            <h3 className="text-center mt-5"> Explore more travel vacation rentals </h3>
            <MDBContainer>
                <MDBRow className='mb-4 mt-4'>
                    <MDBCol size='md' >
                        <MDBCard alignment='center' className='w-80 h-100'>
                            <MDBCardHeader style={{ fontSize: 'x-large'}} > Klausturhof Guesthouse </MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle> "I could not have asked for a better stay than Klausturhof. Thanks to DMC." </MDBCardTitle>
                                <MDBCardText> Vishwas from India </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter className='text-muted'> 1 days ago </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size='md'>
                        <MDBCard alignment='center' className='w-80 h-100'>
                            <MDBCardHeader style={{ fontSize: 'x-large' }}> Hotel Equatorial Melaka </MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle> "We were travelling with an infant and stated that
                                    in our DMC special requests section when booking. The staff
                                    were exceptional in ensuring we had a splendid stay. Highly recommended!" </MDBCardTitle>
                                <MDBCardText> Raja from Malaysia </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter className='text-muted'> 4 days ago </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size='md'>
                        <MDBCard alignment='center' className='w-80 h-100'>
                            <MDBCardHeader style={{ fontSize: 'x-large' }}> Novotel Rotorua Lakeside Hotel </MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle> "Started with stress, ended with joy. Thanks DMC." </MDBCardTitle>
                                <MDBCardText> Michael from Australia </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter className='text-muted'> 7 days ago </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer>

    );
}