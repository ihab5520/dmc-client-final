import { MDBContainer, MDBIcon, MDBAccordion, MDBAccordionItem, MDBBtn } from 'mdb-react-ui-kit';
import './faq.css';

export default function FAQ() {
    return (
        <>
            <MDBContainer className="faq-container ">
                <h1 className="faq-title">Frequently <span className="green-color">asked</span> questions <i className="fas fa-comment-alt"></i></h1>

                
                <MDBContainer className="mb-5">
                    <h1 className="faq-container-title"><MDBIcon icon="question-circle blue-text" /> Booking details</h1>
                    <h2 className="faq-subtitle">Click below for responses to Booking asked questions.</h2>

                    <MDBAccordion initialActive={1}>
                        <MDBAccordionItem className='fsm' collapseId={1} headerTitle="How can I get more information about the room or property's facility?">
                            You can find details about the property in your confirmation
                            email or on the property detail page. For anything else, you
                            can also contact property directly.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>

                        <MDBAccordionItem className='fsm' collapseId={2} headerTitle="When do I get a confirmation email?">
                            In most cases, you will receive this email along with the
                            booking voucher (PDF file) within 30 minutes of booking.
                            If you still haven't received it after that time, please
                            check your junk mail and/or spam filters. You can also download
                            or resend your booking voucher online.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>

                        <MDBAccordionItem className='fsm' collapseId={3} headerTitle="Where can I check my booking details and status?">
                            You can always view your booking details and status online by signing
                            in and selecting "My bookings" from the account menu. If you don't know
                            your sign in details, you can follow the "My bookings" link in your confirmation email.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem >

                        <MDBAccordionItem className='fsm' collapseId={4} headerTitle="Can you resend the booking voucher to me?">
                            DMC now provides you with a self-service option. Just by clicking
                            on the self-service link provided in your confirmation email, you will
                            be able to resend your booking voucher.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem >

                        <MDBAccordionItem className='fsm' collapseId={5} headerTitle="Can I add extra bed/baby cot in my room?">
                            The availability of extra bed/baby cot depends on the property. Additional
                            cost for children, including extra beds, are not included in the reservation
                            price unless stated. Please contact the property directly for this information.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem >

                        <MDBAccordionItem className='fsm' collapseId={6} headerTitle="Does the hotel provide airport transfer?">
                            When making a search you can choose 'Hotel/Airport transfer' in the facilities
                            section to help you with your search. Hotels will also provide this information
                            in the "Useful Information" section on the hotel page displayed on the website.
                            Some rooms come with complimentary airport transfer. If this is the case it will
                            be specified in the room type or will be noted in the grand total on the booking
                            form. Airport transfers are usually subject to a charge. If you would like to
                            arrange airport transfer, please contact the hotel directly.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBContainer>




                <MDBContainer className="mb-5">
                    <h1 className="faq-container-title"><MDBIcon icon="question-circle blue-text" /> Cancellation </h1>
                    <h2 className="faq-subtitle">Click below for responses to Cancellation asked questions.</h2>

                    <MDBAccordion initialActive={1}>
                        <MDBAccordionItem className='fsm' collapseId={1} headerTitle="How can I cancel my booking?">
                            You can cancel your booking online on the DMC website or app.
                            Any cancellation fees are determined by the property and listed
                            in your cancellation policy.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>

                        <MDBAccordionItem className='fsm' collapseId={2} headerTitle="Will I be charged if I cancel my booking?">
                            If you have a free cancellation booking, you won't pay a cancellation fee.
                            If your booking is no longer free to cancel or is non-refundable, you may
                            incur a cancellation fee. Any cancellation fees for a booking is determined
                            by the property.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>

                        <MDBAccordionItem className='fsm' collapseId={3} headerTitle="How do I know if my booking was cancelled?">
                            After you cancel a booking with us, you should receive an email confirming the
                            cancellation. Check your inbox and spam/junk mail folders.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>

                        <MDBAccordionItem className='fsm' collapseId={4} headerTitle="Where can I find the cancellation policy?">
                            When searching for the room, you should be able to find the booking conditions
                            and the cancellation policy along with other room information. You can also
                            find this information on your booking voucher.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>

                        <MDBAccordionItem className='fsm' collapseId={5} headerTitle="When will I get my refund?">
                            Refunds, if applicable, will immediately be submitted to our bank.
                            From the submission/refund date, banks may take up to 30 business
                            days to refund this amount, or until your next billing cycle.
                            The refund should be converted to your local currency by your credit card company.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>

                    </MDBAccordion>
                </MDBContainer>



                <MDBContainer className="mb-5">
                    <h1 className="faq-container-title"><MDBIcon icon="question-circle blue-text" /> Change a booking </h1>
                    <h2 className="faq-subtitle">Click below for responses to Changeing Booking asked questions.</h2>

                    <MDBAccordion initialActive={1}>
                        <MDBAccordionItem className='fsm' collapseId={1} headerTitle="I want to change my booking dates. How can I do this?">
                            DMC now provides you with a self-service option.
                            Select your booking and choose your new dates.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>

                        <MDBAccordionItem className='fsm' collapseId={2} headerTitle="I want to change the name of the lead guest. How can I do this?">
                            DMC now provides you with a self-service option.
                            Select your booking and update the guest name.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>

                        <MDBAccordionItem className='fsm' collapseId={3} headerTitle="How do I extend my stay?">
                            DMC now provides you with a self-service option.
                            Select your booking and choose your new dates.
                            Please note that not all bookings will allow changes to booking dates.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>

                        <MDBAccordionItem className='fsm' collapseId={4} headerTitle="How do I shorten my stay?">
                            DMC now provides you with a self-service option.
                            Select your booking and choose your new dates.
                            Please note that not all bookings will allow changes to booking dates.
                            <br />
                            <br />
                            <MDBBtn href='/register'>Sign in Now</MDBBtn>
                        </MDBAccordionItem>
                    </MDBAccordion>

                    <hr className="hr-faq" />
                    <h3 className="faq-contact-us"><MDBIcon icon="info-circle " /> Couldn't find an answer to your question? Please contact us at
                        <a href="mailto: ihab.saleh@dmcvoyage.com"><span className="email-faq"> ihab.saleh@dmcvoyage.com </span></a>.</h3>
                </MDBContainer>

                
            
            </MDBContainer>
        </>
    )
}