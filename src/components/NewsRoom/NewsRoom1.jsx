import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
export const NewsRoom1 = () => {
  return (
    <>
       <section className=' mt-5'>
       <Container>
            <h4>Inauguration of Channel Partner Helpline</h4>
            <p>04/Nov/2021 - Dhaka, Bangladesh</p>


            <div className=" mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/inauguration-of-channel-partner-helpline_homeLatestBlogThumb.png" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">

                  <p>ISSL will be serving as Channel Partner Hotline for Akash DTH, a concern of Beximco Communications Limited, through Contact Center Services and Technology.</p>
                 
                </div>            
              </Col>
              
              </Row>
            </div>
        </Container>
       </section>
    </>
  )
}
