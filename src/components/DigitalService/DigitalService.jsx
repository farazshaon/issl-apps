import React from 'react'
import {Container, Col, Row, ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import ServicesImg from '../../assets/images/digital.png'
const DigitalService = () => {
  return (
    <>
    <Container>
        <Row>
            <Col md={4}>
                <div className='ServicesSideBar mt-5'>
                    <h4 className='mb-3'>All Services</h4>
                    <ul>
                        <li>
                            <Link to='/smsBusiness'>SMS Business</Link>
                            <FaChevronRight/>
                        </li>
                        <li>
                            <Link to='/platformManagement'>Platform Management</Link>
                            <FaChevronRight/>
                        </li>
                        <li>
                            <Link to='/shortCodesupport'>Short Code Support</Link>
                            <FaChevronRight/>
                        </li>
                       
                    </ul>
                </div>

            </Col>
            <Col md={8}>
                <div className="ServicesArea mt-5">
                    <img src={ServicesImg} className='img-fluid' alt="" />
                    <h4 className='mt-4 SectionHeading'>Digital Service</h4>
                   
                    <ListGroup>
                        <ListGroup.Item>Innovative thoughts and ideas for web & cell phone users</ListGroup.Item>
                        <ListGroup.Item>Value Addition through diversified products and services</ListGroup.Item>
                        <ListGroup.Item>Promised to acquire best customer centricity & experience</ListGroup.Item>
                    </ListGroup>
                </div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default DigitalService