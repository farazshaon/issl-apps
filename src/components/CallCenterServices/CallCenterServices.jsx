import React from 'react'
import {Container, Col, Row, ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import ServicesImg from '../../assets/images/call-center-01.png'
const CallCenterServices = () => {
  return (
    <>
    <Container>
        <Row>
            <Col md={4}>
                <div className='ServicesSideBar mt-5'>
                    <h4 className='mb-3'>All Services</h4>
                    <ul>
                        <li>
                            <Link to='/inboundservices'>Inbound Services  </Link>
                            <FaChevronRight/>
                        </li>
                        <li>
                            <Link to='/outboundservices'>Outbound Services</Link>
                            <FaChevronRight/>
                        </li>
                        <li>
                            <Link to='/specializedservices'>Specialized Services</Link>
                            <FaChevronRight/>
                        </li>
                       
                    </ul>
                </div>

            </Col>
            <Col md={8}>
                <div className="ServicesArea mt-5">
                    <img src={ServicesImg} className='img-fluid' alt="" />

                    <h4 className='mt-4 SectionHeading'>Call Center Service</h4>
                    <p>We started our journey as a BPO solutions providers with Call Center services at the core of our service profile. From the very beginning we set about to establish an agile and efficient team of skilled individuals equipped with the best in class technology and working under a set of well-defined processes so that whatever the client requirement is, our team stands capable having the necessary means available to them at all times.</p>
                    <p>We boast our in-house developed cloud-based  Customer Relationship Management(CRM) tool that was built on years of experience in analyzing the different service modalities of Contact Center solutions. We are capable of capturing and delivering real time monitoring data and provide useful insight through a robust reporting mechanism focused to abjectly quantify the parameters associated with operational efficiency. Our team of trained agents and efficient team leads in association with these set processes and technical tools, are at the core of our unique proposition to establish and provide smooth support for any contact center operation with a minimum lead time.</p>
                    <p>Our inbound and outbound services include but are not limited to contact center services (Customer support, customer management, help desk support), order placement services, tele sales, collection and recovery calls, survey call service, information hotline and many more.</p>

                    <ListGroup>
                        <ListGroup.Item>Inbound and Outbound call center services</ListGroup.Item>
                        <ListGroup.Item>Real-Time Monitoring and Quality Control  </ListGroup.Item>
                        <ListGroup.Item>Robust Reporting Mechanism and Improvement Insight for Operational Activities</ListGroup.Item>
                        <ListGroup.Item>Cloud-based robust CRM</ListGroup.Item>
                        <ListGroup.Item>Could based Call Center Solutions for remote support   </ListGroup.Item>
                    </ListGroup>
                </div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default CallCenterServices