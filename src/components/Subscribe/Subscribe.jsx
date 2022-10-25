import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { FaEnvelopeOpenText } from "react-icons/fa";
function Subscribe() {
  return (
    <>
    <section className="Subscribe">
    <Container>
        <div className="SubscribeWrapper">
        <Row>
                <Col md={4}>
                <div className="d-flex align-items-center justify-content: center;">
                    <div className="p-2 bd-highlight">
                        <h4 className='text-light'><FaEnvelopeOpenText/></h4>
                    </div>
                    <div className="p-2 bd-highlight">
                    <h4 className='m-0 text-light'>Subscribe to our Newsletter</h4>
                    </div>
                    
                </div>
                    
                </Col>
                <Col md={8}>
                <div className="d-flex justify-content-between">
                    <div className="p-2 w-100">
                    <Form>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control type="email" className='p-3 rounded-0' placeholder="Enter email" />
                    
                    </Form.Group>

                    </Form>
                    </div>
                    <div className="p-2 bd-highlight">
                    <Button variant="dark" className='p-3 rounded-0' type="submit">
                        Subscribe
                    </Button>
                    </div>
                    
                </div>
                </Col>
            </Row>
        </div>
            
        </Container>
    </section>
        
    </>
  )
}

export default Subscribe