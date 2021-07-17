import React from "react";
import Container from 'react-bootstrap/Container';

export default function Welcome() {
    return (
        <Container fluid className="Container">
            <section id="welcome">
                <div id="welcome-content">
                    <h1 id="welcome-message">Welcome to <a href="/#about" className="Blue-underline-link">Mel.</a></h1>
                </div>
            </section>
        </Container>
    );
}