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
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);
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
                    <Card className='rounded-0 WorkCard single-service style-two text-center'  onClick={handleShow2}>
                        <Card.Img variant="top" className='rounded-0' src= 'http://issl.com.bd/assets/media/inventory-software2_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>INVENTORY MANAGEMENT SYSTEM</h4>
                            </Card.Title>
                           
                            
                        </Card.Body>
                     
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center' onClick={handleShow3}>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/hresource_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>HUMAN RESOURCE MANAGEMENT SOFTWARE</h4>
                            </Card.Title>
                           
                            
                        </Card.Body>
                        
                        </Card>
                    </Col>


                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center' onClick={handleShow4}>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/monitoring_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>E-LEARNING MANAGEMENT SYSTEM</h4>
                            </Card.Title>
                           
                        </Card.Body>
                       
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center' onClick={handleShow5}>
                        <Card.Img variant="top" className='rounded-0' src= 'http://issl.com.bd/assets/media/cheque-book_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>CHEQUE BOOK REQUISITION MANAGEMENT SYSTEM</h4>
                            </Card.Title>
                           
                            
                        </Card.Body>
                       
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center' onClick={handleShow6}>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/e-commerce_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>e-COMMERCE PLATFORM</h4>
                            </Card.Title>
                        </Card.Body>
                       
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center' onClick={handleShow7}>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/call-center-crm-01_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>CUSTOMER RELATIONSHIP MANAGEMENT SOLUTION</h4>
                            </Card.Title>
                        </Card.Body>
                       
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center' onClick={handleShow8}>
                        <Card.Img variant="top" className='rounded-0' src='http://issl.com.bd/assets/media/school-website_homeLatestBlogThumb.png' />
                        <Card.Body>
                            <Card.Title>
                                <h4>SCHOOL WEBSITE CMS</h4>
                            </Card.Title>
                        </Card.Body>
                       
                        </Card>
                    </Col>

                    <Col md={4}>
                    <Card className='rounded-0 WorkCard single-service style-two text-center' onClick={handleShow9}>
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



                    {/* model one */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <img src="http://issl.com.bd/assets/img/services/solutions/business-software/icon-accounting.png" className='img-fluid-2' alt="" /> <span className='text-color'>ACCOUNTING & FINANCE MANAGEMENT SOFTWARE</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Intuitive Accounting & Finance application for managing accounts and finance related processes from a centralized system. Ideal for small to medium sized businesses with ample provisions for future scalability.</p>
            <p>Platform Features</p>
            <ul>
                <li>Module control and dynamic forms</li>
                <li>Intuitive & Informative Dashboard</li>
                <li>Administrative Organizational Settings</li>
            </ul>
            <p>Functional Features</p>
            <ul>
                <li>Transactions Database</li>
                <li>Multi branch accounts management</li>
                <li>Multi-type Voucher Management</li>
                <li>Voucher entry verification</li>
                <li>Cost Center Management</li>
                <li>Journal Entry</li>
                <li>Tender Management</li>
                <li>General Ledger</li>
                <li>Trial Balance (segregated & cumulative)</li>
            </ul>
            <p>Reporting Features</p>
            <ul>
                <li>Financial Statements</li>
                <li>Real time ledger report</li>
                <li>Other pre-defined accounting reports</li>
            </ul>
            <p>Benefits</p>
            <ul>
                <li>Centralized database</li>
                <li>Access Matrix and audit trail ensures data tampering</li>
                <li>24/7 Data Availability & Easy Accessibility</li>
                <li>Ensures privacy, integrity and security of sensitive data</li>
                <li>Accounts evaluation based on cumulative data</li>
                <li>Streamlines business processes and inter department communication</li>

            </ul>
            <h5 className='text-color'>Target Industry</h5>
            <p>Government or non-government organization, small business account ,builders company, or any accounting related calculation.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> 
          {/* model end */}

        {/* model 2 */}
          <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title><img src="http://issl.com.bd/assets/img/services/solutions/business-software/icon-inventory.png" className='img-fluid-2' alt="" /> <span className='text-color'>INVENTORY SOFTWARE</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Our Inventory Management System is a comprehensive solution for managing, automating & streamlining supply chain management and related processes. The application is designed to simplify SCM processes like product management, recall, quality control, item/vendor/carrier management, and chain of custody.</p>
            <p>Platform Features</p>
            <ul>
            <li>Dynamic Product & Item Category</li>
                <li>Dynamic Terms of Payment</li>
                <li>Role Based Access Control</li>
            </ul>
            <p>Functional Features</p>
            <ul>

                <li>Capture Detailed Product Information</li>
                <li>Vendor/Supplier Management</li>
                <li>Transaction Management</li>
                <li>Purchase Order Management</li>
                <li>Bill Payment & Processing</li>
                <li>Credit & Cheque Management</li>
                <li>Generate Sales Order</li>
                <li>Detailed Cost Management</li>
                <li>Salary & Wages Calculation</li>
                <li>Invoice Generation</li>
                <li>Damaged Goods Process Management</li>
                <li>Credit adjustment& Unit wise credit</li>
                <li>Product Transfer between locations</li>
                <li>Consumption and requisition management</li>
            </ul>
            <p>Reporting Features</p>
            <ul>
                <li>Product damage, transfer and return report</li>
                <li>Multilateral Stock Report</li>
                <li>Extensive Report Library with predefined reports</li>
            </ul>
        
            <h5 className='text-color'>TARGET INDUSTRY</h5>
            <p>Product based business, Builders company, ecommerce business and many more.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
      {/* end modal */}

        {/* model 3 */}
        <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title><img src="http://issl.com.bd/assets/img/services/solutions/business-software/icon-human-resource.png" className='img-fluid-2' alt="" /> <span className='text-color'>INVENTORY SOFTWARE</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>iSSL HRM is multilateral office management software that facilitates various organizational processes like human resource management, IT & operations management, accounting & finance, inter-department communication, internal issue tracking, and streamlining of overall business processes.</p>
            <p>Platform Features</p>
            <ul>
            <li>Enable/Disable modules according to business needs</li>
                <li>Informative Employee Dashboard with notifications</li>
                <li>System wide & selective audience notice</li>
                <li>Administrative Organizational Settings</li>
            </ul>
            <p>Functional Features</p>
            <ul>

                <li>Employee Database Management</li>
                <li>Recruitment Management</li>
                <li>Leave Management with approval</li>
                <li>Attendance Management</li>
                <li>Requisition & Conveyance management</li>
                <li>Training Management</li>
                <li>Roster Management</li>
                <li>Internal support ticket management</li>
                <li>Holiday & Birthday Notification</li>
                <li>Payroll Management</li>
                <li>Meeting Room Booking</li>

            </ul>
            <p>Reporting Features</p>
            <ul>
                <li>Multiple pre-defined reports -</li>
                <li>Salary Reports</li>
                <li>Employee Reports</li>
                <li>Leave & Attendance Reports and many more</li>

            </ul>
        
            <h5 className='text-color'>TARGET INDUSTRY</h5>
            <p>Government, nonproﬁt, professional services, bank, insurance, mobile industry, RMG sector.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>


              {/* model 4 */}
              <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title><img src="http://issl.com.bd/assets/media/monitoring_homeLatestBlogThumb.png" className='img-fluid-2' alt="" /> <span className='text-color'>E-LEARNING MANAGEMENT SYSTEM</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>The E-Learning Management System is a web-based system for maintaining electronic learning content and performing related administrative functions from a centralized location. The application enables secure storage and transfer methods for curricular data and a wide range of administrative features for managing curricular activities.</p>
            <p>Platform Features</p>
            <ul>
            <li>Separate Web portals for student, faculty & administration</li>
                <li>Role Based Access Control Mechanism</li>
                <li>Configure & Send auto generated absent email & sms</li>
                <li>System wide or selective audience Notice</li>
                <li>Holiday Announcements & Manage holiday calendar</li>
    
            </ul>
            <p>Functional Features</p>
            <ul>

                <li>Administrative Activity Management</li>
                <li>Assign Courses to students</li>
                <li>Admin Office Employee management</li>
                <li>Faculty Management</li>
                <li>Exam schedule management</li>
                <li>Exam attendance & grading</li>
                <li>Student/Faculty/Employee Attendance management</li>
                <li>Student admission management & Bulk admission</li>
                <li>Create, Publish, and Manage Assignments</li>
                <li>Receive, view and grade online submissions</li>
                <li>Upload and manage course materials</li>

            </ul>
            <p>Reporting Features</p>
            <ul>
                <li>Student Performance report</li>
                <li>Attendance Report</li>
                <li>Assignment Grade Report</li>
                <li>Provision for user defined custom reports</li>

            </ul>
        
            <h5 className='text-color'>TARGET INDUSTRY</h5>
            <p>Government, nonproﬁt, professional services, bank, insurance, mobile industry, RMG sector.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>


    {/* model 5 */}
    <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
          <Modal.Title><img src="http://issl.com.bd/assets/img/services/solutions/business-software/icon-checkbook-orange.png" className='img-fluid-2' alt="" /> <span className='text-color'>CHEQUE BOOK REQUISITION MANAGEMENT SYSTEM</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Cheque Book Requisition Management System is a web based solution for Cheque Book Requisition, Stocking and Delivery to Customers in any Online and Offline Banking System. By This software customer can place requisition from any Branch and can have delivery from any other branch while Account Opening Branch is different from both the requested and delivered branch.</p>
            <p>FEATURES LIST</p>
            <ul>
                <li>Affordable and Easy to Implement</li>
                <li>Open Source Platform (LAMP)</li>
                <li>Web based solution</li>
                <li>Highly Secured and Robust System</li>
                <li>Integration with Core Banking Software</li>
                <li>Web Service Enabled</li>
                <li>Cross Branch Requisition Facility</li>
                <li>Requisition Tracking from Any Branch</li>
                <li>Cheque Delivery from Any Branch</li>
    
            </ul>


            <h5 className='text-color'>TARGET INDUSTRY</h5>
            <p>Government or non-government bank, insurance.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>

    {/* model 6 */}
    <Modal show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
          <Modal.Title><img src="http://issl.com.bd/assets/img/services/solutions/business-software/icon-ecommerce.png" className='img-fluid-2' alt="" /> <span className='text-color'>e-COMMERCE PLATFORM</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>We have a powerful e-commerce solution enriched with a robust set of features developed for supporting medium to large online shops/businesses. Loaded with industry standard features and an intuitive shopping cart makes it an ideal choice for businesses that want to get their feet off the mark quickly.</p>
            <p>Platform Features</p>
            <ul>
                <li>Dynamic Product & Product Catalog Management</li>
                <li>Customer & Vendor Account Management</li>
                <li>Payment gateway integration support</li>
            </ul>
            <p>Functional Features</p>
            <ul>
                <li>Unlimited Product Management</li>
                <li>Product Catalog Management</li>
                <li>Vendor Profile Management</li>
                <li>Internal Product Inventory</li>
                <li>Order Tracking System</li>
                <li>Delivery Management with Multi step delivery system</li>
                <li>Promotion and discount code</li>
                <li>Intuitive shopping cart</li>
                <li>Product Promotions</li>
                <li>Vendor trust certification</li>
            </ul>

            <p>Reporting Features</p>
            <ul>
                <li>Financial Statements</li>
                <li>Real time ledger report</li>
                <li>Other pre-defined accounting reports</li>
            </ul>
            <h5 className='text-color'>TARGET INDUSTRY</h5>
            <p>Online product base buy and selling company.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>



    {/* model 7 */}
    <Modal show={show7} onHide={handleClose7}>
        <Modal.Header closeButton>
          <Modal.Title><img src="http://issl.com.bd/assets/img/services/solutions/business-software/icon-callcenter.png" className='img-fluid-2' alt="" /> <span className='text-color'>CRM SOLUTION</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Our Customer relationship management (CRM) is a management system used in call center to enhance business relationship with customers. By analyzing the customer's' history with agents, our system will help you connect with current and potential customers and helps growing your company.</p>
            <p>Platform Features</p>
            <ul>
                <li>Cloud based CRM</li>
                <li>Role Based Access Control</li>
                <li>Intuitive Real time Overview Dashboard</li>
            </ul>
            <p>Functional Features</p>
            <ul>
                <li>Customer Management</li>
                <li>Support Executive Management</li>
                <li>Break Management</li>
                <li>Follow up calls calendar</li>
                <li>Call Entry Management</li>
                <li>Workflow configuration and task automation</li>
                <li>Customization in process definition</li>
            </ul>

            <p>Reporting Features</p>
            <ul>
                <li>Agent Call Details Statistics</li>
                <li>Real time monitoring</li>
                <li>Type & Category wise call information</li>
                <li>Agent performance statistics</li>
                <li>Keep track of key contact center metrics</li>
            </ul>
            
            <p>Benefits</p>
            <ul>
                <li>Easy to deploy access control matrix</li>
                <li>Define processes and workflow according to business needs</li>
                <li>Follow up calendar ensures no missed opportunities</li>
                <li>Make informed business decisions based on data analysis</li>
                <li>Intuitive Service Summary Report</li>
                <li>Allocate & Forward customer calls</li>
            </ul>
            <h5 className='text-color'>TARGET INDUSTRY</h5>
            <p>Any type of BPO Industry</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>



    {/* model 8 */}
    <Modal show={show8} onHide={handleClose8}>
        <Modal.Header closeButton>
          <Modal.Title><img src="http://issl.com.bd/assets/img/services/solutions/business-software/icon-school.png" className='img-fluid-2' alt="" /> <span className='text-color'>SCHOOL WEBSITE CMS</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>iSSL have the experience of developing a feature rich and cost-effective Content Management System for schools that allows for disbursement of study contents and related management activities. It also allows to publish class-exam routines, exam schedule and exam grades online.</p>
            <p>Platform Features</p>
            <ul>
                <li>Easy customizable front-end website</li>
                <li>Systemwide alert and notification feature</li>
                <li>Career Corner</li>
            </ul>
            <p>Functional Features</p>
            <ul>
                <li>Admin Panel for managing front-end website content</li>
                <li>Notice board, News & Blog</li>
                <li>Class routine and exam schedule</li>
                <li>Exam result</li>
                <li>Admission management</li>
                <li>Faculty list</li>
                <li>Photo Gallery</li>
                <li>Job vacancy publish</li>
            </ul>


            <p>Benefits</p>
            <ul>
                <li>Centralized Data Management & Archiving</li>
                <li>24/7 Data Availability & Easy Accessibility</li>
                <li>Ensures privacy, integrity and security of sensitive data</li>
                <li>Diversified Notification system</li>
                <li>Digitally manage and publish curricular announcements</li>
         
            </ul>
            <h5 className='text-color'>TARGET INDUSTRY</h5>
            <p>Any kind of educational organization</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>

       {/* model 9 */}
    <Modal show={show9} onHide={handleClose9}>
        <Modal.Header closeButton>
          <Modal.Title><img src="http://issl.com.bd/assets/img/services/solutions/business-software/icon-job-portal.png" className='img-fluid-2' alt="" /> <span className='text-color'>JOB PORTAL</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            Jobs Portal is a software product for running job portal websites allowing the employers to post their jobs, the job seekers to sign up and create their resume, search for jobs and many others.
            </p>
            
            <p>FEATURES LIST</p>
            <ul>
                <li>Three type of access control (Admin, employer and employee) </li>
                <li>SMS API Supported</li>
                <li>Multi SMS Should be possible to send by user filtering</li>
                <li>Category wise job posting.</li>
                <li>Employer can search a CV bank upon job posting</li>
                <li>Employee short list and Interview list.</li>
                <li>Job Search option</li>
                <li>Powerful and well formatted CV</li>
                <li>Multi branch management.</li>
            </ul>


           
            <h5 className='text-color'>TARGET INDUSTRY</h5>
            <p>Which company want to start a job portal.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose9}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>

        </section>
    </>
  )
}

export default LatestWorks