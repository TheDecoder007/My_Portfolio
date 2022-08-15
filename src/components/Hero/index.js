import React from "react";
import Container from "react-bootstrap/Container";
import Video from "../../assets/videos/DecoderIntro.mp4";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './style.css'

const Hero = () => {
  return (
        <Row>
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
        </Row>
  );
};

export default Hero;
