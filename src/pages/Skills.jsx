import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: var(--background-color);
  flex-direction: column;
`;

const SkillsContainer = styled(motion.div)`
  background-color: var(--gray-bg);
  border-radius: 1rem;
  padding: 3rem;
  width: 100%;
  max-width: 960px;
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

const SkillsTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillItem = styled.div`
  background-color: var(--gray-800);
  color: var(--text-color);
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const skillsData = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'Frontend Development',
    items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Styled Components', 'Framer Motion'],
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express.js', 'Flask', 'RESTful APIs', 'GraphQL'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'Docker', 'AWS', 'VS Code', 'Jira', 'Figma'],
  },
];

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SkillsTitle>My Skills</SkillsTitle>

        {skillsData.map((category, index) => (
          <SkillCategory key={index}>
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillList>
              {category.items.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;