import React from 'react'
import Carousel from "react-bootstrap/Carousel"
import GetImage from "../layout/GetImage"

function Hero() {
    return (
            <Carousel className="hero">
                <Carousel.Item>
                    <GetImage value="1" type="carousel" />
                </Carousel.Item>
                <Carousel.Item>
                    <GetImage value="2" type="carousel" />
                </Carousel.Item>
                <Carousel.Item>
                    <GetImage value="3" type="carousel" />  
                </Carousel.Item>
            </Carousel>
    )
}

export default Hero
