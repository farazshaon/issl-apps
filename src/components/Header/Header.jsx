import React, {useState} from 'react'
import {Container, Row, Col, Nav} from 'react-bootstrap'
import { FaMobile, FaHeadset } from "react-icons/fa";
import HeadItem from './HeadItem'
import {Link} from 'react-router-dom'
function Header() {
    const [Header, setHeader] = useState(HeadItem)
  return (
    <>
        <header className='Header'>
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <div className="HeaderLeft">
                            <Nav>
                                {Header.map((item, index) => (
                                    <Nav.Item key={index}>
                                        <Nav.Link className='text-dark' href={item.url}> <Link to={item.url}> {item.title}</Link> </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="HeaderRight d-flex justify-content-md-end">
                            <Nav >
                                <Nav.Item >
                                    <Nav.Link href="/home" className='text-dark'> <FaMobile/> 09614282828 </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className='text-dark'> <FaHeadset/> Chat Now</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link className='text-dark'>(9 AM to 6 PM Except Fridays & Govt. Holidays)</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    </>
  )
}

export default Header