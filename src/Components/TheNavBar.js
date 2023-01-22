import Container from 'react-bootstrap/Container';
import {Routes, Route, Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';


function TheNavBar() {
    return (
<Navbar className='header' bg="light" expand="lg">
        <Container fluid>
          <LinkContainer to="/">
          <Navbar.Brand> Livaly </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className='me-auto my-2 my-lg-0'
                style={{maxHeight: '100px'}}
                navbarScroll
                variant="pills"
            >
              <LinkContainer to="/Complete-Enrolment">
                <Nav.Link className='module'> 1. Enrollment </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Codice-Fiscale">
              <Nav.Link className='module'> 2. Tax </Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/Health">
                <Nav.Link className='module'> 3. Health </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Post-Office">
                <Nav.Link className='module'> 4.Post Office</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Questura">
              <Nav.Link className='module'> 5. Questura</Nav.Link>
              </LinkContainer>

            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default TheNavBar