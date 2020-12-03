import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Social(props) {

    const styleHeight = {
        minHeight: props.height + "px",
    };
    const facebook = <FontAwesomeIcon className="" icon={faFacebookF} />
    const twitter = <FontAwesomeIcon className="" icon={faTwitter} />


    return (
        <div className="social">
            <span className="social--share">SHARE</span>
            <span className="social--icon">{facebook}</span>
            <span className="social--icon">{twitter}</span>
        </div>
    )
}

export default Social
