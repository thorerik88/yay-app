import React from 'react'

import TopNav from "../TopNav"
import Intro from "../Intro"
import Footer from "../Footer"
import CardClickBox from "./CardClickBox"
import NewsCards from "./NewsCards"

function News() {

    return (
        <div>
            <TopNav value="news" />
            <div className="wrapper">
                <Intro h1="News" />
                <CardClickBox/>
                <div className="row news-cards">
                    <NewsCards value="1" />
                    <NewsCards value="2" />
                    <NewsCards value="3" />
                    <NewsCards value="4" />
                    <NewsCards value="5" mobileHidden="yes" />
                    <NewsCards value="6" mobileHidden="yes" />
                    <NewsCards value="8" mobileHidden="yes" />
                    <NewsCards value="7" mobileHidden="yes" />
                </div>
                <CardClickBox />
            </div>
            <Footer />
        </div>
    )
}

export default News
