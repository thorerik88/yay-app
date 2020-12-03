import React from 'react'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

function Main() {
    return (
        <div className="wrapper"> 
            <div className="intro">
                <h1>We do YAY things</h1>
                <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
            </div>
            <div className="d-md-none">
                
            </div>
            <div className="d-none d-md-block">
                <Tabs defaultActiveKey="first" >
                    <Tab eventKey="first" title="First">
                        
                    </Tab>
                    <Tab eventKey="second" title="Second">
                        
                    </Tab>
                    <Tab eventKey="third" title="Third">
                        
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Main
