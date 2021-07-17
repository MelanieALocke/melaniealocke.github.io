import React from "react";
import TrainPic from '../trainpic.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <Container fluid>
            <section id="about" className="Container">
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
                            <div>
                                <div style={{ textAlign: "center", margin: 20 }}>
                                    <h2>She's a writer, reader, and creative thinker.</h2>
                                </div>
                                <div style={{ margin: 20 }}>
                                    <p>
                                        Caramels ice cream carrot cake topping. Macaroon sesame snaps candy canes danish lollipop powder sweet roll powder. Gingerbread jelly-o jelly beans. Macaroon chocolate bar pastry halvah sweet roll croissant tiramisu. Gummi bears carrot cake pudding croissant bear claw lemon drops bear claw toffee. Sweet pastry danish dessert gummi bears caramels sugar plum ice cream candy canes.
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