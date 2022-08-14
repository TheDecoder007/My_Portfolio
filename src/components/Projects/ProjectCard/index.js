import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'


// import {
//   ImageWrapper,
//   DescriptionWrapper,
//   HeaderSection,
//   MainTitle,
//   SubTitle,
//   Content,
//   Image,
//   ButtonWrapper,
// } from "./CardElements";
// import { Button } from "../../ButtonElement";
function ProjectCard ({
  img,
  title,
  description,
  line,
  alt,
  website,
  repo,
})  {
//   console.log({ website });
//   let web = website;
//   console.log(web);

  return (
    <Col className="CardCol">
    <Card className="text-center wholeCard" style={{ width: '27rem', height: '34rem'}}>
    <Card.Header className="aboutHeader" as="h5">{title}</Card.Header>
        
        <Card.Img src={img} alt={alt} />
        {/* <OverlayDescription>Technologies: {description}</OverlayDescription>
        <OverlayTitle>{title}</OverlayTitle> */}
        <Card.Body>
          <Card.Subtitle>Technologies Used: {description}</Card.Subtitle>
          <br/>
          <Card.Text>{line}</Card.Text>
              <>
              <Button className="AllBtn" as="a" href={website} target="_blank">
                Live App
              </Button>
              <Button className="AllBtn" as="a" href={repo} target="_blank">
                Github Repo
              </Button>
            </>
          {/* )} */}
          </Card.Body>
    </Card>
    
        </Col>
  );
};

export default ProjectCard;