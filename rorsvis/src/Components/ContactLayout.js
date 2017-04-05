/**
 * Created by Rasmus on 31.03.2017.
 */
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SimpleMap from './SimpleMap';

class ContactLayout extends Component {

    render() {
        let file = require("../Data/"+localStorage.getItem("lang")+"/Contact.json");
        let imgStyle = {
            width: "400px",
            height: "250px"
        };

        let rowStyle = {
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            alignItems: "center"
        };

        return (
                        <Col xs={12} md={6}>
                            <h3><b>{file[0].openinghours}</b></h3>
                            <h4>{file[0].weekdays}</h4>
                            <h4>{file[0].weekends}</h4>
                            <hr/>
                            <h3><b>{file[0].contactinfo}</b></h3>
                            <h4>{file[0].telephone}</h4>
                            <h4>{file[0].address}</h4>
                            <h4>{file[0].email1} <a href="mailto:contact@rorsveis.no">{file[0].email2}</a></h4>
                        </Col>
        );
    }
} export default ContactLayout;
