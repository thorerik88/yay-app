import React from 'react'

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import GetImage from "../GetImage"

function NewsCards(props) {

    let cardClass = "news-cards--card";

    if (props.mobileHidden === "yes") {
        cardClass = "news-cards--card d-none d-lg-block ";
    } 

    const cards = [
        { elementTitle: "Nunc porttitor vel", elementText: "Nunc malesuada eget est fringilla dapibus.", buttonText: "Go somewhere" },
    ];

    return (
        <Card className={cardClass}>
            <GetImage classValue="news-cards--card--image" value={props.value} type="news" />
            <Card.Body className="news-cards--card--wrapper">
                <Card.Title>{cards[0].elementTitle}</Card.Title>
                <Card.Text>
                {cards[0].elementText}
                </Card.Text>
                <Button className="news-cards--card--wrapper--button" variant="primary">{cards[0].buttonText}<span className="news-cards--card--wrapper--button--dark"></span></Button>
            </Card.Body>
        </Card>
    )
}

export default NewsCards
