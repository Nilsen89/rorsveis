import React, {Component} from 'react';
import {Map, Marker} from 'google-maps-react';

class SimpleMap extends Component {
	render() {
  		return (
			<Map google={window.google} zoom={14}>
				<Marker name={"Rør & Sviseservice"}
						position={{lat: 59.1773942,lng: 11.2347505}} />
			</Map>		
		);
}} export default SimpleMap
