import React from 'react'
import Cards from '../Cards/Cards'
import {Container, Col, Row} from 'react-bootstrap'
import SecondaryBtn from '../Button/SecondaryBtn'
import Bolg1 from '../../assets/images/blog1.png'
import Bolg2 from '../../assets/images/blog2.png'
import Bolg3 from '../../assets/images/blog3.png'
import Bolg4 from '../../assets/images/blog4.png'


function Blog({Heading}) {
  return (
    <>
    <section className="Blog mt-5 pb-5">
    <Container>
      <h4 className='text-center py-5 SectionHeading'>{Heading}</h4>
    <Row>

        <Col md={3} >
          <Cards>
            <img src={Bolg1}  alt="" />
            <div className="BlogContent">
              <h5>Business in the time of CORONA: Battling the odds in Call Center Operations</h5>
              
            </div>
           
          </Cards>
        </Col>
        <Col md={3} >
          <Cards>
            <img src={Bolg2}  alt="" />
            <div className="BlogContent">
            <h5>The Job</h5>
              </div>
             
          </Cards>
        </Col>
        <Col md={3} >
          <Cards>
            <img src={Bolg3}  alt="" />
            <div className="BlogContent">
              <h5>Business Process Outsourcing: A General Understanding</h5>
            </div>
             
          </Cards>
        </Col>
        <Col md={3} >
          <Cards>
            <img src={Bolg4}  alt="" />
            <div className="BlogContent">
              <h5>Job</h5>
            </div>
            
          </Cards>
        </Col>

    </Row>
    </Container>
    </section>

   
    </>
  )
}

export default Blog