import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import About from '../../assets/images/about.png'
import { FaAward } from "react-icons/fa";
function AboutUs() {
  return (
    <>
       <section className="AboutUs mt-5">
       <Container>
            <Row>
                <Col md={6}>
                    <div className="aboutImg">
                       <a href=""> <img src={About} className="img-fluid" alt="" /></a> 
                       <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                        <span className="four"></span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="aboutArea">
                        <h5>About <span>Us</span> </h5>
                        <h2>About Our Company</h2>
                        <p> <strong>Impel Service & Solutions Limited (iSSL)</strong> has been operating as a Business Process Outsourcing (BPO) firm since 2011, offering a comprehensive set of IT services and solutions for domestic & international markets with superior quality considerations. The key proposition of our services are quality-centric processes with a strong emphasis on information security, state of the art infrastructure, robust reporting mechanism, data driven control overhead, and high-end resource development strategy.
                             We believe in building steady and long term relationships as a service partner by providing a one-stop solution for BPO, IT, and ITes support & services.</p>
                             <div className="d-flex justify-content-between mt-5">
                                <div className="p-2 "><Button variant="warning">KNOW MORE</Button></div>
                                <div className="p-2 "><h4> <FaAward/> 10+ Years Experience</h4></div>
                            </div>       
    
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
    </>
  )
}

export default AboutUs