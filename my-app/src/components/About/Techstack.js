import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiAngularSimple,
    DiHtml5,
    DiGit,
    DiCss3,
} from "react-icons/di";
import {
    SiRedux,
    SiTypescript,
    SiTailwindcss,
    SiStyledcomponents,
} from "react-icons/si";
import { 
    FaVuejs,
    FaGithub,
    FaFigma
 } from "react-icons/fa";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FaFigma />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaVuejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaGithub />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAngularSimple />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiStyledcomponents />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
            </Col>
        </Row>
    );
}

export default Techstack;