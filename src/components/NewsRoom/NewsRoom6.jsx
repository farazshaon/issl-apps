import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
export const NewsRoom6 = () => {
  return (
    <>
       <section className='mt-5'>
       <Container>
            <h4>Inauguration of Channel Partner Helpline</h4>
            <p>04/Nov/2021 - Dhaka, Bangladesh</p>


            <div className="NewsPost mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/2017-aiub-job-fair_homeLatestBlogThumb.jpg" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">
                  <p>ISSL Employee Engagement Team participated at the AIUB Spring 2017 Job Fair at American International University of Bangladesh. This was a A premier opportunity to recruit leading candidates in all fields, the flagship event held on December 9, 2017, at the AIUB Banani Building from 10 AM onwards. We had a great day to promote our training programs to the AIUB students and collect resume for in-house employment opportunities.</p>
          
                </div>            
              </Col>
              
              </Row>
            </div>
        </Container>
       </section>
    </>
  )
}
