import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import { FaIdBadge, FaPhoneAlt, FaRegThumbsUp, FaFileAlt, FaUserFriends, FaHeadSideVirus, FaListOl, FaRegCalendarAlt, FaPlayCircle } from "react-icons/fa";
import PrimaryBtn from '../Button/PrimaryBtn';
function HowWeWork() {
  return (
    <>
        <section className="work mt-5">
            <Container>
                <div className=''>
                    <h4 className='text-color'>ISSL’s 3 Stage Outsourcing Process</h4>
                    <p>One of the most burning concerns that organizations have while outsourcing their services to a third-party organization is -</p>
                    <p>Whether they have the required infrastructure, resources, expertise, and experience to provide better results?</p>
                    <p>What is the work approach followed by the outsourcing company</p>
                    <p>Would the process will uphold the same level customer experience as per expectation?</p>
                    <p>Are the process is going to be transparent through proper reporting and data management from the outsourcing vendor end keeping all confidentiality and data security?</p>
                    <p>We, as a leading BPO services provider following a calculative and well framed way forward for our customers to deliver ensured customer experience, multidimensional service enabling supports and maintaining service delivery through optimized and cost effective model for our operations.</p>
                  
                </div>

                <Row className='g-4'>
                    <h4 className='mt-5'>01 Relationship Establishment</h4>
                    <Col md={4}>
                    <Card >
                        
                        <Card.Body>
                        <div className=''>
                            <h2><FaIdBadge/></h2>
                        </div>
                            
                            <Card.Text>
                            Contact us through email, website or call center.
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card >
                        
                        <Card.Body>
                        <div className=''>
                            <h2><FaPhoneAlt/></h2>
                        </div>
                            
                            <Card.Text>
                                Our Business Development experts will get back to you
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card >
                        
                        <Card.Body>
                        <div className=''>
                            <h2><FaHeadSideVirus/></h2>
                        </div>
                            
                            <Card.Text>
                            Our team will get the scope understanding and brainstorming with you to set a calculated way forward for your business
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>

             
                </Row>

                <Row className='g-4'>
                    <h4 className='mt-5'>02 Business Plan & Proposal</h4>
                    <Col md={4}>
                    <Card >
                        
                        <Card.Body>
                        <div className=''>
                            <h2><FaFileAlt/></h2>
                        </div>
                            
                            <Card.Text>                    
                                Provide you detail business plan with technical and commercials.
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card >
                        
                        <Card.Body>
                        <div className=''>
                            <h2><FaRegThumbsUp/></h2>
                        </div>
                            
                            <Card.Text>
                            Contract signing and agreement.
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card >
                        
                        <Card.Body>
                        <div className=''>
                            <h2><FaListOl/></h2>
                        </div>
                            
                            <Card.Text>
                            Service modality and SLA fixation.
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>

             
                </Row>

                <Row className='g-4'>
                    <h4 className='mt-5'>03 Project Initiation</h4>
                    <Col md={4}>
                    <Card >
                        
                        <Card.Body>
                        <div className=''>
                            <h2><FaUserFriends/></h2>
                        </div>
                            
                            <Card.Text>
                            Resource deployment & Training
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card >
                        
                        <Card.Body>
                        <div className=''>
                            <h2><FaRegCalendarAlt/></h2>
                        </div>
                            
                            <Card.Text>
                            Technical and operational readiness
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card >
                        
                        <Card.Body>
                        <div className=''>
                            <h2><FaPlayCircle/></h2>
                        </div>
                            
                            <Card.Text>
                            Project Kick-off!

                            On-going reporting & feedback
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>

             
                </Row>

                <div className='mt-5'>
                    <h5>Outsource to ISSL</h5>
                    <p>We have robust infrastructure to ensure smooth transition of all kinds of projects from their initiation to completion. Moreover, at ISSL, we have incorporated best practices for information security and provide 360° quality management to all our clients.</p>
                    <p>If you would like to outsource to ISSL, please fill in our CONTACT US form. Our business development experts will get it touch with you immediately. Even if you are not yet ready to venture into outsourcing, you are always welcome to get in touch with us to find out more about outsourcing to India.</p>
                    <PrimaryBtn>Contact Us</PrimaryBtn>
                </div>
            </Container>
        </section>
    </>
  )
}

export default HowWeWork