import React from 'react'
import {Container, Col, Row, ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import ServicesImg from '../../assets/images/traning.jpg'
const TrainingHRSourcing = () => {
  return (
    <>
    <Container>
        <Row>
            <Col md={4}>
                <div className='ServicesSideBar mt-5'>
                    <h4 className='mb-3'>All Services</h4>
                    <ul>
                        <li>
                            <Link to='/training'>Training</Link>
                            <FaChevronRight/>
                        </li>
                        <li>
                            <Link to='/skilldevelopmentprogram'>SKILL DEVELOPMENT PROGRAM</Link>
                            <FaChevronRight/>
                        </li>
                        <li>
                            <Link to='/hrsourceing'>HR SOURCING</Link>
                            <FaChevronRight/>
                        </li>
                       
                    </ul>
                </div>

            </Col>
            <Col md={8}>
                <div className="ServicesArea mt-5">
                    <img src={ServicesImg} className='img-fluid' alt="" />
                    <h4 className='mt-4 SectionHeading'>Training & HR Sourcing</h4>
                   
                    <ListGroup>
                        <ListGroup.Item>Customized training package as per self/ organizational need.</ListGroup.Item>
                        <ListGroup.Item>Learning for career readiness and corporate grooming</ListGroup.Item>
                        <ListGroup.Item>Cost effective process reengineering for your bunch recruitment process.</ListGroup.Item>
                    </ListGroup>
                </div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default TrainingHRSourcing