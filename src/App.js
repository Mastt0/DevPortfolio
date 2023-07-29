import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import HomeLayout from "./components/HomeLayout";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function App() {
  return (
    <Router>
      <div>
        <Container>
          <header>
            <Navbar />
          </header>
        </Container>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
