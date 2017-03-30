/* Author: Christoffer A. Nilsen
 * Date: 21.12.2016
 * File: Menu.js
 * Type Description: Menu component
 */

import React, { Component } from 'react';
import './Menu.css';
import { Link, IndexLink } from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

class Menu extends Component {
	render() {
		let styles = {
			color:"black",
			textDecoration:"none",
			outline:"none"
		}
		return (
			<div className="menu">
				<Grid>
					<Row>
						<Col md={12}>
							<IndexLink to="/" style={styles}>Blog</IndexLink>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Link to="CV" style={styles}>Curriculum vitae</Link>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<IndexLink to="Contact" style={styles}>Contact</IndexLink>
						</Col>
					</Row>
				</Grid>
			</div>
		);	
	}
}

export default Menu;
