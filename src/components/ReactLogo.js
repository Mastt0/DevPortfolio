import React from "react";
import logo from "../logo.svg";
import styled, { keyframes } from "styled-components";

const ReactLogo = () => {
  return (
    <div>
      <Container>
        <LogoImage src={logo} alt="logo" />
        <p>Under Construction</p>
      </Container>
    </div>
  );
};

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  height: 50vmin;
  pointer-events: none;
  background-color: #282c34;
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const LogoImage = styled.img`
  animation: ${spinAnimation} infinite 20s linear;
  width: 500px;
  height: 500px;
`;

export default ReactLogo;
