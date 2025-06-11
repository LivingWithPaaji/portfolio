import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, NavLink as RouterNavLink } from 'react-router-dom';
import './styles/global.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

// Navbar Styled Components
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #5D3FD3, #3F2A8A);
  z-index: 1000;
  box-shadow: none;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  cursor: pointer;
  font-family: 'Inter', sans-serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background-color: var(--background-color);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

const NavLink = styled(RouterNavLink)`
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
  color: var(--text-color);
  font-family: 'Inter', sans-serif;

  &:hover {
    color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
    font-weight: 600;
  }
`;

const DownloadLink = styled.a`
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
  color: var(--text-color);
  font-family: 'Inter', sans-serif;

  &:hover {
    color: var(--accent-color);
  }
`;

const NavLinkWrapper = styled(motion.div)`
  display: inline-block;
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: var(--text-color);

  @media (max-width: 768px) {
    display: block;
  }
`;

// Footer Styled Components
const FooterContainer = styled.footer`
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 1rem 0;
  text-align: center;
  font-size: 0.85rem;
  font-family: 'Inter', sans-serif;
  border-top: 1px solid var(--secondary-color);
  margin-top: 2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const SocialLinksContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialIconLink = styled.a`
  color: var(--text-color);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Nav>
        <NavContainer>
          <Logo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Jaspreet Singh
          </Logo>
          <NavLinks isOpen={isOpen}>
            <NavLinkWrapper whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink to="/">Home</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink to="/about">About Me</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink to="/skills">Skills</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink to="/projects">Projects</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink to="/contact">Contact Me</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <DownloadLink href="/Resume.pdf" download="resume.pdf">
                Resume/CV
              </DownloadLink>
            </NavLinkWrapper>
          </NavLinks>
          <MenuButton onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
        </NavContainer>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <FooterContainer>
        <SocialLinksContainer>
          <SocialIconLink href="https://github.com/LivingWithPaaji" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href="https://www.linkedin.com/in/jaspreetfrontend" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </SocialIconLink>
          <SocialIconLink href="https://discord.com/users/942834569734922240" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </SocialIconLink>
          <SocialIconLink href="mailto:jaspreetsingh200311@gmail.com">
            <FaEnvelope />
          </SocialIconLink>
        </SocialLinksContainer>
        <p>&copy; 2025 Jaspreet Singh. All rights reserved.</p>
      </FooterContainer>
    </Router>
  );
}

export default App; 
