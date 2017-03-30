/**
 * Created by Rasmus on 30.03.2017.
 */
import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class NavigationBar extends Component {
    render() {

    let navBarStyles = {
        "backgoundColor": "black" //TODO: kanskje apostrofer rundt gray?
    };

        return(
            <Navbar fluid staticTop style={navBarStyles}>
                <Navbar.Header>
                    <Navbar.Brand>
                        Logo her
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Hjem</NavItem>
                        <NavItem eventKey={2} href="#">Om oss</NavItem>
                        <NavItem eventKey={3} href="#">Kontakt</NavItem>
                        <NavItem eventKey={4} href="#">Prosjekter</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );


    }
} export default NavigationBar;
