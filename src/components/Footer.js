import React from 'react'
import Social from "./Social"

function Footer() {
    return (
        <div className="footer">
            <div className="footer--item">
                <Social color="grey" value="footer" height="30"/>
            </div>
            <div className="footer--item">
                <p>hello@yay.com</p>
            </div>
            <div className="footer--item">
                <p>Copyright 2020</p>
            </div>
        </div>
    )
}

export default Footer
