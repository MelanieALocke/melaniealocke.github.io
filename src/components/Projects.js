import React from "react";
import { projects } from "../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Projects() {
    return (
        <Container fluid className="Container">
            <section id="projects">
                <div id="projects-content">
                    <Row className="justify-content-mid-center">              
                        <div>
                            <div>
                                <h2>Projects</h2>
                                <hr id="projects-divider" />
                                <p>I wear a lot of hats. You can see examples of my work below.</p>
                            </div>
                        </div>
                    </Row>
                    <Row className="justify-content-center" id="projects-cards">
                            {projects.map((project) => (
                                <div className="Card">
                                    <div className="Card-content">
                                        <h3>{project.name}</h3>
                                        <h6>{project.company} | {project.type}</h6>
                                        <p className="Project-description">{project.description}</p>
                                        <a href={project.link} target="_blank" rel="noreferrer" className="Project-link"><strong>Take a Look.</strong></a>
                                    </div>
                                </div>
                            ))}
                    </Row>
                </div>
            </section>
        </Container>
    );
}