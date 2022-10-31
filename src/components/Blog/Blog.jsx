import React, {useState} from 'react'
import Cards from '../Cards/Cards'
import BlogItem from './BlogItem'
import {Container, Col, Row} from 'react-bootstrap'
function Blog({Heading}) {

  const [BlogItems, setBlogItem] = useState(BlogItem)
  return (
    <>
    <section className="Blog mt-5 pb-5">
    <Container>
      <h4 className='text-center py-5'>{Heading}</h4>
    <Row>
      {BlogItems.map((item, index) => (
        <Col md={3} key={index}>
          <Cards>
            <img src={item.src}  alt="" />
             <h5>{item.title}</h5>
          </Cards>
        </Col>
      ))}
    </Row>
    </Container>
    </section>

   
    </>
  )
}

export default Blog