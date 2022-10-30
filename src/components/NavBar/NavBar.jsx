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
                <Navbar.Brand> <img src={Logo} className="img-fluid" alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className='warning Nav-Link'><NavLink to='/'> Home</NavLink></Nav.Link>                
                    <NavDropdown title="Call Center Service" id="basic-nav-dropdown" >
                        
                        <NavDropdown.Item ><NavLink to='/inboundservices'> <FaUserAstronaut/> Inbound Services </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to='/outboundservices'> <FaHeadset/> Outbound Services </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to='/specializedservices'> <FaUserFriends/> Specialized Services </NavLink></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Back Office Service" id="basic-nav-dropdown">
                        <NavDropdown.Item ><NavLink to='/baddebtrecovery'> <FaRedo/> Bad Debt Recovery </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to='/dataentrycontentmanagement'> <FaRegFile/> Data Entry & Content Management </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to='/digitalsupportservices'> <FaHeadphonesAlt/> Digital Support Services </NavLink></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Training & HR Sourcing" id="basic-nav-dropdown">
                        <NavDropdown.Item> <NavLink to='/trainingPages'><FaUserAstronaut/> Training </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to='/skilldevelopmentprogram'> <FaFile/> Skill Development Program </NavLink></NavDropdown.Item>
                        <NavDropdown.Item> <NavLink to='/hrsourceing'><FaUserPlus/> HR Sourcing </NavLink></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Software Development" id="basic-nav-dropdown">
                        <NavDropdown.Item ><NavLink to='/customsoftwaredevelopment'> <FaTools/>  Custom Software Development</NavLink> </NavDropdown.Item>               
                        <NavDropdown.Item ><NavLink to='/softwareconsulting'> <FaCode/> Software Consulting </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to='/bposolutions'> <FaHandsHelping/> BPO Solutions </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to='/businesssoftware'> <FaHandshake/>  Business Software </NavLink></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title=" Digital Service" id="basic-nav-dropdown">
                        <NavDropdown.Item ><NavLink to='/smsBusiness'> <FaRegEnvelope/> SMS Business </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to=''> <FaThLarge/> Platform Management </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to=''> <FaTh/> Shortcode Support </NavLink></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title=" Mobile Applications" id="basic-nav-dropdown">
                        <NavDropdown.Item ><NavLink to=''> <FaAndroid/> Android App </NavLink></NavDropdown.Item>                     
                    </NavDropdown>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
  
    </>
  )
}

export default NavBar