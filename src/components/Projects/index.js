import React from "react";
// import { SectionHeader, SectionHeaderWrap } from "./ProjectElements";
import ProjectCard  from "./ProjectCard";
import { cardOneInfo, cardTwoInfo, cardThreeInfo, cardFourInfo, cardFiveInfo, cardSixInfo } from "./data";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


// export const Projects = () => {
//   return (
//     <ProjectWrapper id="projects">
//       <SectionContainer>
//       <SectionHeaderWrap>
//         <SectionHeader>Projects</SectionHeader>
//       </SectionHeaderWrap>
//       <ProjectCard {...cardOneInfo}/>
//       <ProjectCard {...cardTwoInfo}/>
//       <ProjectCard {...cardThreeInfo}/>
//       <ProjectCard {...cardFourInfo}/>
//       </SectionContainer>
//     </ProjectWrapper>
//   );
// };


function Projects() {
    return (
      <Container fluid id="projects">
        <Row>
        <h3 className="text-center">My Projects</h3>
        </Row>
        <Row className="CardRow">
        <ProjectCard {...cardOneInfo}/>
        <ProjectCard {...cardTwoInfo}/>
        <ProjectCard {...cardThreeInfo}/>
        <ProjectCard {...cardFourInfo}/>
        <ProjectCard {...cardFiveInfo}/>
        <ProjectCard {...cardSixInfo}/>
        </Row>
       </Container>
    );
  };

  export default Projects;