import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Download Button */}
      <Row className="resume-download">
        <Button
          variant="primary"
          href="/Dongyun_Kim_Resume.pdf"
          download="Dongyun_Kim_Resume.pdf"
          className="resume-download-btn"
        >
          <AiOutlineDownload />
          &nbsp; Download CV
        </Button>
      </Row>

      {/* Resume PDF */}
      <Row className="resume-pdf">
        <Document
          file="/Dongyun_Kim_Resume.pdf"
          className="resume-document"
          loading={<p className="resume-loading">Loading Resume...</p>}
        >
          <Page
            pageNumber={1}
            width={width > 900 ? 850 : width * 0.9}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </Row>
    </Container>
  );
}

export default Resume;