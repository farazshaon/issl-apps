import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
function Menu() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#features" className='text-light'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='text-light'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
