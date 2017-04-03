/**
 * Created by Rasmus on 30.03.2017.
 */
import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './NavigationBar.css'
import ListItemLink from './ListItemLink'
import {Image} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

class NavigationBar extends Component {
    render() {


        let file = require("../Data/"+localStorage.getItem("lang")+"/NavigationBar.json");
        let imgsrc = require("../images/"+localStorage.getItem("lang")+".png");
		let flagImg = <Image className="english" src={imgsrc} alt="flag" onClick={handleClick}/>

		function handleClick(e) {
			if(localStorage.getItem("lang") === "eng") {
				localStorage.setItem("lang", "no")
			} else {
				localStorage.setItem("lang", "eng")
			}
		}
        return(
            <Navbar className="navbar" fixedTop>
                <Navbar.Header>
                    <Link to={"/"}><img src={require("./../images/Logo.png")} className="logo" alt="Logo"/></Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav className="nav" bsStyle="pills" pullRight>
                        <ListItemLink className="link" to="/">{file[0].home}</ListItemLink>
                        <ListItemLink className="link" to="/Projects">{file[0].projects}</ListItemLink>
                        <ListItemLink className="link" to="/About">{file[0].about}</ListItemLink>
                        <ListItemLink className="link" to="/Contact">{file[0].contact}</ListItemLink>
                        <li>
                            <NavLink to="/">
                                {flagImg}
                            </NavLink>
                        </li>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}} export default NavigationBar;
