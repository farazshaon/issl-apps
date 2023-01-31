import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
export const NewsRoom5 = () => {
  return (
    <>
        <section className='mt-5'>

        <Container>
            <h4>Inauguration of Channel Partner Helpline</h4>
            <p>04/Nov/2021 - Dhaka, Bangladesh</p>


            <div className="mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/2017-digital-world_homeLatestBlogThumb.jpg" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">

                  <p>ISSL Team successfully participated at the biggest ICT expo of Bangladesh, Digital World 2017, organized by ICT Division from 6th Dec, 2017 to 9th Dec, 2017. ISSL had its own stall to shaocase their business scopes and contribution at BPO sectors at the BPO pavilion. Apart from the business scopes, job and training opportunity were provided to the enthusiastic and eligible candidates. Our honorable Managing Director Mr. Md. Aminul Hoque chaired the session: ICT Career Camp as a panelist representing Bangladesh Association of Call Center & Outsourcing (BACCO).</p>
              
                </div>            
              </Col>
              
              </Row>
            </div>
        </Container>
        </section>
    </>
  )
}
