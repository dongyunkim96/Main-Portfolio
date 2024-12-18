import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import KoreanSnacks from "../../Assets/KoreanSnacks.png"
import StackOverflow from "../../Assets/StackOverflow.png";
import JavaScriptPractice from "../../Assets/JavaScriptPractice.jpeg";
import CssPractice from "../../Assets/CssPractice.jpeg";
import DongTube from "../../Assets/Dongtube.png";
import AlgorithmStudy from "../../Assets/AlgorithmStudy.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCards
                          imgPath={KoreanSnacks}
                          isBlog={false}
                          title="Korean Snacks Shop"
                          description="I developed a responsive e-commerce website using React to showcase and sell popular Korean snacks. The platform features a modern user interface, product browsing, shopping cart functionally, and secure checkout integration. This project highlights my skills in front-end development, state management, and API integration for seamless user experience."
                          ghLink="https://github.com/dongyunkim96/seb-45_main_025/blob/patch-2/Readme(ENG).md"
                          demoLink="https://youtube.com/watch?v=xVaUVn1yu20"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                          imgPath={StackOverflow}
                          isBlog={false}
                          title="StackOverflow Website"
                          description="This project is a web application inspired by Stack Overflow, designed to provide a platform for developers to ask questions, share knowledge and collaborate on programming-related issues. The platform features a question-and-answer system where users can post queries, provide answers, and engage in discussions."
                          ghLink="https://github.com/dongyunkim96/seb45_pre_014"
                          demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                          imgPath={JavaScriptPractice}
                          isBlog={false}
                          title="JavaScript Practice"
                          description="This project is a custom-built website designed to practice and showcase my JavaScript skills. The site features interactive components, dynamic content, and user-friendly interfaces that demonstrate various JavaScript concepts and techniques."
                          ghLink="https://github.com/dongyunkim96/JavascriptPractice"
                          demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                          imgPath={CssPractice}
                          isBlog={false}
                          title="Css Practice"
                          description="This project is a custom-built website designed to practice and refine my CSS skills. The site features visually appealing layouts, responsive designs, and creative UI components, showcasing a variety of CSS techniques and design concepts."
                          ghLink="https://github.com/dongyunkim96/CSS-Experience"
                          demoLink="https://dongyunkim96.github.io/CSS-Experience/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                          imgPath={DongTube}
                          isBlog={false}
                          title="DongTube"
                          description="DongTube is a video-sharing platform inspired by YouTube, designed to provide a seamless video streaming experience. This project replicates core YouTube functionalities, including video uploads, playback, comments, and user interactions, while adding personal design touches and features."
                          ghLink="https://github.com/dongyunkim96/DongTube"
                          demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                          imgPath={AlgorithmStudy}
                          isBlog={false}
                          title="Algorithm Study"
                          description="This repository contains a collection of JavaScript algorithmic problems I solved while studying data structures and algorithms. It includes solutions to problems from various coding platforms and covers a wide range of algorithmic concepts, from basic to advanced levels."
                          ghLink="https://github.com/dongyunkim96/AlgorithmStudy"
                          demoLink=""
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;