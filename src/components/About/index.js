import React from "react";
import coverImage from "../../assets/photos/FacePic.png";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



const About = () => {
  return (
    // <Container fluid id="about" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<Container fluid className='aboutCont' id='about'>
  <Row className='aboutMe'>
  <h3 className="text-center sectionHead">About Me</h3>

  </Row>
<Row className="text-center">
<Col className="AboutCard">
   <Card className='AboutCrd' >
    <Card.Header className="aboutHeader" as="h5">TheDecoder007</Card.Header>
        
      <Card.Img variant="bottom"
         src={coverImage} 
        alt="cover"/>
        
      </Card>
        </Col>

        <Col className="AboutMe">
      <p>lorem ipsum impsum lorem lorem ipsum impsum 
        lorem lorem ipsum impsum lorem lorem ipsum impsum lore
        m lorem ipsum impsum lorem lorem ipsum impsum lorem lorem ipsum i
        mpsum lorem lorem ipsum impsum lorem lorem ipsum impsum lorem lorem
         ipsum impsum lorem lorem ipsum impsum lorem lorem ipsum impsum lorem 
         lorem ipsum impsum lorem lorem ipsum impsum lorem
        <br/>
        <br/>
         lorem ipsum impsum lorem lorem ipsum impsum 
        lorem lorem ipsum impsum lorem lorem ipsum impsum lore
        m lorem ipsum impsum lorem lorem ipsum impsum lorem lorem ipsum i
        mpsum lorem lorem ipsum impsum lorem lorem ipsum impsum lorem lorem
         ipsum impsum lorem lorem ipsum impsum lorem lorem ipsum impsum lorem 
         lorem ipsum impsum lorem lorem ipsum impsum lorem
        <br/>
        <br/>
         lorem ipsum impsum lorem lorem ipsum impsum 
        lorem lorem ipsum impsum lorem lorem ipsum impsum lore
        m lorem ipsum impsum lorem lorem ipsum impsum lorem lorem ipsum i
        mpsum lorem lorem ipsum impsum lorem lorem ipsum impsum lorem lorem
         ipsum impsum lorem lorem ipsum impsum lorem lorem ipsum impsum lorem 
         lorem ipsum impsum lorem lorem ipsum impsum lorem
         </p>
        </Col>
        </Row>
       </Container>
  );
};

export default About;
