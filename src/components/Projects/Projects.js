import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="LogiTrack"
              description="LogiTrack API streamlines order, delivery management. Users create orders, admins assign, tracking, notifications, security, error handling, and clear documentation."
              ghLink="https://github.com/Bellonee29/LogiTrack-User-Api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="GoCash"
              description="goCash is a versatile fintech application API designed to facilitate secure fund transfers, account management, and transaction notifications. It utilizes Spring Boot, PostgreSQL for data management"
              ghLink="https://github.com/Bellonee29/goCash-App-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CoutureConnect"
              description="CoutureConnect, an exquisite fashion blog, caters to both men and women, offering a curated blend of style inspiration, trend analyses, and lifestyle insights"
              ghLink="https://github.com/Bellonee29/CoutureConnect-API"            
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="WalletWise"
              description="WalletWise is a versatile fintech application API designed to facilitate secure money flow and build using microservice architecture. It utilizes Spring Boot, PostgreSQL for data management"
              ghLink="https://github.com/Bellonee29/WalletWise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LandAuto"
              description="Land Auto App is a powerful tool designed to simplify the process of registering land automobiles and generate a unique identification number."
              ghLink="https://github.com/Bellonee29/Land-auto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CoutureConnect"
              description="CoutureConnect, an exquisite fashion blog, caters to both men and women, offering a curated blend of style inspiration, trend analyses, and lifestyle insights"
              ghLink="https://github.com/Bellonee29/CoutureConnect-API"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
