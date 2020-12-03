import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Social() {

    const facebook = <FontAwesomeIcon className="tabs-wrapper--text--social" icon={faFacebookF} />
    const twitter = <FontAwesomeIcon className="tabs-wrapper--text--social" icon={faTwitter} />


    return (
        <div>
            <span className="tabs-wrapper--text--social-text">SHARE</span>
            <span>{facebook}</span>
            <span>{twitter}</span>
        </div>
    )
}

export default Social
