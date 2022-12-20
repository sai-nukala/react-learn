import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#features"
              onClick={() => {
                props.fetchByGenre('all');
              }}
            >
              ALL
            </Nav.Link>
            <Nav.Link
              href="#Comedy"
              onClick={() => {
                props.fetchByGenre('Comedy');
              }}
            >
              Comedy
            </Nav.Link>
            <Nav.Link
              href="#Adventure"
              onClick={() => {
                props.fetchByGenre('Adventure');
              }}
            >
              Adventure
            </Nav.Link>
            <Nav.Link
              href="#Fantasy"
              onClick={() => {
                props.fetchByGenre('Fantasy');
              }}
            >
              Fantasy
            </Nav.Link>
            <Nav.Link
              href="#Family"
              onClick={() => {
                props.fetchByGenre('Family');
              }}
            >
              Family
            </Nav.Link>
            <Nav.Link
              href="#Action"
              onClick={() => {
                props.fetchByGenre('Action');
              }}
            >
              Action
            </Nav.Link>
            <Nav.Link
              href="#Thriller"
              onClick={() => {
                props.fetchByGenre('Thriller');
              }}
            >
              Thriller
            </Nav.Link>
            <NavDropdown title="Sort By" id="collasible-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  props.sortByValue('title');
                }}
              >
                Title
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  props.sortByValue('runtime');
                }}
              >
                Run Time
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  props.sortByValue('release_date');
                }}
              >
                Release Date
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  props.sortByValue('vote_average');
                }}
              >
                Vote Average
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
