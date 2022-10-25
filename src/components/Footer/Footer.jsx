import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Subscribe from '../Subscribe/Subscribe'
function Footer() {
  return (
    <>
    <Subscribe/>
        <section className="Footer">
            
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