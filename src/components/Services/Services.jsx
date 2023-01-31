import React, {useState} from 'react'
import Cards from '../Cards/Cards'
import ServicesItem from './ServicesItem'
import {Container, Row, Col} from 'react-bootstrap'
import {NavLink  } from 'react-router-dom'

function Services({Heading}) {

    const [services, setService] = useState(ServicesItem)

  return (
    <>
        <section className='Services mt-5 pb-5'>
            <Container>
                <h4 className='text-center py-5 SectionHeading'>{Heading}</h4>
                <Row>

                {services.map((item, index) => (

                    <Col md={4} className='g-4'  key={index}>
                        <Cards>
                            <NavLink to={item.url}>
                            <div> <img src={item.src}  alt="" /></div>
                            <div><h5 className='mt-3'> {item.heading}</h5></div>
                            </NavLink>
                        </Cards>
                    </Col>
                ))}
                </Row>
            </Container>
        </section>
      
    </>
  )
}

export default Services