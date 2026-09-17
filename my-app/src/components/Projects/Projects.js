import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";

import KoreanSnacks from "../../Assets/KoreanSnacks.png";
import StackOverflow from "../../Assets/StackOverflow.png";
import JavaScriptPractice from "../../Assets/JavaScriptPractice.jpeg";
import CssPractice from "../../Assets/CssPractice.jpeg";
import DongTube from "../../Assets/Dongtube.png";
import AlgorithmStudy from "../../Assets/AlgorithmStudy.png";
import ShillaBakery from "../../Assets/ShillaBakery.png";
import EasyMart from "../../Assets/EasyMart.png";
import StickyNotes from "../../Assets/StickyNotes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p className="project-subtitle">
          Here are a few projects I've worked on recently.
        </p>

        <Row className="justify-content-center">
          {/* Korean Snacks */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <ProjectCards
              imgPath={KoreanSnacks}
              title="Korean Snacks Shop"
              techStack={[
                "React",
                "JavaScript",
                "CSS",
                "REST API",
              ]}
              description="A responsive e-commerce platform for browsing and purchasing Korean snacks. Built with reusable React components, state management, API integration, shopping cart functionality, and a user-friendly responsive interface."
              ghLink="https://github.com/dongyunkim96/seb-45_main_025/blob/patch-2/Readme(ENG).md"
              demoLink="https://youtube.com/watch?v=xVaUVn1yu20"
            />
          </Col>

          {/* EasyMart */}
<Col xs={12} md={6} lg={4} className="project-card">
  <ProjectCards
    imgPath={EasyMart}
    title="EasyMart"
    techStack={[
      "React",
      "Firebase",
      "Redux Toolkit",
      "Material UI",
      "Vite",
    ]}
    description="A full-featured e-commerce web application built with React and Firebase. The project features product browsing, user authentication, shopping cart management, and cloud-based data storage, with Redux Toolkit handling application state and Material UI providing a responsive interface."
    ghLink="https://github.com/dongyunkim96/EasyMart_Firebase"
    demoLink="https://easymart-kappa.vercel.app/"
  />
</Col>

{/* Shilla Bakery */}
<Col xs={12} md={6} lg={4} className="project-card">
  <ProjectCards
    imgPath={ShillaBakery}
    title="Shilla Bakery"
    techStack={[
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Router",
    ]}
    description="A modern and responsive bakery website built with React, TypeScript, and Tailwind CSS. The project focuses on reusable components, responsive layouts, clean navigation, and a scalable front-end architecture designed to provide a smooth experience across desktop and mobile devices."
    ghLink="YOUR_SHILLA_BAKERY_GITHUB_LINK"
    demoLink="https://shilla-bakery.vercel.app"
  />
</Col>

          {/* Sticky Notes */}
<Col xs={12} md={6} lg={4} className="project-card">
  <ProjectCards
    imgPath={StickyNotes}
    title="Sticky Notes"
    techStack={[
      "React",
      "JavaScript",
      "CSS",
    ]}
    description="A simple and interactive sticky notes application designed for creating and managing notes in an intuitive interface. The project focuses on React component structure, state management, user interactions, and responsive front-end design."
    ghLink="https://github.com/dongyunkim96/StickyNotes"
    demoLink="https://sticky-notes-nine-sandy.vercel.app"
  />
</Col>

          {/* StackOverflow */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <ProjectCards
              imgPath={StackOverflow}
              title="StackOverflow Website"
              techStack={[
                "React",
                "JavaScript",
                "CSS",
                "REST API",
              ]}
              description="A collaborative question-and-answer platform inspired by Stack Overflow. Users can post programming questions, submit answers, and interact with developer-focused content through a responsive web interface."
              ghLink="https://github.com/dongyunkim96/seb45_pre_014"
              demoLink=""
            />
          </Col>

          {/* JavaScript Practice */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <ProjectCards
              imgPath={JavaScriptPractice}
              title="JavaScript Practice"
              techStack={[
                "JavaScript",
                "HTML",
                "CSS",
              ]}
              description="A collection of interactive web exercises created to strengthen core JavaScript skills. The project demonstrates DOM manipulation, event handling, dynamic content, and practical front-end programming concepts."
              ghLink="https://github.com/dongyunkim96/JavascriptPractice"
              demoLink=""
            />
          </Col>

          {/* CSS Practice */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <ProjectCards
              imgPath={CssPractice}
              title="CSS Practice"
              techStack={[
                "CSS",
                "HTML",
                "Responsive Design",
              ]}
              description="A collection of creative UI components and layouts built to explore modern CSS techniques. The project focuses on responsive design, animations, positioning, transitions, and visual styling."
              ghLink="https://github.com/dongyunkim96/CSS-Experience"
              demoLink="https://dongyunkim96.github.io/CSS-Experience/"
            />
          </Col>

          {/* DongTube */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <ProjectCards
              imgPath={DongTube}
              title="DongTube"
              techStack={[
                "React",
                "JavaScript",
                "CSS",
                "API",
              ]}
              description="A video-sharing web application inspired by YouTube. The project recreates familiar video platform features such as browsing, playback, comments, and user interactions with a responsive interface."
              ghLink="https://github.com/dongyunkim96/DongTube"
              demoLink=""
            />
          </Col>

          {/* Algorithm Study */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <ProjectCards
              imgPath={AlgorithmStudy}
              title="Algorithm Study"
              techStack={[
                "JavaScript",
                "Algorithms",
                "Data Structures",
              ]}
              description="A collection of JavaScript solutions to algorithm and data structure challenges. The repository demonstrates problem-solving skills across arrays, strings, sorting, searching, recursion, and other core concepts."
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