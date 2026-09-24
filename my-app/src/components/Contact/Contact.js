import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineSend,
} from "react-icons/ai";

import {
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMediumM,
} from "react-icons/fa";

function Contact() {

  /* =================================
     Form State
  ================================= */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);


  /* =================================
     Handle Input Change
  ================================= */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  /* =================================
     Handle Form Submit
  ================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      // Success
      setStatus("success");

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");

    } finally {
      setIsSending(false);
    }
  };


  return (
    <Container fluid className="contact-section">

      <Particle />

      <Container className="contact-container">

        {/* =================================
            Page Heading
        ================================= */}

        <Row className="justify-content-center">

          <Col md={10} className="contact-heading">

            <h1>
              CONTACT <strong className="purple">ME</strong>
            </h1>

            <p>
              Have a question or want to work together?
              Feel free to reach out.
            </p>

          </Col>

        </Row>


        {/* =================================
            Main Contact Section
        ================================= */}

        <Row className="contact-content">


          {/* =================================
              Left - Get In Touch
          ================================= */}

          <Col lg={5} md={6} className="contact-info-wrapper">

            <div className="contact-info-card">

              <h2>Get In Touch</h2>

              <p className="contact-intro">
                I'm always open to discussing new projects,
                opportunities, or ideas related to web development.
              </p>


              {/* Location */}

              <div className="contact-info-item">

                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div className="contact-info-text">

                  <h4>Location</h4>

                  <p>
                    Northern Virginia, USA
                  </p>

                </div>

              </div>


              {/* Phone */}

              <div className="contact-info-item">

                <div className="contact-icon">
                  <AiOutlinePhone />
                </div>

                <div className="contact-info-text">

                  <h4>Phone</h4>

                  <a href="tel:+1XXXXXXXXXX">
                    (540) 986-8669
                  </a>

                </div>

              </div>


              {/* Email */}

              <div className="contact-info-item">

                <div className="contact-icon">
                  <AiOutlineMail />
                </div>

                <div className="contact-info-text">

                  <h4>Email</h4>

                  <a href="mailto:your-email@example.com">
                    dongyunkim96@gmail.com
                  </a>

                </div>

              </div>


              {/* GitHub */}

              <div className="contact-info-item">

                <div className="contact-icon">
                  <AiFillGithub />
                </div>

                <div className="contact-info-text">

                  <h4>GitHub</h4>

                  <a
                    href="https://github.com/dongyunkim96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/dongyunkim96
                  </a>

                </div>

              </div>


              {/* LinkedIn */}

              <div className="contact-info-item">

                <div className="contact-icon">
                  <FaLinkedinIn />
                </div>

                <div className="contact-info-text">

                  <h4>LinkedIn</h4>

                  <a
                    href="https://linkedin.com/in/dongyun-kim-363487272/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dongyun Kim
                  </a>

                </div>

              </div>


              {/* Medium Blog */}

              <div className="contact-info-item">

                <div className="contact-icon">
                  <FaMediumM />
                </div>

                <div className="contact-info-text">

                  <h4>Blog</h4>

                  <a
                    href="https://medium.com/@dongyunkim96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    My Medium Blog
                  </a>

                </div>

              </div>

            </div>

          </Col>


          {/* =================================
              Right - Send Message
          ================================= */}

          <Col lg={7} md={6}>

            <div className="contact-form-card">

              <h2>Send Me a Message</h2>


              <Form onSubmit={handleSubmit}>


                {/* Name */}

                <Form.Group
                  className="contact-form-group"
                  controlId="contactName"
                >

                  <Form.Label>
                    Name
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />

                </Form.Group>


                {/* Email */}

                <Form.Group
                  className="contact-form-group"
                  controlId="contactEmail"
                >

                  <Form.Label>
                    Email
                  </Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />

                </Form.Group>


                {/* Subject */}

                <Form.Group
                  className="contact-form-group"
                  controlId="contactSubject"
                >

                  <Form.Label>
                    Subject
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />

                </Form.Group>


                {/* Message */}

                <Form.Group
                  className="contact-form-group"
                  controlId="contactMessage"
                >

                  <Form.Label>
                    Message
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  />

                </Form.Group>


                {/* Send Button */}

                <Button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isSending}
                >

                  <AiOutlineSend />

                  <span>
                    {isSending
                      ? "Sending..."
                      : "Send Message"}
                  </span>

                </Button>


                {/* Success Message */}

                {status === "success" && (

                  <p className="contact-success">
                    ✓ Message sent successfully!
                  </p>

                )}


                {/* Error Message */}

                {status === "error" && (

                  <p className="contact-error">
                    ✕ Failed to send message. Please try again.
                  </p>

                )}

              </Form>

            </div>

          </Col>

        </Row>


        {/* =================================
            Connect With Me
        ================================= */}

        <Row className="contact-social-section">

          <Col md={12} className="contact-social">

            <h2>
              CONNECT WITH ME
            </h2>

            <p>
              Feel free to{" "}
              <span className="purple">
                connect
              </span>{" "}
              with me
            </p>


            <ul className="contact-social-links">


              {/* GitHub */}

              <li>

                <a
                  href="https://github.com/dongyunkim96"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >

                  <AiFillGithub />

                </a>

              </li>


              {/* LinkedIn */}

              <li>

                <a
                  href="https://linkedin.com/in/dongyun-kim-363487272/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >

                  <FaLinkedinIn />

                </a>

              </li>


              {/* Medium */}

              <li>

                <a
                  href="https://medium.com/@dongyunkim96"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Medium Blog"
                >

                  <FaMediumM />

                </a>

              </li>


              {/* Instagram */}

              <li>

                <a
                  href="https://instagram.com/eastbright_dong/"
                  target="_blank"
                  rel="noreferrer"
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

export default Contact;