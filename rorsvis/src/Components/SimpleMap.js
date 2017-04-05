import React, {Component} from 'react';
import {Map, Marker} from 'google-maps-react';
import {Col} from 'react-bootstrap';

class SimpleMap extends Component {
	render() {
  		return (
			<Col md={6} xs={12}>
				<Map google={window.google} zoom={14}>
					<Marker name={"Rør & Sviseservice"}
							position={{lat: 59.1773942,lng: 11.2347505}} />
				</Map>		
			</Col>
		);
}} export default SimpleMap
