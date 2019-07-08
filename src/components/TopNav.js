import React, { Component } from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';

//css
import '../style/topNav.css';

export class TopNav extends Component {
    render() {
        return (
            <div className='topNav'>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Maven Butler</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="row ml-auto">
                    <Nav.Link href="#home">Profile</Nav.Link>
                    <Nav.Link href="#home">Notifications</Nav.Link>
                    <Nav.Link href="#home">Messages</Nav.Link>
                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default TopNav;
