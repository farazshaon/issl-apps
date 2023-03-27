import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
function Menu({menu}) {
  
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
         
          <Nav className="me-auto">
            {menu.length > 0 && menu.map((item, index)=> (
              <NavLink key={index} to={item.url} className='text-light m-2' activeClassName="active-link">{item.name}</NavLink>
            ))}
            

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
