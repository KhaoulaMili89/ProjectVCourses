import React from 'react'
import {Nav,Container,Navbar} from 'react-bootstrap'
const NavBarHome = () => {
    return (
        <div>
         

  <br />
  <Navbar bg="goldenrod" variant="goldenrod">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="login">LOGIN</Nav.Link>
      <Nav.Link href="Register/student">REGISTER</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>

        </div>
    )
}

export default NavBarHome
