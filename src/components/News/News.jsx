import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PrimaryBtn from '../Button/PrimaryBtn'
function News() {
  return (
    <>
      <section className="news mt-5">
        <Container>
     
            <div className="NewsPost mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/inauguration-of-channel-partner-helpline_homeLatestBlogThumb.png" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">
                  <h4 className='text-color'>Inauguration of Channel Partner Helpline</h4>
                  <p>04/Nov/2021</p>
                  <p>ISSL will be serving as Channel Partner Hotline for Akash DTH, a concern of Beximco Communications Limited, through Contact Center Services and Technology.</p>
                 <PrimaryBtn>Read More</PrimaryBtn>
                </div>            
              </Col>
              
              </Row>
            </div>
            

            <div className="NewsPost mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/inauguration-of-channel-partner-helpline_homeLatestBlogThumb.png" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">
                  <h4 className='text-color'>Inauguration of Channel Partner Helpline</h4>
                  <p>04/Nov/2021</p>
                  <p>ISSL will be serving as Channel Partner Hotline for Akash DTH, a concern of Beximco Communications Limited, through Contact Center Services and Technology.</p>
                 <PrimaryBtn>Read More</PrimaryBtn>
                </div>            
              </Col>
              
              </Row>
            </div>
  
        </Container>
      </section>
    </>
  )
}

export default News