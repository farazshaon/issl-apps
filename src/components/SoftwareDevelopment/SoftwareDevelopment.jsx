import React from 'react'
import {Container, Col, Row, ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import ServicesImg from '../../assets/images/software.jpg'
const SoftwareDevelopment = () => {
  return (
    <>
    <Container>
        <Row>
            <Col md={4}>
                <div className='ServicesSideBar mt-5'>
                    <h4 className='mb-3'>All Services</h4>
                    <ul>
                        <li>
                            <Link to='/customsoftwaredevelopment'>CUSTOM SOFTWARE DEVELOPMENT</Link>
                            <FaChevronRight/>
                        </li>
                        <li>
                            <Link to='/softwareconsulting'>SOFTWARE CONSULTING</Link>
                            <FaChevronRight/>
                        </li>
                        <li>
                            <Link to='/businesssoftware'>Business Software</Link>
                            <FaChevronRight/>
                        </li>
                       
                    </ul>
                </div>

            </Col>
            <Col md={8}>
                <div className="ServicesArea mt-5">
                    <img src={ServicesImg} className='img-fluid' alt="" />
                    <h4 className='mt-4 SectionHeading'>Software Development</h4>
                   
                    <ListGroup>
                        <ListGroup.Item>Develop Your Personalize Software</ListGroup.Item>
                        <ListGroup.Item>Build with Responsive Web Design in mind</ListGroup.Item>
                        <ListGroup.Item>Mobile apps for iOS and Android</ListGroup.Item>
                    </ListGroup>
                </div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default SoftwareDevelopment