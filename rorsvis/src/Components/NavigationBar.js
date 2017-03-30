/**
 * Created by Rasmus on 30.03.2017.
 */
import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavigationBar extends Component {
    render() {

    let navBarStyles = {
        backgroundColor: "white"
    };

        return(
            <Navbar style={navBarStyles}>
                <Navbar.Header>
                    <Navbar.Brand>
                        Logo her
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}><Link to="/">Hjem</Link></NavItem>
                        <NavItem eventKey={2}><Link to="/About">Om oss</Link></NavItem>
                        <NavItem eventKey={3}><Link to="/Contact">Kontakt</Link></NavItem>
                        <NavItem eventKey={4}><Link to="/Projects">Prosjekter</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );


    }
} export default NavigationBar;
