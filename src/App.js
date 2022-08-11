import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/index.css";
import Container from "react-bootstrap/Container";
import Projects from "./components/Projects";
import About from "./components/About";
import TopNav from "./components/Nav";
import Contact from "./components/Contact";
// import Row from "react-bootstrap/Row";

function App() {
  return (
    <Container>
     <TopNav></TopNav>
        <About></About>
     
        <Projects />
        <Contact/>
      
    </Container>
  );
}

export default App;
