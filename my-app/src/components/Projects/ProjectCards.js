import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  techStack = [],
  isBlog = false,
}) {
  return (
    <Card className="project-card-view">
      {/* Project Image */}
      <div className="project-image-container">
        <Card.Img
          variant="top"
          src={imgPath}
          alt={`${title} project`}
          className="project-card-image"
        />
      </div>

      {/* Card Content */}
      <Card.Body className="project-card-body">
        {/* Title */}
        <Card.Title className="project-card-title">
          {title}
        </Card.Title>

        {/* Tech Stack */}
        <div className="project-tech-stack">
          {techStack.map((tech) => (
            <Badge key={tech} className="project-tech-badge">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <Card.Text className="project-card-description">
          {description}
        </Card.Text>

        {/* Buttons */}
        <div className="project-card-buttons">
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
            <span>{isBlog ? "Blog" : "GitHub"}</span>
          </Button>

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite />
              <span>Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;