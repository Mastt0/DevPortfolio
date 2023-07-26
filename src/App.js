import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import HomeLayout from "./components/HomeLayout";
import ReactLogo from "./components/ReactLogo";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Container>
        <header className="App-header">
          <Navbar />
        </header>
      </Container>
      <HomeLayout />
      <ReactLogo />
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default App;
