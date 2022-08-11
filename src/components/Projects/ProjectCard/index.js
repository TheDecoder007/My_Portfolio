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
    <Col className="WholeCard">
    <Card className="text-center" style={{ width: '25rem', height: '30rem'}}>
        <Card.Img src={img} alt={alt} />
        {/* <OverlayDescription>Technologies: {description}</OverlayDescription>
        <OverlayTitle>{title}</OverlayTitle> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>Technologies Used: {description}</Card.Subtitle>
          <Card.Text>{line}</Card.Text>
              <>
              <Button as="a" href={website} target="_blank">
                Live App
              </Button>
              <Button as="a" href={repo} target="_blank">
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