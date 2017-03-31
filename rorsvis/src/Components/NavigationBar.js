/**
 * Created by Rasmus on 30.03.2017.
 */
import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './NavigationBar.css'
import ListItemLink from './ListItemLink'
import IndexListItemLink from './IndexListItemLink'

class NavigationBar extends Component {


    render() {


        return(
            <Navbar className="navbar">
                <Navbar.Header>
                    <img src={require("./images.jpg")} className="logo" alt="Logo"/>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullLeft>
                    </Nav>
                    <Nav className="nav" bsStyle="pills" pullRight>
                        <ListItemLink className="link" to="/">Hjem</ListItemLink>
                        <ListItemLink className="link" to="/Projects">Prosjekter</ListItemLink>
                        <ListItemLink className="link" to="/About">Om oss</ListItemLink>
                        <ListItemLink className="link" to="/Contact">Kontakt</ListItemLink>
                        <NavItem><img src={require("./english.png")} alt="flag" className="english" /></NavItem>
                        {/*
                        <NavItem className="link" eventKey={1}><Link to="/">Hjem</Link></NavItem>
                        <NavItem className="link" eventKey={2}><Link to="/About">Om oss</Link></NavItem>
                        <NavItem className="link" eventKey={3}><Link to="/Contact">Kontakt</Link></NavItem>
                        <NavItem className="link" eventKey={4}><Link to="/Projects">Prosjekter</Link></NavItem>
                        <NavItem><img src={require("./english.png")} alt="flag" className="english" /></NavItem>
                        <NavItem><img src={require("./english.png")} alt="flag" className="english" /></NavItem>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );


    }
} export default NavigationBar;

