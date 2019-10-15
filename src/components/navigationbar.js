import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        return (
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/skills">Skills</NavDropdown.Item>
                <NavDropdown.Item href="https://cydneypollarddesigns.myportfolio.com/">Graphic Design Work</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/cydneypo034">Github</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default NavigationBar;