import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PrimaryBtn from '../Button/PrimaryBtn'
import {Link} from 'react-router-dom'
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
                 <Link to='/NewsRoomPages1'>
                 <PrimaryBtn>Read More</PrimaryBtn>
                 </Link>
                </div>            
              </Col>
              
              </Row>
            </div>
            

            <div className="NewsPost mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/picture11_homeLatestBlogThumb.png" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">
                  <h4 className='text-color'>Eid Mubarak - Eid Ul-Fitr 2021!</h4>
                  <p>13/May/2021</p>
                  <p>Let this Eid be the occasion to truly show our love and care for the people who need it the most. May Allah meaningfully accept all of our efforts towards humanity during this pandemic.</p>
                  <Link to='/NewsRoomPages2'>
                 <PrimaryBtn>Read More</PrimaryBtn>
                 </Link>
                </div>            
              </Col>
              
              </Row>
            </div>


            
            <div className="NewsPost mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/picture8_homeLatestBlogThumb.png" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">
                  <h4 className='text-color'>Happy New Year 2021!</h4>
                  <p>31/Dec/2020</p>
                  <p>Today, 31st December, 2020, we celebrated the end of the year 2020 and welcomed 2021 with a short but hearty celebration at our office. People who were at the office joined together in masks (yay 2020!) while others chimed in virtually!</p>
                  <Link to='/NewsRoomPages3'>
                 <PrimaryBtn>Read More</PrimaryBtn>
                 </Link>
                </div>            
              </Col>
              
              </Row>
            </div>


            
            <div className="NewsPost mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/2018-seip-ceremony_homeLatestBlogThumb.jpg" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">
                  <h4 className='text-color'>SEIP Certificate Award Ceremony from Impel Service & Solutions Limited (iSSL)</h4>
                  <p>06/Jan/2018</p>
                  <p>ISSL will be serving as Channel Partner Hotline for Akash DTH, a concern of Beximco Communications Limited, through Contact Center Services and Technology.</p>
                  <Link to='/NewsRoomPages4'>
                 <PrimaryBtn>Read More</PrimaryBtn>
                 </Link>
                </div>            
              </Col>
              
              </Row>
            </div>


            
            <div className="NewsPost mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/2017-digital-world_homeLatestBlogThumb.jpg" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">
                  <h4 className='text-color'>ISSL Participates at Digital World 2017</h4>
                  <p>10/Dec/2017</p>
                  <p>ISSL Team successfully participated at the biggest ICT expo of Bangladesh, Digital World 2017, organized by ICT Division from 6th Dec, 2017 to 9th Dec, 2017. ISSL had its own stall to shaocase their business scopes and contribution at BPO sectors at the BPO pavilion. Apart from the business scopes, job and training opportunity were provided to the enthusiastic and eligible candidates. Our honorable Managing Director Mr. Md. Aminul Hoque chaired the session: ICT Career Camp as a panelist representing Bangladesh Association of Call Center & Outsourcing (BACCO).</p>
                  <Link to='/NewsRoomPages5'>
                 <PrimaryBtn>Read More</PrimaryBtn>
                 </Link>
                </div>            
              </Col>
              
              </Row>
            </div>


            
            <div className="NewsPost mt-3 p-3">
            <Row className='g-4'>
              <Col md={3}>
                <img src="https://issl.com.bd/assets/media/2017-aiub-job-fair_homeLatestBlogThumb.jpg" className='img-fluid' alt="" />
              </Col>

              <Col md={9}>
                <div className="NewsPostTitle position-relative">
                  <h4 className='text-color'>AIUB Job Fair 2017</h4>
                  <p>10/Dec/2017</p>
                  <p>ISSL Employee Engagement Team participated at the AIUB Spring 2017 Job Fair at American International University of Bangladesh. This was a A premier opportunity to recruit leading candidates in all fields, the flagship event held on December 9, 2017, at the AIUB Banani Building from 10 AM onwards. We had a great day to promote our training programs to the AIUB students and collect resume for in-house employment opportunities.</p>
                  <Link to='/NewsRoomPages6'>
                    <PrimaryBtn>Read More</PrimaryBtn>
                 </Link>
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