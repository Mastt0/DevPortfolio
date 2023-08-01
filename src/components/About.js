import React from "react";
import styled from "styled-components";
import image from "../assets/RainDripzSmall.jpg";

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  margin-top: 110px;
  margin-left: 50px;
  margin-right: 50px;
  flex: 1;
`;

const BioContainer = styled.div`
  flex: 1;
  margin-top: 110px;
  margin-right: 100px;
`;

const SkillsDescription = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 40px;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const AboutPage = () => {
  return (
    <div>
      <AboutContainer>
        <ImageContainer>
          <img src={image} alt="" />
        </ImageContainer>
        <BioContainer>
          <h1>About Me</h1>
          <p>
            This is where bio text will go
            kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
          </p>
        </BioContainer>
      </AboutContainer>
      <SkillsDescription>
        <h2>Skills/Technologies Known</h2>
      </SkillsDescription>
      <SkillsContainer>
        <img src="icon-url" alt="" />
      </SkillsContainer>
    </div>
  );
};

export default AboutPage;
