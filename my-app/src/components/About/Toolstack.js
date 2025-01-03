import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiDiscord,
    SiVercel,
    SiMacos,
    SiNotion,
    SiZoom
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col><Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col><Col xs={4} md={2} className="tech-icons">
                <SiDiscord />
            </Col><Col xs={4} md={2} className="tech-icons">
                <SiVercel />
            </Col><Col xs={4} md={2} className="tech-icons">
                <SiMacos />
            </Col><Col xs={4} md={2} className="tech-icons">
                <SiNotion />
            </Col><Col xs={4} md={2} className="tech-icons">
                <SiZoom />
            </Col>            
        </Row>
    );
}

export default Toolstack;