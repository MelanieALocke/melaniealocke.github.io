import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";

export default function Navigation() {
    return (
        <header>
            <Navbar fixed="top" collapseOnSelect expand="md" className="Navbar">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/#about">About</Nav.Link>
                <Nav.Link href="/#projects">Projects</Nav.Link>
            </Navbar>
        </header>
    );
}