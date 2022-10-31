import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { FaEnvelopeOpenText } from "react-icons/fa";
function Footer() {
  return (
    <>
  
        <section className="Footer">
        <div className="Subscribe">
    <Container>
        <div className="SubscribeWrapper">
        <Row>
                <Col md={4}>
                <div className="d-flex align-items-center justify-content: center;">
                    <div className="p-2 bd-highlight">
                        <h4 className='text-light'><FaEnvelopeOpenText/></h4>
                    </div>
                    <div className="p-2 bd-highlight">
                    <h4 className='m-0 text-light'>Subscribe to our Newsletter</h4>
                    </div>
                    
                </div>
                    
                </Col>
                <Col md={8}>
                <div className="d-flex justify-content-between">
                    <div className="p-2 w-100">
                    <Form>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control type="email" className='p-3 rounded-0' placeholder="Enter email" />
                    
                    </Form.Group>

                    </Form>
                    </div>
                    <div className="p-2 bd-highlight">
                    <Button variant="dark" className='p-3 rounded-0' type="submit">
                        Subscribe
                    </Button>
                    </div>
                    
                </div>
                </Col>
            </Row>
        </div>
            
        </Container>
    </div>
            <Container>
                <Row>
                    <Col md={3}>
                      <div className="FooterAbout">
                      <h4 className='py-3'>ABOUT US</h4>
                        <p>Impel Service & Solutions Limited is a Business Process Outsourcing (BPO) firm, 
                            offering a comprehensive set of service and solutions for domestic & international markets with superior quality consideration.</p>
                      </div>
                    </Col>
                    <Col md={3}>
                        <div className="FooterContact">
                        <h4 className='py-3'>CONTACT US</h4>
                        <p>Corporate Address:
                            Nabila Tower, Plot-6 (Level-3), Road-7/D, Sector-9, Uttara,
                            Dhaka-1230, Bangladesh</p>

                        <p>Operational Address:
                            Flat-B1, House-71, Road-07, Sector-04, Uttara,
                            Dhaka-1230, Bangladesh</p>
                        </div>
                       
                    </Col>
                    <Col md={3}>
                        <div className="FooterLink">
                        <h4 className='py-3'>IMPORTANT LINKS</h4>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                        </div>
                        
                    </Col>
                    <Col md={3}>
                        <div className="FooterNews">
                        <h4 className='py-3'>OFFICE</h4>
                        <p>09614282828 (9AM to 6PM Except Fridays & Govt. Holidays)</p>
                        <p>+880 02-8931295</p>
                        </div>
                       
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Footer