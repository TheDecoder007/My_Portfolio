import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={img} alt={alt} />
        {/* <OverlayDescription>Technologies: {description}</OverlayDescription>
        <OverlayTitle>{title}</OverlayTitle> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>Technologies: {description}</Card.Subtitle>
          <Card.Text>{line}</Card.Text>

          {/* {website === repo ? (
              <Button as="a" href={repo} target="_blank">
              Github Repo
            </Button>
          ) : ( */}
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
  );
};

export default ProjectCard;