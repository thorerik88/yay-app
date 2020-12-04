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
                <NewsCards />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default News
