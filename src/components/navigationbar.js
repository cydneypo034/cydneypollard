import React from 'react';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        return (
          <Navbar  expand="lg">
          <Navbar.Brand href="#/" className="para-center">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav >
              <Nav.Link href="#/about" className="para-center"> About</Nav.Link>
              <Nav.Link href="#/portfolio" className="para-center"> Portfolio</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown" className="para-center">
                <NavDropdown.Item href="https://cydneypollarddesigns.myportfolio.com/">Graphic Design Work</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/cydneypo034">Github</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#/skills" className="para-center">Skills</Nav.Link>
              <Nav.Link href="#/contact" className="para-center">Contact</Nav.Link>
              
              <Button  variant="outline-warning" href="https://pdfhost.io/v/AMBVbyVZS_cydneypollardresume102019pdf.pdf" className="button-text">Resume</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default NavigationBar;