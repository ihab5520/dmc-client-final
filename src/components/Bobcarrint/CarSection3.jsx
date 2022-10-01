import { MDBContainer, MDBIcon, MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import '../../pages/Help/faq.css';

export default function CarSection3() {
    return (
        <>

                <MDBContainer className="mb-5">
                    <h1 className="faq-container-title"><MDBIcon icon="question-circle blue-text" /> Questions you may have</h1>
                    <h2 className="faq-subtitle">Click below for responses to frequently asked questions.</h2>
                    
                    <MDBAccordion initialActive={1}>
                    <MDBAccordionItem className='fsm' collapseId={1} headerTitle='What do I need to hire a car ?'>
                        <strong>What do I need to hire a car ? </strong>
                        <br />
                        To book your car, all you need is a credit or debit card. When you pick the car up, you’ll need:
                        <ul>
                            <li>Your voucher / eVoucher, to show that you’ve paid for the car.</li>
                            <li>The main driver’s credit / debit card, with enough available funds for the car’s deposit.</li>
                            <li>Each driver’s full, valid driving licence, which they’ve held for at least 12 months (often 24).</li>
                            <li>Your passport and any other ID the car hire company needs to see.</li>
                        </ul>
                        Different car hire companies have different requirements, so please make sure you check the car’s terms and conditions as well.
                    </MDBAccordionItem>

                    <MDBAccordionItem className='fsm' collapseId={2} headerTitle='How old do I have to be to rent a car ?'>
                        <strong>How old do I have to be to rent a car?</strong>
                        <br />
                        For most car hire companies, the age requirement is between 21 and 70 years old. If you’re under 25 or over 70,
                        you might have to pay an additional fee.
                    </MDBAccordionItem>

                    <MDBAccordionItem className='fsm' collapseId={3} headerTitle='Can I book a hire car for someone else ?'>
                        <strong>Can I book a hire car for someone else ?</strong>
                        <br />
                        Yes, as long as they meet these requirements.
                        Just fill in their details while you’re making the reservation.
                    </MDBAccordionItem>

                    <MDBAccordionItem className='fsm' collapseId={4} headerTitle='How do I find the cheapest car hire deal ?'>
                        <strong>How do I find the cheapest car hire deal ?</strong>
                        <br />
                        We work with all the major international car hire brands
                        (and lots of smaller local companies) to bring you a huge choice of
                        cars at the very best prices. That’s how we can find you cheap car hire
                        deals at over 60,000 locations worldwide. To compare prices
                        and find your ideal car at an unbeatable price, just use our search form.
                    </MDBAccordionItem>

                    <MDBAccordionItem className='fsm' collapseId={5} headerTitle='What should I look for when I’m choosing a car ?'>
                        <strong>What should I look for when I’m choosing a car ?</strong>
                        <ul>
                            <li><strong>Space:</strong> You’ll enjoy your rental far more if you choose a car with plenty of room for your passengers and luggage.</li>
                            <li><strong>Fuel policy:</strong> Not planning on driving much? A Full to Full fuel policy can save you a lot of money.</li>
                            <li><strong>Location:</strong> You can’t beat an ‘on-airport’ pick-up for convenience, but an ‘off-airport’ pick-up with a shuttle bus can be much cheaper.</li>
                        </ul>
                    </MDBAccordionItem>
                    <MDBAccordionItem className='fsm' collapseId={6} headerTitle='Are all fees included in the rental price ?'>
                        <strong>Are all fees included in the rental price ?</strong> 
                        <br/>
                        The vast majority of our rentals include Theft Protection,
                        Collision Damage Waiver (CDW), local taxes,
                        airport surcharges and any road fees. You’ll pay for any ‘extras’
                        when you pick your car up, along with any young driver,
                        additional driver or one-way fees – but we’ll explain any additional
                        costs before you book your car (and taking your own child seats or
                        GPS can be an easy way to reduce your costs). For more details on what’sincluded,
                        just check the Ts&Cs of any car you’re looking at.
                    </MDBAccordionItem>
                    </MDBAccordion>

                    <hr className="hr-faq" />
                </MDBContainer>
        </>
    )
}