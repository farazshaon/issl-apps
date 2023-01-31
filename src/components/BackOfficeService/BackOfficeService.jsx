import React from 'react'
import {Container, Col, Row, ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import ServicesImg from '../../assets/images/summary.jpg'
const BackOfficeService = () => {
  return (
    <>
    <Container>
        <Row>
            <Col md={4}>
                <div className='ServicesSideBar mt-5'>
                    <h4 className='mb-3'>All Services</h4>
                    <ul>
                        <li>
                            <Link to='/baddebtrecovery'>BAD DEBT RECOVERY  </Link>
                            <FaChevronRight/>
                        </li>
                        <li>
                            <Link to='/dataentrycontentmanagement'>DATA ENTRY & CONTENT MANAGEMENT</Link>
                            <FaChevronRight/>
                        </li>
                        <li>
                            <Link to='/digitalsupportservices'>DIGITAL SUPPORT SERVICES</Link>
                            <FaChevronRight/>
                        </li>
                       
                    </ul>
                </div>

            </Col>
            <Col md={8}>
                <div className="ServicesArea mt-5">
                    <img src={ServicesImg} className='img-fluid' alt="" />

                    <h4 className='mt-4 SectionHeading'>Back Office Service</h4>
                   
                    <ListGroup>
                        <ListGroup.Item>Upgraded customer satisfaction ensured for your customers.</ListGroup.Item>
                        <ListGroup.Item>Increased collection results in revenue growth.</ListGroup.Item>
                        <ListGroup.Item>Transition process management and business reengineering for your organization.</ListGroup.Item>
                    </ListGroup>
                </div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default BackOfficeService