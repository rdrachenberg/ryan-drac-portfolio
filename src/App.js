import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Body } from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect fixedTop style={
          {marginBottom: '50px'
          }}>
          <Navbar.Header >
          <Navbar.Brand>
            <a href="/">Ryan Drachenberg</a>
          </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/about">
                About
              </NavItem>
              <NavItem eventKey={2} href="/contact">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      < Body className='body' />
      </div>
    );
  }
}

export default App;
