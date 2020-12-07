import React from 'react'

import TopNav from "../TopNav"
import Footer from "../Footer"
import CardClickBox from "./CardClickBox"
import NewsCards from "./NewsCards"

function News() {

    return (
        <div>
            <TopNav />
            <div className="wrapper">
                <div className="intro">
                    <h1>News</h1>
                </div>
                <CardClickBox/>
            <div className="row news-cards">
                <NewsCards value="1" />
                <NewsCards value="2" />
                <NewsCards value="3" />
                <NewsCards value="4" />
                <NewsCards value="5" />
                <NewsCards value="6" />
                <NewsCards value="7" />
                <NewsCards value="8" />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default News
