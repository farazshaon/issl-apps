import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';
import { FaSmile, FaUserFriends, FaLaptop, FaHeadset, FaIndustry } from "react-icons/fa";

export default class Countup extends Component {
  render() {
    return (
      <>
        <section className="CountUp">
        <Container>
        <Row>
            <Col>
            <div className="count">
                <h2><FaSmile/></h2>
                <h4>
                <CountUp start={0} end={13000000}>
                {({ countUpRef}) => (
                    
                    <span ref={countUpRef} />                   
                   
                )}
            </CountUp>
                </h4>
                <h5>Happy Customers</h5>

            </div>
            </Col>

            <Col>
            <div className="count">
                <h2><FaUserFriends/></h2>
                <h4>
                <CountUp start={0} end={50}>
                {({ countUpRef }) => (
           
                    <span ref={countUpRef} />                   
                    
                )}
            </CountUp>
                </h4>
                <h5>Clients Served</h5>

            </div>
            </Col>

            <Col>
            <div className="count">
               <h2><FaLaptop/></h2>

                <h4>
                <CountUp start={0} end={200}>
                {({ countUpRef}) => (
                  
                    <span ref={countUpRef} />                   
                    
                )}
            </CountUp>
                </h4>
                <h5>Workstations</h5>

            </div>
            </Col>


            <Col>
            <div className="count">
                <h2><FaHeadset/></h2>
                <h4>
                <CountUp start={0} end={250}>
                {({ countUpRef }) => (
                 
                    <span ref={countUpRef} />                   
                    
                )}
            </CountUp>
                </h4>
                <h5>Robust Employee Base</h5>

            </div>
            </Col>

            <Col>
            <div className="count">
                <h2><FaIndustry/></h2>
                <h4>
                <CountUp start={0} end={1200}>
                {({ countUpRef}) => (
                  
                    <span ref={countUpRef} />                   
                   
                )}
            </CountUp>
                </h4>
                <h5>Resources Developed For Industry</h5>

            </div>
            </Col>
        </Row>
      </Container>
        </section>
      </>
    )
  }
}
