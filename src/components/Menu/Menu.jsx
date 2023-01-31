import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Menu({menu}) {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
         
          <Nav className="me-auto">
            {menu.length > 0 && menu.map((item, index)=> (
              <Link key={index} to={item.url} className='text-light m-2'>{item.name}</Link>
            ))}
            

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
