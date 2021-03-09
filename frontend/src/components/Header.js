import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
              <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                  <LinkContainer to='/'>
                    <Navbar.Brand href="#home">The D Con Store</Navbar.Brand>
                  </LinkContainer>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <LinkContainer to='/' exact>
                        <Nav.Link href="#home"><i className='fas fa-home'></i> Home</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to='/cart'>
                        <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to='/profile'>
                        <Nav.Link><i className='fas fa-user'></i> Profile</Nav.Link>
                      </LinkContainer>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
        </header>
    )
}

export default Header
