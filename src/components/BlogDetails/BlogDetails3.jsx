import React from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import blog1 from '../../assets/images/blog-01-bpo.jpg'
import {Link} from 'react-router-dom'
export const BlogDetails3 = () => {
  return (
    <>
      <section className='blog-details mt-5'>
        <Container>
            <Row>
                <Col md={9}>
                    <img src={blog1} className='img-fluid' alt="" />
                    <h4>Business Process Outsourcing: A General Understanding</h4>
                    <p> Mohammad Aminul Hoque</p>

                   <p>There is a misconception on Business Process Outsourcing in general. The purpose of writing this article is to help and understand what Business Process Outsourcing (BPO) is and to clear which is also not covered under BPO although it is outsourced through businesses.</p>
                   <p>Definition of Business Process Outsourcing:</p>
                   <p>“Business process outsourcing (BPO) is the delegation of one or more IT-intensive business processes to an external provider that, in turn, owns, administrates and manages the selected processes based on defined and measurable performance metrics”.</p>
                   <p>When these outsourced processes require voice communication with customers, this is typically done using a Call center or contact center (the later term more specifically encompassing both outbound and inbound calls)</p>
                   <p>When this third party has been specifically established by a parent corporate enterprise to meet its needs (either the shared needs of several divisions or its need to locate these activities in another location for reasons, for example, of cost savings or risk management) then it is a referred to as a captive operation. These captives may be set up in the same country as the parent or elsewhere.</p>
                   <p>If the third party provider is located in another country then it is referred to as an offshore operation. Offshoring is therefore the practice of outsourcing to a third party in locations situated fairly far away from the parent company’s location, e.g. the USA ‘offshores’ to India.</p>
                   <p>Examples of BPO services:</p>
                    <p>Almost any business process that can be defined and ring-fenced can be outsourced. Examples include:</p>
                    <ul>
                        <li>Human resources and payroll administration</li>
                        <li>Finance and accounting back office functions, such as managing creditors, processing loan applications. Related call center functions include outbound tele-sales or dealing with inbound queries</li>

                        <li>Asset management back office functions</li>
                        <li>Banking and related data processing, such as credit card transaction processing</li>
                        <li>Property management services, such as property accounting functions or collections (which may make use of a call center)</li>
                        <li>Customer services and retention, including customer relationship management (CRM)</li>
                        <li>Expense claim administration</li>
                        <li>Insurance industry functions, such as claims processing and policy administration. Related call center activities include claims advice and acceptance, data cleaning and records up-dating</li>
                        <li>Electronic media design</li>
                        <li>Professional services, such as actuarial services, architectural and engineering design</li>
                        <li>Secretarial services – especially legal and related</li>
                        <li>Healthcare functions, such as audio transcription of medical records, diagnostics (e.g. analysis of ECG recordings), and payment claims processing. Related call center activities include health insurance advice, pre-clearance for hospital admissions, or outbound research surveys</li>
                        <li>Web site and database maintenance</li>
                        <li>Travel and tourism management functions such as hotel reservations, care hire and flight ticket bookings</li>
                        <li>ICT system administration</li>

                    </ul>
                    <h5>Mohammad Aminul Hoque</h5>
                    <p>Managing Director | Impel Service & Solutions Limited</p>
                    <p>Joint Secretary General | BACCO</p>
                    <h5>Comments</h5>
                    <p>No comments available.</p>
                    <h5>ADD REPLY</h5>

                    <p>Max Length: 2048 Characters.</p>
                    <Form>
                        <Form.Group className="mb-3">
                        </Form.Group>
                        <Row className="mb-3">
                        <Form.Group className="mb-3">
                    
                    <Form.Control as="textarea" placeholder='Enter your message' rows={3} className=' rounded-0'  />
                </Form.Group>
         
                            <Col>
                            <Form.Control placeholder="Name" className=' rounded-0'/>
                            </Col>
                            <Col>
                            <Form.Control placeholder="Email" className=' rounded-0' />
                            </Col>
                        </Row>
                 
                        
                 
                        <Button className='rounded-0' variant="warning" type="submit">
                            Submit
                        </Button>
                        </Form>
                </Col>
                <Col md={3}>
                    <h4>RECENT POSTS</h4>

                    <div>
                        <Link to='/BlogDetails'>
                        Business in the time of CORONA: Battling the odds in Call Center Operations
                        </Link>
                        <p>08/Oct/2020</p>
                    </div>

                    <div>
                        <Link to='/BlogDetails2'>
                        The Job
                        </Link>
                        <p>15/Jan/2018</p>
                    </div>

                    <div>
                        <Link to='/BlogDetails3'>
                        Business Process Outsourcing: A General Understanding
                        </Link>
                        <p>15/Jan/2018</p>
                    </div>
                </Col>
            </Row>
        </Container>  
      </section>  
    </>
  )
}
