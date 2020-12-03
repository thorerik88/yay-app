import React from 'react'
// import Jumbotron from "react-bootstrap/Jumbotron"
import Carousel from "react-bootstrap/Carousel"

function Hero() {
    return (
            <Carousel className="hero">
                <Carousel.Item>
                    <div
                        className="caro-image caro-image-one"
                        alt="First slide"
                    ></div>
                </Carousel.Item>
                <Carousel.Item>
                     <div
                        className="caro-image caro-image-two"
                        alt="Second slide"
                    ></div>
                </Carousel.Item>
                <Carousel.Item>
                     <div
                        className="caro-image caro-image-three"
                        alt="Third slide"
                    ></div>
                </Carousel.Item>
            </Carousel>
    )
}

export default Hero
