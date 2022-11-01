import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { FaHeadset, FaEnvelope, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import PrimaryBtn from '../Button/PrimaryBtn'

function ContactUs() {
  return (
    <>
        <section className="ContactUs p-5 mt-5 mb-5">
            <Container>
                <Row>
                    <Col md={5}>
                        <h2 className='mb-5 text-light'>Timely Service Delivery & Incident Resolutions!!</h2>
                    <div className="text-light d-flex  ">
                        <div className="p-2 ">
                            <FaHeadset/>
                        </div>
                        <div className="p-2 ">
                            <p>09614282828 (9AM to 6PM Except Fridays & Govt. Holidays)</p>
                        </div>  
                    </div>

                    <div className="text-light d-flex ">
                        <div className="p-2 ">
                            <FaEnvelope/>
                        </div>
                        <div className="p-2 ">
                            <p>info@issl.com.bd</p>
                        </div>  
                    </div>

                    <div className="text-light d-flex  ">
                        <div className="p-2 ">
                            <FaMapMarkerAlt/>
                        </div>
                        <div className="p-2 ">
                            <p>Flat-B1, House-71, Road-07, Sector-04, Uttara, Dhaka-1230, Bangladesh</p>
                        </div>  
                    </div>

                    <div className="text-light d-flex ">
                        <div className="p-2 ">
                            <FaMobileAlt/>
                        </div>
                        <div className="p-2 ">
                            <p>+880 02-8931295</p>
                        </div>  
                    </div>
                    </Col>

                    <Col md={7}>
                        <div className='bg-light py-5 px-5'>
                            <h4 className='mb-5'>Request A Quote</h4>
                        <Form>
                        <Form.Group className="mb-3">
                            
                            <Form.Control type="text" placeholder="Enter Name" className='rounded-0' />
                       
                        </Form.Group>
                        <Row className="mb-3">
                            <Col>
                            <Form.Control placeholder="Enter Email" className=' rounded-0'/>
                            </Col>
                            <Col>
                            <Form.Control placeholder="Enter Phone Number" className=' rounded-0' />
                            </Col>
                        </Row>
                        <Form.Select className="mb-3 rounded-0">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Group className="mb-3" >
                           
                            <Form.Control type="text" placeholder="Subject" className=' rounded-0' />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                    
                            <Form.Control as="textarea" placeholder='Your Requirements...' rows={3} className=' rounded-0'  />
                        </Form.Group>
                 
                        <PrimaryBtn className='rounded-0' variant="warning" type="submit">
                            Submit
                        </PrimaryBtn>
                        </Form>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default ContactUs