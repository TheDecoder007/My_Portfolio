import React from "react";
// import { SectionHeader, SectionHeaderWrap } from "./ProjectElements";
import ProjectCard  from "./ProjectCard";
import { cardOneInfo } from "./data";
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
        <header>MY Projects</header>
        </Row>
        <Row>
        <ProjectCard {...cardOneInfo}/>
        {/* <ProjectCard {...cardTwoInfo}/>
        <ProjectCard {...cardThreeInfo}/>
        <ProjectCard {...cardFourInfo}/> */}
        </Row>
      </Container>
    );
  };

  export default Projects;