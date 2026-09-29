import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BUILDING <span className="purple">MODERN WEB EXPERIENCES</span>
            </h1>

            <p className="home-about-body">
              I'm a passionate{" "}
              <b className="purple">Front-End Developer</b> focused on
              building modern, responsive, and user-friendly web applications.
              
              <br />
              <br />

              I enjoy turning ideas into polished digital experiences using{" "}
              <b className="purple">
                React, JavaScript, TypeScript, Tailwind CSS
              </b>
              , and modern front-end technologies — with a strong focus on
              clean UI, reusable components, responsive design, and
              maintainable code.

              <br />
              <br />

              I'm also actively integrating{" "}
              <b className="purple">AI into my development workflow</b>,
              using AI-powered tools to accelerate development, explore
              solutions, debug efficiently, and improve the way I design
              and build applications.

              <br />
              <br />

              Beyond simply writing code, I enjoy understanding{" "}
              <b className="purple">why things work</b>, solving real-world
              problems, and continuously improving both the technical and
              user experience sides of the products I build.

              <br />
              <br />

              I'm always exploring new technologies and looking for
              opportunities to build products that are{" "}
              <b className="purple">
                useful, intuitive, and meaningful.
              </b>
            </p>
          </Col>

          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Developer avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT</h1>

            <p>
              Interested in working together?{" "}
              <span className="purple">Let's connect.</span>
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dongyunkim96"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://twitter.com/dongyunkim96"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/dongyun-kim-363487272/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://instagram.com/eastbright_dong/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;