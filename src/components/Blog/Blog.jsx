import React from 'react'
import Cards from '../Cards/Cards'
import {Container, Col, Row} from 'react-bootstrap'
import Bolg1 from '../../assets/images/blog1.jpg'
import Bolg2 from '../../assets/images/blog2.jpg'
import Bolg3 from '../../assets/images/blog3.jpg'
import {Link} from 'react-router-dom'


function Blog({Heading}) {
  return (
    <>
    <section className="Blog mt-5 pb-5">
    <Container>
      <h4 className='text-center py-5 SectionHeading'>{Heading}</h4>
    <Row>

        <Col md={4} >
          <Link to='/BlogDetails'>
          <Cards>
            <img src={Bolg1}  alt="" />
            <div className="BlogContent">
              <h5>Business in the time of CORONA: Battling the odds in Call Center Operations</h5>
              
            </div>
           
          </Cards>
          </Link>
        </Col>
        <Col md={4} >
        <Link to='/BlogDetails2'>
          <Cards>
            <img src={Bolg2}  alt="" />
            <div className="BlogContent">
            <h5>The Job</h5>
              </div>
             
          </Cards>
          </Link>
        </Col>
        <Col md={4} >
        <Link to='/BlogDetails3'>
          <Cards>
            <img src={Bolg3}  alt="" />
            <div className="BlogContent">
              <h5>Business Process Outsourcing: A General Understanding</h5>
            </div>
             
          </Cards>
          </Link>
        </Col>


    </Row>
    </Container>
    </section>

   
    </>
  )
}

export default Blog