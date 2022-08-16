import React from "react";
import coverImage from "../../assets/photos/FacePic.png";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Video3 from '../../assets/videos/LightningHeader.mp4'


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
    <Card.Header className="cardHeader" as="h5">
    <video autoPlay loop muted id="video" className="headerVid">
        <source src={Video3} type="video/mp4" />
      </video>
       <div className="cardTitle">TheDecoder007</div> 
    </Card.Header>
        
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
