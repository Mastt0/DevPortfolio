import React from "react";
import "./App.css";
import Navbar from "./Navbar";
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
      <div style={{ backgroundColor: "black", color: "white" }}>
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
