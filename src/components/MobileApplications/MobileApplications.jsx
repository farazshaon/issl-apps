import React from 'react'
import {Container, Col, Row, ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import ServicesImg from '../../assets/images/mobile.jpg'
const MobileApplications = () => {
  return (
    <>
    <Container>
        <Row>
            <Col md={4}>
                <div className='ServicesSideBar mt-5'>
                    <h4 className='mb-3'>All Services</h4>
                    <ul>
                        <li>
                            <Link to='/androidapp'>Mobile Applications</Link>
                            <FaChevronRight/>
                        </li>
                       
                       
                    </ul>
                </div>

            </Col>
            <Col md={8}>
                <div className="ServicesArea mt-5">
                    <img src={ServicesImg} className='img-fluid' alt="" />
                    <h4 className='mt-4 SectionHeading'>Mobile Applications</h4>
                   
                    <ListGroup>
                        <ListGroup.Item>Creative & Innovative Mobile Apps</ListGroup.Item>
                        <ListGroup.Item>Outstanding User Experience for Everyone</ListGroup.Item>
                        <ListGroup.Item>Support for Your App Anytime.</ListGroup.Item>
                    </ListGroup>
                </div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default MobileApplications