import React, {useState} from 'react'
import DetailsImg from '../../assets/images/proj-details.png'
import {Container, Row, Col} from 'react-bootstrap'
import DetailsData from './DetailsData'
import WhyUs from './WhyUsData'

function DetailsPages() {
    const [BusinessData, setBusinessData] = useState(DetailsData)
    const [whyData, setWhyData] = useState(WhyUs)
  return (
    <>
        <section className="Details mt-5">
        <Container>
            <Row>
                <Col md={5}>
                    <img src={DetailsImg} className='img-fluid' alt="" />
                </Col>
                <Col md={7}>
                    <div className="DetailseContent">
                        <h4>INBOUND SERVICES</h4> 
                        <p>To create and maintain a good relationship with your customers of your organization, a single point of customer support is a must need for your venture. It is proven that you can create promoters through effective and efficient customer service and on the contrary 58% of you Customer
                             leaves you because of poor customer service! Why not outsource your additional tasks to us and let us keep the smiles of your customer counting..!</p>
                        <p>
                        ISSL have extensive experience in handling customer queries and complaints for different clients through call center through maintaining 24/7/365 operations with high quality call structure and monitoring from both resource and quality management aspect. Our services are scalable and designed to meet your specific needs. No matter it’s a small non-profit organization or a global corporation, we have the resources necessary to implement a solution that not only meets your specs, but also your budget and business integrity.
                        </p>
                    </div>
                </Col>



                <h4 className='mt-5 mb-5 text-color'>BUSINESS SEGMENT</h4>
                {BusinessData.map((item, index) => (
                    <Col md= {6} key={index}>
                    <div className="BusinessSegment">
                        <img src={item.src} alt="" />
                        <h4>{item.heading}</h4>
                        <p>{item.text}</p>
                    </div>
                </Col>
                ))}
                
               <h4 className='mt-5 mb-5 text-color'>WHY US!</h4>
               {whyData.map((item, index) => (
                 <Col md= {6} key={index}>
                 <div className="BusinessSegment">
                     <img src={item.src} alt="" />
                     <h4>{item.heading}</h4>
                     <p>{item.text}</p>
                 </div>
             </Col>
               ))}
            </Row>
        </Container>
        </section>
    </>
  )
}

export default DetailsPages