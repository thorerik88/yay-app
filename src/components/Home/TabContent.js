import React from 'react'

import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

import GetImage from "./GetImage"
import Social from "../Social"

function TabContent() {
    return (
        <Tabs defaultActiveKey="first" >
                    <Tab eventKey="first" title="First">
                        <div className="row desktop-tab-content">
                            <div className="col-md-3">
                                <GetImage classValue="desktop-tab-content--image" value="1" type="tab" />
                            </div>
                            <div className="col-md-9">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                                <span className="desktop-tab-content--share">SHARE</span>
                                <Social color="black" value="tab" height="25"/>
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
                                <span className="desktop-tab-content--share">SHARE</span>
                                <Social color="black" value="tab" height="25"/>
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
                                <span className="desktop-tab-content--share">SHARE</span>
                                <Social color="black" value="tab" height="25"/>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
    )
}

export default TabContent
