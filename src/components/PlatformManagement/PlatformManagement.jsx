import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FaCogs, FaIdCard, FaGlobeAfrica } from "react-icons/fa";

export const PlatformManagement = () => {
  return (
    <>
    <section className="platformManagement mt-5">
        <Container>
            <h4 className='text-color'>Platform Management</h4>
            <p>
            ISSL Platform Management offers a set of computer interface for your business operation. These are independent operating applications that provides you management, 
            control mechanism and monitoring capabilities. We are providing Content provider SMS platform, Corporate Messaging platform and WAP platform.
            </p>
            <Row>
            <h4 className='text-color mb-5 mt-4'>SEGMENTS</h4>

                <Col md={4}>
                    <h2><FaCogs/></h2>
                    <h5>Content Provider Platform</h5>
                    <p>
                    ISSL offers Content Provider platform to those entrepreneurs who are willing to start or in content business. We offer smooth, robust, dynamic features where you can integrate telecom carriers, short codes and keywords for diversified functionality along with smart reporting system.
                    </p>

                </Col>

                <Col md={4}>
                    <h2><FaIdCard/></h2>
                    <h5>Corporate Messaging Platform</h5>
                    <p>
                    ISSL offers Business Messaging Platform for sending SMS to multiple recipients with a single command from your computer. We offer web based Reseller panel, End user panel and also facility of API integration to database for automated SMS sending with dynamic Report options.
                    </p>

                </Col>

                <Col md={4}>
                    <h2><FaGlobeAfrica/></h2>
                    <h5>WAP Business Platform</h5>
                    <p>
                    ISSL offers WAP Business Platform for content providers. We offer subscription business zone and pay per download zone to demonstrate segmented digital contents. You can integrate subsidiaries to create and upload contents from remote access through business partnering.
                    </p>

                </Col>
            </Row>
        </Container>
    </section>
    
    </>
  )
}
