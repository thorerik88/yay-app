import React from 'react'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

import GetImage from "./GetImage"
import Social from "../Social"

function MainContent() {
    return (
        <div className="wrapper"> 
            <div className="intro">
                <h1>We do YAY things</h1>
                <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
            </div>
            <div className="d-lg-none">
                <Accordion className="mobile-tab" defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle className="mobile-tab--header" as={Card.Header} eventKey="0">
                            First
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="mobile-tab--content">
                                Text one for each
                                <GetImage value="1" type="tab"/>
                                Social
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Second
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <GetImage value="2" type="tab"/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Third
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <GetImage value="3" type="tab"/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <div className="d-none d-lg-block">
                <Tabs defaultActiveKey="first" >
                    <Tab eventKey="first" title="First">
                        <div className="row desktop-tab-content">
                            <div className="col-md-3">
                                <GetImage classValue="desktop-tab-content--image" value="1" type="tab" />
                            </div>
                            <div className="col-md-9">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                                <Social height="25" />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="second" title="Second">
                        <div className="row desktop-tab-content">
                            <div className="col-md-3">
                                <GetImage classValue="desktop-tab-content--image" value="2" type="tab" />
                            </div>
                            <div className="col-md-9">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                                <Social />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="third" title="Third">
                        <div className="row desktop-tab-content">
                            <div className="col-md-3">
                                <GetImage classValue="desktop-tab-content--image" value="3" type="tab" />
                            </div>
                            <div className="col-md-9">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                                <Social />
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default MainContent
