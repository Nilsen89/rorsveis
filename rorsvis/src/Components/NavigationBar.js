/**
 * Created by Rasmus on 30.03.2017.
 */
import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './NavigationBar.css'

class NavigationBar extends Component {
    render() {

    let navBarStyles = {
        backgroundColor: "white",
        borderColor: "white",
        height: "50px",
        lineHeight: "50px"
    };


        return(
            <Navbar style={navBarStyles}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src={require("./images.jpg")} className="logo" alt="Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullLeft>
                    </Nav>
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
