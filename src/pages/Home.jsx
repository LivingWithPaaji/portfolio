import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

// MainGrid Styled Components
const GridSection = styled.section`
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: var(--background-color);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  margin-top: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const GridBox = styled(motion.div)`
  background: ${props => props.isGradient ? 'linear-gradient(to bottom, var(--primary-color) 0%, var(--secondary-color) 100%)' : 'var(--gray-bg)'};
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 200px;
  color: var(--text-color);
  font-size: 2.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  font-family: 'Playfair Display', serif;

  position: relative;
  perspective: 1000px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    min-height: 180px;
  }
`;

const CardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: center;
`;

const CardFace = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transform: rotateY(0deg);
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Newsreader', serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ContactButton = styled(motion(Link))`
  background-color: var(--primary-color);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: var(--accent-color);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  const boxes = [
    { text: 'Who am I?', isGradient: true, about: 'I am a Full Stack Developer skilled in building modern web apps.' },
    { text: 'What I do?', isGradient: true, about: 'I build front-end apps with React and back-end services using Node.js and databases.' },
    { text: 'Why Me?', isGradient: true, about: 'I focus on problem-solving, clean design, and scalable solutions.' },
    { text: 'Why Hire Me?', isGradient: true, about: 'I deliver clean code with strong problem-solving and design sense.' },
    { text: 'My Work!', isGradient: true, about: 'Explore my front-end and full-stack projects.', isProjectsCard: true },
    { text: 'Contact Me!', isGradient: true, about: 'Contact me via email or LinkedIn for collaborations.', isContactCard: true },
  ];

  return (
    <GridSection>
      <GridContainer>
        {boxes.map((box, index) => (
          <GridBox
            key={index}
            isGradient={box.isGradient}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCardClick(index)}
          >
            <CardInner
              animate={flippedCardIndex === index ? { rotateY: -180 } : undefined}
              whileHover={{ rotateY: -180 }}
              transition={{
                duration: 0.6,
                ease: [0.68, -0.55, 0.27, 1.55]
              }}
            >
              <CardFace>
                {box.text}
              </CardFace>
              <CardBack>
                {box.about}
                {box.isContactCard && (
                  <ContactButton to="/contact" onClick={(e) => { e.stopPropagation(); navigate('/contact'); }}>
                    Contact Me
                  </ContactButton>
                )}
                {box.isProjectsCard && (
                  <ContactButton to="/projects" onClick={(e) => { e.stopPropagation(); navigate('/projects'); }}>
                    View Projects
                  </ContactButton>
                )}
              </CardBack>
            </CardInner>
          </GridBox>
        ))}
      </GridContainer>
    </GridSection>
  );
};

export default Home; 