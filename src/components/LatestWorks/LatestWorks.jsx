import React, {useState } from 'react'
import {Container, Row, Col, Card, Modal, Button} from 'react-bootstrap'
import Project1 from '../../assets/images/project1.jpg'
import Project2 from '../../assets/images/project2.jpg'
import Project3 from '../../assets/images/project3.jpg'
import Project4 from '../../assets/images/project4.jpg'
import Project5 from '../../assets/images/project5.jpg'
import PrimaryBtn from '../Button/PrimaryBtn'
import {Link} from 'react-router-dom'


function LatestWorks() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  return (
    <>
        {/* <section className="LatestWork mt-5">
            <Container>
                <h4 className='text-center py-5 SectionHeading'>Glimpse of our Works</h4>
                <Row className='g-5'>
                    <Col md={4}>
                        
                    <Card className='rounded-0 WorkCard'>
                        <Card.Img variant="top" className='LatestWorkCard rounded-0' src={Project1} />
                        <Card.Body>
                            <Card.Title>bacco.org.bd</Card.Title>
                            <Card.Text>
                                Informative Website, Web Design, Web Development, Web Service
                            </Card.Text>
                            
                        </Card.Body>
                        <div className="CardOverlay">
                           <PrimaryBtn><a href="https://www.bacco.org.bd/" rel="noopener" target='_blank'>Details </a></PrimaryBtn> 
                        </div>
                        </Card>
                   
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard'>
                        <Card.Img variant="top" className='rounded-0' src={Project2} />
                        <Card.Body>
                            <Card.Title>issl.com.bd</Card.Title>
                            <Card.Text>
                                Informative Website, Web Design, Web Development, Web Service
                            </Card.Text>
                            
                        </Card.Body>
                        <div className="CardOverlay">
                        <PrimaryBtn><a href="https://www.issl.com.bd/" rel="noopener" target='_blank'>Details </a></PrimaryBtn> 
                        </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard'>
                        <Card.Img variant="top" className='rounded-0' src={Project3} />
                        <Card.Body>
                            <Card.Title>skillforpeople.com</Card.Title>
                            <Card.Text>
                            
                            Informative Website, Web Design, Web Development, Web Service
                            </Card.Text>
                            
                        </Card.Body>
                        <div className="CardOverlay">
                        <PrimaryBtn><a href="#" rel="noopener" target='_blank'>Details </a></PrimaryBtn> 
                        </div>
                        </Card>
                    </Col>


                    <Col md={4}>
                    <Card className='rounded-0 WorkCard'>
                        <Card.Img variant="top" className='rounded-0' src={Project4} />
                        <Card.Body>
                            <Card.Title>gcei.info</Card.Title>
                            <Card.Text>
                            
                            Informative Website, Web Design, Web Development, Web Service
                            </Card.Text>
                            
                        </Card.Body>
                        <div className="CardOverlay">
                        <PrimaryBtn><a href="#" rel="noopener" target='_blank'>Details </a></PrimaryBtn> 
                        </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard'>
                        <Card.Img variant="top" className='rounded-0' src={Project5} />
                        <Card.Body>
                            <Card.Title>mushaba.com.bd</Card.Title>
                            <Card.Text>
                           
                            Informative Website, Web Design, Web Development, Web Service
                            </Card.Text>
                            
                        </Card.Body>
                        <div className="CardOverlay">
                        <PrimaryBtn><a href="#" rel="noopener" target='_blank'>Details </a></PrimaryBtn> 
                        </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard'>
                        <Card.Img variant="top" className='rounded-0' src={Project2} />
                        <Card.Body>
                            <Card.Title>issl.com.bd</Card.Title>
                            <Card.Text>
                          
                            Informative Website, Web Design, Web Development, Web Service
                            </Card.Text>
                            
                        </Card.Body>
                        <div className="CardOverlay">
                        <PrimaryBtn><a href="#" rel="noopener" target='_blank'>Details </a></PrimaryBtn> 
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section> */}


<section className="mt-5">


        {/* model one */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="primary" onClick={handleShow2}>
        Launch demo modal
      </Button>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

            <Container>
                <Row className='g-5'>
                    <Col md={4}>
                        
                    <Card className='rounded-0 WorkCard single-service style-two text-center' onClick={handleShow}>
                        <Card.Img variant="top" className='LatestWorkCard rounded-0' src='http://issl.com.bd/assets/media/accounting-software2_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>ACCOUNTING & FINANCE MANAGEMENT SOFTWARE</h4>
                            </Card.Title>
                        </Card.Body>
                        </Card>
                   
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center'>
                        <Card.Img variant="top" className='rounded-0' src= 'http://issl.com.bd/assets/media/inventory-software2_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>INVENTORY MANAGEMENT SYSTEM</h4>
                            </Card.Title>
                           
                            
                        </Card.Body>
                     
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center'>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/hresource_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>HUMAN RESOURCE MANAGEMENT SOFTWARE</h4>
                            </Card.Title>
                           
                            
                        </Card.Body>
                        
                        </Card>
                    </Col>


                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center'>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/monitoring_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>E-LEARNING MANAGEMENT SYSTEM</h4>
                            </Card.Title>
                           
                        </Card.Body>
                       
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center'>
                        <Card.Img variant="top" className='rounded-0' src= 'http://issl.com.bd/assets/media/cheque-book_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>CHEQUE BOOK REQUISITION MANAGEMENT SYSTEM</h4>
                            </Card.Title>
                           
                            
                        </Card.Body>
                       
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center'>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/e-commerce_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>e-COMMERCE PLATFORM</h4>
                            </Card.Title>
                        </Card.Body>
                       
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center'>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/call-center-crm-01_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>CUSTOMER RELATIONSHIP MANAGEMENT SOLUTION</h4>
                            </Card.Title>
                        </Card.Body>
                       
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center'>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/school-website_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>SCHOOL WEBSITE CMS</h4>
                            </Card.Title>
                        </Card.Body>
                       
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center'>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/job-portal_1_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>JOB PORTAL</h4>
                            </Card.Title>
                        </Card.Body>
                       
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default LatestWorks