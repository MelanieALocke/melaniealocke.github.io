import React from "react";
import { projects } from "../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects() {
    return (
        <Container fluid className="Container">
            <section id="projects">
                <div id="projects-content">
                    <Row className="justify-content-mid-center">              
                        <div>
                            <div>
                                <h2>Projects</h2>
                                <p>I wear a lot of hats. You can see examples of all of my work below, or use the buttons to find content by category.</p>
                            </div>
                        </div>
                    </Row>
                    <Row className="flex-wrap-wrap justify-content-center">
                            {projects.map((project) => (
                                <div className="Card">
                                    <div className="Card-content">
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            ))}
                    </Row>
                </div>
            </section>
        </Container>
    );
}