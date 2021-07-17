import React from "react";
import Container from 'react-bootstrap/Container';

export default function Welcome() {
    return (
        <Container fluid>
            <section id="welcome" className="Container">
                <div id="welcome-content">
                    <h1> Welcome to Mel.</h1>
                </div>
            </section>
        </Container>
    );
}