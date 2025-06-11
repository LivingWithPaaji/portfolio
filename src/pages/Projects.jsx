import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: var(--background-color);
  flex-direction: column;
`;

const ProjectsContainer = styled(motion.div)`
  background-color: var(--gray-bg);
  border-radius: 1rem;
  padding: 3rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 100px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 100px 1rem 0 1rem;
  }
`;

const ProjectsTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectDescriptionText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.6;
`;

const ProjectVideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    border: none;
    display: block;
    object-fit: contain;
  }
`;

const ProjectLinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 580px;
  padding: 1.5rem;
  background-color: var(--gray-800);
  border-radius: 0.8rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;

  & > * {
    margin: 0;
  }

  @media (min-width: 768px) {
    flex-basis: calc(50% - 1rem);
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
  }
`;

const ProjectLink = styled.a`
  background-color: var(--primary-color);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: var(--accent-color);
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 0;
  text-align: center;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectsTitle>My Work / Projects</ProjectsTitle>
        
        <ProjectsGrid>
          {/* 3D Space Simulation Project */}
          <ProjectContentWrapper>
            <ProjectTitle>3D Space Simulation</ProjectTitle>
            <ProjectDescriptionText>
              A captivating 3D space simulation built with Three.js, allowing users to explore a cosmic environment with interactive elements.
              This project demonstrates advanced 3D rendering techniques, physics-based animations, and responsive design, providing an immersive experience for users.
            </ProjectDescriptionText>

            <ProjectVideoContainer>
              <video autoPlay muted loop>
                <source src="/3D Space Simulation.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </ProjectVideoContainer>

            <ProjectLinksWrapper>
              <ProjectLink href="https://github.com/LivingWithPaaji/3D-Solar-System" target="_blank" rel="noopener noreferrer">
                GitHub
              </ProjectLink>
              <ProjectLink href="https://3-d-solar-system-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                Live Demo
              </ProjectLink>
            </ProjectLinksWrapper>
          </ProjectContentWrapper>

          {/* A.I Study Assistant Project */}
          <ProjectContentWrapper>
            <ProjectTitle>A.I Study Assistant</ProjectTitle>
            <ProjectDescriptionText>
              An intelligent study assistant powered by the Google Generative AI API. This project utilizes Flask and Python for the backend, with Gunicorn for deployment, and a frontend built using HTML, CSS, and JavaScript. It helps users with their studies by providing AI-driven assistance for better results.
            </ProjectDescriptionText>

            <ProjectVideoContainer>
              <video autoPlay muted loop>
                <source src="/A.I Study Assistant.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </ProjectVideoContainer>

            <ProjectLinksWrapper>
              <ProjectLink href="https://github.com/LivingWithPaaji/AI-Study-Assistant" target="_blank" rel="noopener noreferrer">
                GitHub
              </ProjectLink>
              <ProjectLink href="https://ai-study-assistant-jaspreet.onrender.com/" target="_blank" rel="noopener noreferrer">
                Live Demo
              </ProjectLink>
            </ProjectLinksWrapper>
          </ProjectContentWrapper>
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 