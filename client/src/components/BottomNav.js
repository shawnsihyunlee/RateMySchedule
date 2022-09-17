import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function BottomNav () {
    return (
    <Navbar bg="light" fixed="bottom">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/friends" style={{paddingRight:"50px",}}>Friends</Nav.Link>
            <Nav.Link href="/schedule" style={{paddingLeft:"50px", paddingRight:"50px",}}>My Schedule</Nav.Link>
            <Nav.Link href="/rate" style={{paddingLeft:"50px", paddingRight: "50px"}}>Rate Schedules</Nav.Link>
            <Nav.Link href="/profile" style={{paddingLeft:"50px"}}>Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}