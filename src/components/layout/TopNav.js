import React from 'react'

import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


function TopNav() {

    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <Navbar.Brand href="#home" className="navbar--brand">The YAY Company</Navbar.Brand>
            <Navbar.Toggle className="navbar--toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navbar--nav">
                    <NavLink exact to="/" className="navbar--nav--link">Home</NavLink>
                    <NavLink to="/News" className="navbar--nav--link">News</NavLink>
                    <NavLink to="/Contact" className="navbar--nav--link">Contact</NavLink>
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
