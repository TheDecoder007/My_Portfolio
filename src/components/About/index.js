import React from "react";
import coverImage from "../../assets/photos/FacePic.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Video3 from "../../assets/videos/LightningHeader.mp4";

const About = () => {
  return (
    <Container fluid className="aboutCont" id="about">
      <Row className="aboutMe">
        <h3 className="text-center sectionHead">About Me</h3>
      </Row>
      <Row className="text-center">
        <Col className="AboutCard">
          <Card className="AboutCrd">
            <Card.Header className="cardHeader" as="h5">
              <video autoPlay loop muted id="video" className="headerVid">
                <source src={Video3} type="video/mp4" />
              </video>
              <div className="cardTitle">TheDecoder</div>
            </Card.Header>

            <Card.Img variant="bottom" src={coverImage} alt="cover" />
          </Card>
        </Col>

        <Col className="AboutMe">
          <p>
            <h3>Ambitions:</h3>
            My passion is developing cutting edge experiences in the metaverse
            for high profile clients worldwide. Successes include builds for
            Samsung, Netflix, and Sandstorm among many others. I love the
            prospects of web3 & the metaverse, building apps, and constantly
            expanding my knowledge of coding languages. Projects also include
            full MERN stack, API's, and more. Strong leadership experience with
            proven success in team management, strategic operations, business
            development, and customer service.
            <br />
            <br />
            <h3>Education:</h3>
            <h5>Univerity of Connecticut School of Engineering</h5>
            <h6>Full Stack Bootcamp</h6>
            -24-week intensive program dedicated to designing and building web
            applications. Skills learned include: HTML, CSS, Javascript, JQuery,
            Bootstrap, Node.JS, MySQL, MongoDB, Express, API's, Handlebars,
            React, and GraphQL. Self learning React-Threes, Solidity, and AWS.
            <br />
            <br />
            <h3>Experience:</h3>
            -Metaverse experience includes 2 years working for The Last Slice
            Collective, a full cycle development studio for high profile clients
            in Decentraland. Primarily roles were advisory positions and scene
            development.
            <br />
            -Lead developer for SandStorm.co virtual headquarters in
            Decentraland. 11 week project adding client requests, and
            implementing advanced coding to give additional functionality, space
            utilization, and "magic".
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
