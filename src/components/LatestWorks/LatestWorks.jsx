import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import Project1 from '../../assets/images/project1.jpg'
import Project2 from '../../assets/images/project2.jpg'
import Project3 from '../../assets/images/project3.jpg'
import Project4 from '../../assets/images/project4.jpg'
import Project5 from '../../assets/images/project5.jpg'
import PrimaryBtn from '../Button/PrimaryBtn'
import {Link} from 'react-router-dom'


function LatestWorks() {

  return (
    <>
        <section className="LatestWork mt-5">
            <Container>
                <h4 className='text-center py-5 SectionHeading'>Latest Works</h4>
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
        </section>
    </>
  )
}

export default LatestWorks