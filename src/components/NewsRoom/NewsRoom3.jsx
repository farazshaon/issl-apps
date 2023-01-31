import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
export const NewsRoom3 = () => {
  return (
    <>
       <section className='mt-5'>
       <Container>
            <h4>Inauguration of Channel Partner Helpline</h4>
            <p>04/Nov/2021 - Dhaka, Bangladesh</p>


            <div className="NewsPost mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/picture8_homeLatestBlogThumb.png" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">
                  <p>Today, 31st December, 2020, we celebrated the end of the year 2020 and welcomed 2021 with a short but hearty celebration at our office. People who were at the office joined together in masks (yay 2020!) while others chimed in virtually!</p>
                
                </div>            
              </Col>
              
              </Row>
            </div>
        </Container>
       </section>
    </>
  )
}
