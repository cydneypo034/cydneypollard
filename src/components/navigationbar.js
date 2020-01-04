import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';

const NavigationBar = () => (
  <Navbar expand="lg">
          <Navbar.Brand href="#/" className="para-center">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav >
              <Nav.Link href="#/about" className="para-center"> About</Nav.Link>
              <Nav.Link href="#/portfolio" className="para-center"> Portfolio</Nav.Link>
              <Nav.Link href="#/skills" className="para-center">Skills</Nav.Link>
              <Nav.Link href="#/contact" className="para-center">Contact</Nav.Link>
              
              <Button  variant="outline-warning" 
              href="https://pdfhost.io/v/CnDkmHE@_cydneypollardresume102019pdf.pdf" 
              className="button-text">Resume</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
)

export default NavigationBar;