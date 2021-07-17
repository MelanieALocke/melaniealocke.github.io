import React from "react";
import TrainPic from '../trainpic.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <Container fluid className="Container" id="about-container">
            <section id="about">
                <div id="about-content">
                    <Row className="justify-content-md-center">
                        <Col md="5">
                            <div>
                                <img 
                                    className="Image" 
                                    alt="Mel pushing a large yellow train"
                                    src={TrainPic}
                                />
                            </div>
                        </Col>
                        <Col md="5">
                            <div id="about-words">
                                <div>
                                    <h2>
                                        She's a writer, editor, and creative thinker. 
                                    </h2>
                                </div>
                                <div style={{ margin: 20 }}>
                                    <p>
                                        <span style={{ fontSize: "25px", paddingRight: "5px" }}>&#128072;</span>
                                        That's me. I'm Melanie Locke — the brain behind this website and all the projects listed here. 
                                        I work with words, ideas, and people to bring creative and promotional content to life. 
                                        I've written words across industries and modalities. 
                                        Passionate about technology and education.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </Container>
    );
}