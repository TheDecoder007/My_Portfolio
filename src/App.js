import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container  from 'react-bootstrap/Container';
import Projects  from './components/Projects';

function App() {
  return (
<Container fluid>
    <Projects/>
</Container>
    );
}

export default App;
