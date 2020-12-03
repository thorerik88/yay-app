import React from 'react'

function GetImage(props) {

    let imageType = "./images/" + props.type +"/" + props.type + "-";
    let imageUrl = imageType.concat(props.value + ".jpg");


    return (
        <div>
            <img src={imageUrl} alt={props.type + " image number " + props.value}/>            
        </div>
    )
}

export default GetImage
