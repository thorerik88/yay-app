import React from 'react'

import AccContent from "./AccContent"
import TabContent from "./TabContent"

function MainContent() {
    return (
        <div className="wrapper"> 
            <div className="intro">
                <h1>We do YAY things</h1>
                <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
            </div>
            <div className="d-lg-none">
                <AccContent />
            </div>
            <div className="d-none d-lg-block">
                <TabContent />
            </div>
        </div>
    )
}

export default MainContent
