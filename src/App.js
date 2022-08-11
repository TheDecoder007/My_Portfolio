import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/index.css";
import Container from "react-bootstrap/Container";
import Projects from "./components/Projects";
import About from "./components/About";
import TopNav from "./components/Nav";
import Contact from "./components/Contact";
import { Tabs } from "react-bootstrap";
// import Row from "react-bootstrap/Row";

function App() {
  const [activeTab,setActiveTab] = useState("About")

 const currentPage = () =>{
  if (activeTab === "About") return <About/>
  if (activeTab === "Projects") return <Projects/>
  if (activeTab === "Contact") return <Contact/>
 }

 const changeActiveTab = (tab) => setActiveTab(tab)


  return (
    <Container>
     <TopNav  activeTab={activeTab} changeActiveTab={changeActiveTab}/>
    {currentPage()}    
    </Container>
  );
}

export default App;
