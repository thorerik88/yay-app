import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


function TopNav(props) {

    let activeClass = "navbar--nav--link navbar--nav--link__active";
    let navLinkClass = "navbar--nav--link";

    let homeLinkClass = navLinkClass;
    let newsLinkClass = navLinkClass;
    let contactLinkClass = navLinkClass; 

    if (props.value === "home") {
        homeLinkClass = activeClass;
    } else if (props.value === "news") {
        newsLinkClass = activeClass;
    } else if (props.value === "contact") {
        contactLinkClass = activeClass;
    }

    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <Navbar.Brand href="#home" className="navbar--brand">The YAY Company</Navbar.Brand>
            <Navbar.Toggle className="navbar--toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navbar--nav">
                    <Nav.Link href="#home" className={homeLinkClass}>Home</Nav.Link>
                    <Nav.Link href="#link" className={newsLinkClass}>News</Nav.Link>
                    <Nav.Link href="#link" className={contactLinkClass}>Contact</Nav.Link>
                </Nav>
                
                    <Form inline className="navbar--form">
                        <FormControl className="navbar--form--search" type="text" placeholder="Search"/>
                        <Button className="navbar--form--btn">Go</Button>
                    </Form>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNav
