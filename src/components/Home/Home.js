import React from 'react'

import TopNav from "../TopNav";
import Hero from "./Hero";
import MainContent from "./MainContent";
import Footer from "../Footer";

function Home() {
    return (
        <div className="App">
            <TopNav value="home" />
            <Hero />
            <MainContent />
            <Footer />
        </div>
    )
}

export default Home
