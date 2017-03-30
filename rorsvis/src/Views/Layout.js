import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class Layout extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col md={12}>
						<span className="bodyContent">
							{this.props.children}
						</span>
					</Col>
				</Row>
			</Grid>
		);
	}
} export default Layout;
