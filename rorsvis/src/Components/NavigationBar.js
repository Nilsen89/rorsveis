/**
 * Created by Rasmus on 30.03.2017.
 */
import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './NavigationBar.css'
import ListItemLink from './ListItemLink'

class NavigationBar extends Component {
    render() {

        let file = require("../Data/NavigationBar.json");

        return(
            <Navbar className="navbar" fixedTop>
                <Navbar.Header pullLeft>
                    <Link to={"/"}><img src={require("./../images/Logo.png")} className="logo" alt="Logo"/></Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav className="nav" bsStyle="pills" pullRight>
                        <ListItemLink className="link" to="/">{file[0].home}</ListItemLink>
                        <ListItemLink className="link" to="/Projects">{file[0].projects}</ListItemLink>
                        <ListItemLink className="link" to="/About">{file[0].about}</ListItemLink>
                        <ListItemLink className="link" to="/Contact">{file[0].contact}</ListItemLink>
                        <NavItem><img src={require("./../images/english.png")} alt="flag" className="english" /></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );


    }
} export default NavigationBar;

