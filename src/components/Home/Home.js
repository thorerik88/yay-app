import React from 'react'

import Hero from "./Hero";
import MainContent from "./MainContent";
import Footer from "../layout/Footer";

function Home() {
    return (
        <div className="App">
            <Hero />
            <MainContent />
            <Footer />
        </div>
    )
}

export default Home
