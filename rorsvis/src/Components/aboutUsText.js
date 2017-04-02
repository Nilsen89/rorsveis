/**
 * Created by Rasmus on 30.03.2017.
 */
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Profiles from './Profiles';



class AboutUsText extends Component {
    render() {
        let file = require("../Data/"+localStorage.getItem("lang")+"/AboutUs.json");

        let rowStyle = {
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            alignItems: "center"
        };


        let verticalLine = {
            borderColor: "black",
            borderLeft: "solid",
            borderWidth: "1px"
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
                <Row style={rowStyle}>
                    <Col md={6} mdOffset={1}>
                        <p style={contentStyle}>{file[0].content1}</p>
                        <p style={contentStyle}>{file[0].content2}</p>
                    </Col>
                    <Col xsHidden smHidden md={6} style={verticalLine}>
                        <Row style={centerRow}>
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
                <Row style={{paddingBottom: "20px"}}>
                    <Col xs={4} mdHidden lgHidden xlHidden>
                        <Profiles 	name="Rune Eide"
                                     title="Board Member"
                                     email="eide@rorsveis.no" />
                    </Col>
                    <Col xs={4} mdHidden lgHidden xlHidden>
                        <Profiles 	name="May-Liss Ahlsen Larsen"
                                     title="Board Member"
                                     email="larsen@rorsveis.no" />
                    </Col>
                    <Col xs={4} mdHidden lgHidden xlHidden>
                        <Profiles 	name="Mariusz Stanislaw Roginski"
                                     title="Board Member"
                                     email="roginiski@rorsveis.no"/>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
} export default AboutUsText;
