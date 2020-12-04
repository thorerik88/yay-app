import React from 'react'

import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

import GetImage from "../GetImage"   
import Social from "../Social"

function AccContent() {
    return (
                <Accordion className="mobile-tab" defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle className="mobile-tab--header" as={Card.Header} eventKey="0">
                            First
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="mobile-tab--content">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                                <GetImage classValue="mobile-tab-content--image" value="1" type="tab"/>
                                <div className="mobile-tab--content--social">
                                    <span className="mobile-tab--content--share">SHARE</span>
                                    <Social color="black" value="tab" height="25"/>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle className="mobile-tab--header" as={Card.Header} eventKey="1">
                            Second
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body className="mobile-tab--content">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                                <GetImage classValue="mobile-tab-content--image" value="2" type="tab"/>
                                <div className="mobile-tab--content--social">
                                    <span className="mobile-tab--content--share">SHARE</span>
                                    <Social color="black" value="tab" height="25"/>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle className="mobile-tab--header" as={Card.Header} eventKey="2">
                            Third
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body className="mobile-tab--content">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                                <GetImage classValue="mobile-tab-content--image" value="3" type="tab"/>
                                <div className="mobile-tab--content--social">
                                    <span className="mobile-tab--content--share">SHARE</span>
                                    <Social color="black" value="tab" height="25"/>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
    )
}

export default AccContent
