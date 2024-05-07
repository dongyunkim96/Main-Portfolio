import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Dongyun Kim</span>
                        from <span className="purple"> Virginia, U.S.</span>
                        <br />
                        I am currently study about Front-end developing skills.
                        <br />
                        I have completed
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Soccer
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Traveling
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Writing Tech Blogs
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Dongyun</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;