import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
export const NewsRoom2 = () => {
  return (
    <>
      <section className='mt-5'>
      <Container>
            <h4>Inauguration of Channel Partner Helpline</h4>
            <p>04/Nov/2021 - Dhaka, Bangladesh</p>



            <div className="NewsPost mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/picture11_homeLatestBlogThumb.png" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">

                  <p>Let this Eid be the occasion to truly show our love and care for the people who need it the most. May Allah meaningfully accept all of our efforts towards humanity during this pandemic.</p>
                
                </div>            
              </Col>
              
              </Row>
            </div>



        </Container>
      </section>
    </>
  )
}
