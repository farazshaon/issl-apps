import React from 'react'
import {Link, NavLink  } from 'react-router-dom'
import { FaUserAstronaut, FaUserFriends, FaHeadset, FaRedo, FaRegFile, FaHeadphonesAlt, FaFile, FaTh,  FaUserPlus, FaTools, FaAndroid, FaThLarge,  FaRegEnvelope, FaCode, FaHandshake, FaHandsHelping} from "react-icons/fa";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Logo from '../../assets/images/issllogo-s.png'
function NavBar() {
  return (
    <>
     
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home"> <img src={Logo} className="img-fluid" alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className='warning Nav-Link'><NavLink to='/'> Home</NavLink></Nav.Link>                
                    <NavDropdown title="Call Center Service" id="basic-nav-dropdown" >
                        
                        <NavDropdown.Item ><NavLink to='/inboundservices'> <FaUserAstronaut/> Inbound Services </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to='/outboundservices'> <FaHeadset/> Outbound Services </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to='/specializedservices:title'> <FaUserFriends/> Specialized Services </NavLink></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Back Office Service" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#"> <FaRedo/> Bad Debt Recovery</NavDropdown.Item>
                        <NavDropdown.Item href="#"> <FaRegFile/> Data Entry & Content Management</NavDropdown.Item>
                        <NavDropdown.Item href="#"> <FaHeadphonesAlt/> Digital Support Services</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Training & HR Sourcing" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#"> <FaUserAstronaut/> Training</NavDropdown.Item>
                        <NavDropdown.Item href="#"> <FaFile/> Skill Development Program</NavDropdown.Item>
                        <NavDropdown.Item href="#"> <FaUserPlus/> HR Sourcing </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Software Development" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#"> <FaTools/>  Custom Software Development</NavDropdown.Item>               
                        <NavDropdown.Item href="#"> <FaCode/> Software Consulting </NavDropdown.Item>
                        <NavDropdown.Item href="#"> <FaHandsHelping/> BPO Solutions </NavDropdown.Item>
                        <NavDropdown.Item href="#"> <FaHandshake/>  Business Software </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title=" Digital Service" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#"> <FaRegEnvelope/> SMS Business</NavDropdown.Item>
                        <NavDropdown.Item href="#"> <FaThLarge/> Platform Management</NavDropdown.Item>
                        <NavDropdown.Item href="#"> <FaTh/> Shortcode Support </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title=" Mobile Applications" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#"> <FaAndroid/> Android App</NavDropdown.Item>                     
                    </NavDropdown>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
  
    </>
  )
}

export default NavBar