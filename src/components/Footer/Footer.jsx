import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { FaEnvelopeOpenText, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import {Link} from 'react-router-dom'
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

                        <Form.Control type="email" className='p-2 rounded-0 mt-2' placeholder="Enter email" />
                    
                    </Form.Group>

                    </Form>
                    </div>
                    <div className="p-2 bd-highlight">
                    <Button variant="dark" className='p-2 rounded-0 mt-2' type="submit">
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
                      <h5 className='py-3'>ABOUT US</h5>
                        <p>Impel Service & Solutions Limited is a Business Process Outsourcing (BPO) firm, 
                            offering a comprehensive set of service and solutions for domestic & international markets with superior quality consideration.</p>
                      
                        <div className="socailIcon">
                            <ul>
                                <li><a href="https://www.facebook.com/isslbpo/" rel="noopener" target='_blank'><FaFacebook className='facebook'/></a></li>
                                <li><a href="https://bd.linkedin.com/company/isslbpo" rel="noopener" target='_blank'> <FaLinkedin className='linkedin'/></a></li>
                                <li><a href="https://www.youtube.com/@impelserviceandsolutionsli5443/featured" rel="noopener" target='_blank'><FaYoutube className='youtube' /></a></li>
                               
                                
                            </ul>
                        </div>
                      </div>
                    </Col>
                    <Col md={3}>
                        <div className="FooterContact">
                        <h5 className='py-3'>CONTACT US</h5>
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
                        <h5 className='py-3'>IMPORTANT LINKS</h5>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About Us</Link>
                            </li>
                            <li>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                        </div>
                        
                    </Col>
                    <Col md={3}>
                        <div className="FooterNews">
                        <h5 className='py-3'>OFFICE</h5>
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