import React from 'react'

import Footer from "../layout/Footer"
import ContactForm from "./ContactForm"
import Details from "./Details"
import Intro from "../layout/Intro"


function Contact() {

    return (
        <div>
            <div className="wrapper wrapper-contact">
                <div className="row">
                    <div className="col-lg-6">
                        <Intro h1="Submit your details" />
                        <div className="form">
                            <ContactForm />
                        </div>
                    </div>
                    <div className="col-lg-6 order-first order-lg-last">
                        <div className=" details">
                            <Details value="email" >hello@yay.com</Details>
                            <Details value="phone" >123 456 7890</Details>
                            <Details value="pin" >
                                <ul>
                                    <li>123 Some Street</li>
                                    <li>Somewhere</li>
                                    <li>Some City</li>
                                    <li>10000</li>
                                </ul>
                            </Details>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
