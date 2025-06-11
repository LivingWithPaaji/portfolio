import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: var(--background-color);
  flex-direction: column;
`;

const AboutContainer = styled(motion.div)`
  background-color: var(--gray-bg);
  border-radius: 1rem;
  padding: 3rem;
  width: 100%;
  max-width: 800px;
  margin-top: 100px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 100px 1rem 0 1rem;
  }
`;

const AboutTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const AboutText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.6;

  @media (min-width: 768px) {
    flex: 2;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutTitle>About Me</AboutTitle>
        <AboutContent>
          <AboutText>
            Hello! I'm Jaspreet Singh, a passionate Full Stack Developer with a keen eye for creating robust and user-friendly web applications. My journey in tech is driven by a desire to build impactful solutions that bridge the gap between complex ideas and seamless user experiences.
            <br /><br />
            I specialize in a modern tech stack, primarily focusing on React for dynamic and responsive front-end interfaces, and Node.js for scalable and efficient back-end systems. My expertise extends to working with various databases, ensuring data integrity and efficient management.
            <br /><br />
            I thrive on challenges and continuously seek to expand my knowledge and skills. Whether it's optimizing performance, implementing new features, or collaborating with teams to bring innovative projects to life, I am committed to delivering high-quality, maintainable code.
            <br /><br />
            Outside of coding, I enjoy Watching Movies, Hiking/Trekking, Cooking and Studying Quantum Physics/Mehanics. This balance helps me stay creative and focused. I'm always eager to connect with fellow developers and tech enthusiasts, so feel free to reach out!
          </AboutText>
          {/* You can place your profile image here */}
          {/* <ProfileImage src="/your-profile-photo.jpg" alt="Your Profile" /> */}
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 