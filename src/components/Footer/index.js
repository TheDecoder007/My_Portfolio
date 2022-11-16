import React from "react";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Video4 from "../../assets/videos/LightningHeader.mp4";
import "./style.css";
import pdf from "../../assets/photos/Metaverse_Resume.pdf";

function PageFooter() {
  return (
    <footer className="Footer">
      <video autoPlay loop muted id="video" className="footerVid">
        <source src={Video4} type="video/mp4" />
      </video>
      <Row>
        <Nav className="footerLink">
          <Nav.Item className="footerText footLink">My Links:</Nav.Item>
          <Nav.Link
            className="footerText"
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/TheDecoder007"
          >
            GitHub
          </Nav.Link>
          <Nav.Link className="footerText" target={"_blank"} href={pdf}>
            Resume
          </Nav.Link>
          <Nav.Link
            className="footerText"
            target={"_blank"}
            rel="noreferrer"
            href="https://www.linkedin.com/in/ryan-murphy-b03435254/"
          >
            LinkedIn
          </Nav.Link>
          <Nav.Link
            className="footerText"
            href="mailto:TheDecoder007@gmail.com"
          >
            Email Me
          </Nav.Link>
        </Nav>
      </Row>
    </footer>
  );
}
export default PageFooter;
