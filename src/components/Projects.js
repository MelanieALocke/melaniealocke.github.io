import React from "react";
import { projects } from "../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects() {
    return (
        <Container fluid>
            <section id="projects" className="Container">
                <div id="projects-content">
                    <Row className="justify-content-center">              
                        <div>
                            <div>
                                <h2>Projects</h2>
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