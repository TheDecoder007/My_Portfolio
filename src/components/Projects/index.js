import React from "react";
import ProjectCard from "./ProjectCard";
import {
  cardOneInfo,
  cardTwoInfo,
  cardThreeInfo,
  cardFourInfo,
  cardFiveInfo,
  cardSixInfo,
  cardSevenInfo,
} from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Projects() {
  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">My Projects</h3>
      </Row>
      <Row className="CardRow">
        <ProjectCard {...cardOneInfo} />
        <ProjectCard {...cardTwoInfo} />
        <ProjectCard {...cardThreeInfo} />
        <ProjectCard {...cardFourInfo} />
        <ProjectCard {...cardFiveInfo} />
        <ProjectCard {...cardSixInfo} />
        <ProjectCard {...cardSevenInfo} />

      </Row>
    </Container>
  );
}

export default Projects;
