import React from 'react'

import TopNav from "../TopNav"
import Footer from "../Footer"
import ContactForm from "./ContactForm"
import Details from "./Details"


function Contact() {

    return (
        <div>
            <TopNav value="contact" />
            <div className="wrapper">
                <div className="intro">
                    <h1>Submit your details</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 order-lg-1 order-md-2">
                        <ContactForm />
                    </div>
                    <div className="col-lg-6 order-lg-2 order-md-1">
                        <Details />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
