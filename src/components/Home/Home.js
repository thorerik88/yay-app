import React from 'react'

import TopNav from "../TopNav";
import Hero from "./Hero";
import MainContent from "./MainContent";

function Home() {
    return (
        <div className="App">
            <TopNav />
            <Hero />
            <MainContent />
        </div>
    )
}

export default Home
