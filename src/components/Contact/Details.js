import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Details(props) {

    let iconStyle = {
        color: "#767676",
        background: "transparent",
        fontSize: "34px",
    };

    let detailIcon = "";

    if (props.value === "email") {
        detailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    } else if (props.value === "phone") {
        detailIcon = <FontAwesomeIcon icon={faPhone} />;
    } else if (props.value === "pin") {
        detailIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
    }

    let classValue = "col-2 details--wrapper--icon details--wrapper--icon--" + props.value;

    return (
        <div className="row details--wrapper">
           <span style={iconStyle} className={classValue}>{detailIcon}</span>
           <div className="col-6 details--wrapper--text">{props.children}</div>
        </div>
    )
}

export default Details
