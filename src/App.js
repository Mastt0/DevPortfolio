import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import { GlobalStyle } from "./assets/GlobalStyle";

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
        <GlobalStyle />
        <Navbar />
        <Container>
          <header></header>
        </Container>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
