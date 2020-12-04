import React from 'react'

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import GetImage from "../GetImage"

function NewsCards() {

    
    

    

    return (
        <Card className="col-lg-4 news-cards--card">
            <GetImage classValue="news-cards--card--image" value="1" type="news" />
            <Card.Body className="news-cards--card--wrapper">
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button className="news-cards--card--wrapper--button" variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default NewsCards
