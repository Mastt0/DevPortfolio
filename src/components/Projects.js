import React from "react";
import styled from "styled-components";

const PageTitle = styled.div`
  margin-top: 80px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const ProjectContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5em;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
`;

const ProjectSkills = styled.p`
  margin-top: 10px;
  font-size: 0.9em;
  color: #333;
`;

function Projects() {
  return (
    <div>
      <PageTitle>My Portfolio</PageTitle>
      <ProjectContainer>
        <ProjectTitle>Project Title</ProjectTitle>
        <ProjectImage src="project-image.jpg" alt="project image" />
        <ProjectDescription>
          This is a brief description of the project.
        </ProjectDescription>
        <ProjectLink href="project-link">View Project</ProjectLink>
        <ProjectSkills>HTML, CSS, JavaScript</ProjectSkills>
      </ProjectContainer>
      {/* Repeat for other projects */}
    </div>
  );
}

export default Projects;
