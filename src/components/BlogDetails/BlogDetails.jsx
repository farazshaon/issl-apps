import React from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import blog1 from '../../assets/images/blog-image.jpg'
import {Link} from 'react-router-dom'
export const BlogDetails = () => {
  return (
    <>
      <section className='blog-details mt-5'>
        <Container>
            <Row>
                <Col md={9}>
                    <img src={blog1} className='img-fluid' alt="" />
                    <h4>Business in the time of CORONA: Battling the odds in Call Center Operations</h4>
                    <p>The COVID-19 pandemic has dealt a critical blow to all business operations worldwide with most businesses brought down to a dead halt and others being forced to operate under severe restrictions. Call centers throughout the world have suffered from a massive blow from a double-edged sword. They are fielding in more calls from customers inquiring about online orders or services. But many of the people who would answer those calls either can’t get to work or are not equipped to work from home. Call volumes have sky rocketed - particularly for banks, financial service providers, e-commerce platforms, and health service providers. But the number of available agents have reduced significantly. Most of the call center service providers are either shutting down or downsizing amid containment efforts. Most big companies have put up a warning message in bright colors and large fonts at the top of their website - stating the limitations of customer support imposed by the shortage of support staff during the pandemic.</p>
                    <p>As businesses grapple with the economic impact of this pandemic, customer call centers are dealing with the people side of things. Call centers are not only experiencing a surge in call volumes, but also having to deal with more complex calls. Consumers will be calling in for more varied, involved and complex issues. Call duration is expected to increase by a large margin. Target abandonment rates will likely rise by a large margin, particularly due to the long wait in IVR. During this 'never seen before' unique situation, AI and chatbots are gaining more terrain. IBM saw a 40% increase in traffic to Watson Assistant from February to April of this year. But human to human interaction still remains the most desired form of communication when requiring support for a product or service.</p>
                    <p>Understanding the gravity of the situation at hand, we here at ISSL had been working tirelessly to shift our operations to a 'work from home' friendly approach since the beginning of official lockdown that started back in March. Facilitating our regular call center operations in a remote environment had been a gargantuan task but by the end of April, we had managed to shift most of our operations. Right from the beginning of lockdown, all our efforts had been focused towards this transition.</p>
                    <p>Within the first month of lockdown, we had shipped almost 100 laptops and an equal number of headsets to our agents. We also ensured high bandwidth internet connectivity for smooth call flow. Setting up these laptops would have been a breeze for the IT Support team, only if they were in the office! Contact center solution and CRM used by iSSL are both developed by our in-house software development team. Both these systems are cloud based which means they can be accessed from anywhere through a secure link. Remotely setting up the laptops, CRM and real time monitoring for supervisors and quality management team had been a daunting task for the IT Support team. We utilized remote desktop solutions like AnyDesk and painstakingly set up these laptops one by one remotely.</p>
                    <p>Next challenge was to establish the processes governing call center operations along with the associated teams that are participating in these processes. Efficient call center operation involves multiple teams within the value chain like CC agents, team leads, real time monitoring and reporting team that handles CRM data, training team, recruitment team, quality management team and last but not the least - the IT support team. All these teams needed to shift their regular operational and communication activities in an online environment, all the while remaining under lockdown restrictions.</p>
                    <p>Countless calls and online meetings took place among different teams in order to mitigate the technical challenges and to bridge the communication gap in online avenues. We managed to shift our day to day supervision, monitoring, task and roster management, and quality control activities in an online space by utilizing online meeting applications and our sheer dedication to keep things afloat. Scheduled meetings, proactive planning and a ‘service first’ approach have allowed us not only to keep day to day operational activities afloat but also to effectively manage recruitment and training activities for new CC agents.</p>
                    <p>All of our call center services are currently up and running with our trained and efficient agents providing 24/7 support through our secured cloud interface. This pandemic situation calls for a more vigilant presence and a higher quality of support for customers who are being forced to conduct day to day tasks from the confinements of their home. By ensuring Omni channel connectivity, we are committed to provide best in class support for our customers during this difficult time.</p>
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
