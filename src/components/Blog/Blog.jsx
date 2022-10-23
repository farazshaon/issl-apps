import React, {useState} from 'react'
import Cards from '../Cards/Cards'
import BlogItem from './BlogItem'
import {Container, Col, Row} from 'react-bootstrap'
function Blog() {

  const [BlogItems, setBlogItem] = useState(BlogItem)
  return (
    <>
    <section className="Blog mt-5">
    <Container>
    <Row>
      {BlogItems.map((item) => (
        <Col md={4}>
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