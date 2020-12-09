import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faVimeoV, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Social(props) {

    let socialOne, socialTwo = "";
    let iconStyle = {};

    // set icon style
    if (props.color === "black") {
        iconStyle = {
            color: "black",
            fontSize: props.height + "px"
        } 
    } else if (props.color === "grey") {
        iconStyle = {
            color: "#767676",
            fontSize: props.height + "px"
        }
    }

    // set icon type
    if (props.value === "tab") {
        socialOne = <FontAwesomeIcon icon={faFacebookF} />
        socialTwo = <FontAwesomeIcon icon={faTwitter} />
    } else if (props.value === "footer") {
            socialOne = <FontAwesomeIcon icon={faVimeoV} />
            socialTwo = <FontAwesomeIcon icon={faYoutube} />
          }

    

    return (
        <div className="social">
            <span style={iconStyle} className="social--icon">{socialOne}</span>
            <span style={iconStyle} className="social--icon">{socialTwo}</span>
        </div>
    )
}

export default Social
