import React from 'react'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

import ImgTab from "./ImgTab"

function Main() {
    return (
        <div className="wrapper"> 
            <div className="intro">
                <h1>We do YAY things</h1>
                <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
            </div>
            <div className="d-md-none">
                <Accordion className="mobile-tab" defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle className="mobile-tab--header" as={Card.Header} eventKey="0">
                            First
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="mobile-tab--content">
                                Text one for each
                                <div className="mobile-tab--content--img tab-img-one"></div>
                                Social
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Second
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Third
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <div className="d-none d-md-block desktop-tab">
                <Tabs defaultActiveKey="first" >
                    <Tab className="desktop-tab--header" eventKey="first" title="First">
                        <div className="desktop-tab--header--img tab-img-one"></div>
                    </Tab>
                    <Tab eventKey="second" title="Second">
                        {/* <ImgTab className="desktop-tab--header--img desktop-tab--header--imgTwo" /> */}
                    </Tab>
                    <Tab eventKey="third" title="Third">
                        {/* <ImgTab className="desktop-tab--header--img desktop-tab--header--imgTwo" /> */}
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Main
