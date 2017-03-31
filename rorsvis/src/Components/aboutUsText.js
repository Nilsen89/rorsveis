/**
 * Created by Rasmus on 30.03.2017.
 */
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Profiles from './Profiles';


class AboutUsText extends Component {
    render() {
        let file = require("../Data/AboutUs.json");
        let headerStyle = {
            fontSize: "300%"
        };

        let rowStyle = {
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            alignItems: "center"
        };

        let textStyle = {
            borderColor: "red"
        };

        let verticalLine = {
            borderColor: "black",
            borderLeft: "solid",
        };

        let contentStyle = {
            fontSize: "130%",
            fontWeight: "510"
        };

        let centerRow = {
            marginLeft: "auto",
            marginRight:"auto",
            display:"block"
        };
        return (
        <div>
            <Grid fluid>
                <Row>
                    <h1 style={headerStyle}>{file[0].title}</h1>
                    <h3 style={{marginTop:"-10px"}}><i>{file[0].under}</i></h3>
                    <hr style={textStyle}/>
                </Row>
                <Row style={rowStyle}>
                    <Col md={6} mdOffset={1}>
                        <p style={contentStyle}>{file[0].content1}</p>
                        <p style={contentStyle}>{file[0].content2}</p>
                    </Col>
                    <Col md={6} style={verticalLine}>
                        <Row fluid style={centerRow}>
                            <Profiles 	name="Rune Eide"
                                         title="Board Member"
                                         email="eide@rorsveis.no" />
                        </Row>
                        <Row style={centerRow}>
                            <Profiles 	name="May-Liss Ahlsen Larsen"
                                         title="Board Member"
                                         email="larsen@rorsveis.no" />
                        </Row>
                        <Row style={centerRow}>
                            <Profiles 	name="Mariusz Stanislaw Roginski"
                                         title="Board Member"
                                         email="roginiski@rorsveis.no"/>
                        </Row>
                    </Col>

                </Row>
            </Grid>
        </div>
        );
    }
} export default AboutUsText;
