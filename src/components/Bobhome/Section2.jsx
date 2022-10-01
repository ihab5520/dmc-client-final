import React from 'react';
import './Bobhome.css'
import { MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import logo from '../../Utilities/image/logo.png';

export default function Section2() {
    return (
        <MDBContainer>
            <div className='mb-4 pt-2'>
                <div className='d-flex moon2'>
                    <div className='d-flex moon3'>
                        <img src={logo} alt='DMC' />
                        <div className='moon4'>
                            <h5 className='moon5'> Become a VIP member to save and earn more!</h5>
                            <div className='moon6'>
                                <div className='moon7'>
                                    <div className='moon6'>
                                        <MDBIcon className='moon8' icon='check-circle' far style={{ color: 'white' }} /> 
                                        <p className='moon9'>Get up to 25% VIP discount</p>
                                    </div>
                                    <div className='moon6'>
                                        <MDBIcon className='moon8' icon='check-circle' far style={{ color: 'white' }} /> 
                                        <p className='moon9'>Best price guarantee</p>
                                    </div>
                                </div>
                                <div className='moon7'>
                                    <div className='moon6'>
                                        <MDBIcon className='moon8' icon='check-circle' far style={{ color: 'white' }} /> 
                                        <p className='moon9'>Free perks on select properties</p>
                                    </div>
                                    <div className='moon6'>
                                        <MDBIcon className='moon8' icon='check-circle' far style={{ color: 'white' }} /> 
                                        <p className='moon9'>Earn and redeem AgodaCash</p>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className='d-flex'>
                            <MDBBtn className='text-dark moon10' color='light' >
                                <a href='/register'>Sign up - it's free</a>
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>

        </MDBContainer>
    );
}