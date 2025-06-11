import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react'; // useRef is not needed for Formspree
// import emailjs from '@emailjs/browser'; // Removed EmailJS
import { FiCheckCircle } from 'react-icons/fi'; // Import FiCheckCircle

const ContactSection = styled.section`
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: var(--background-color);
  flex-direction: column;
`;

const ContactContainer = styled(motion.div)`
  background-color: var(--gray-bg);
  border-radius: 1rem;
  padding: 3rem;
  width: 100%;
  max-width: 600px;
  margin-top: 100px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 100px 1rem 0 1rem;
  }
`;

const ContactTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--secondary-color);
  border-radius: 0.5rem;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(60, 130, 246, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--secondary-color);
  border-radius: 0.5rem;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(60, 130, 246, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.2s ease;
  margin-top: 1.5rem;

  &:hover {
    background-color: var(--accent-color);
  }

  &:active {
    transform: scale(0.98);
  }
`;

// --- Start Popup Styled Components (moved from EmailSentPopup.jsx) ---
const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled(motion.div)`
  background: #333;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  color: #fff;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const TickIconContainer = styled(motion.div)`
  color: #4CAF50;
  font-size: 80px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
// --- End Popup Styled Components ---

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowPopup(true);
        form.reset();
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Error submitting form:', errorData);
        alert(`Error: ${errorData.error || 'Something went wrong with Formspree.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem connecting to the form service. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection>
      <ContactContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContactTitle>Get in Touch</ContactTitle>
        <form action="https://formspree.io/f/myzjwyla" method="POST" onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              required
            />
          </FormGroup>
          <SubmitButton 
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </form>
      </ContactContainer>
      {/* Directly render the popup here */}
      <AnimatePresence>
        {showPopup && (
          <PopupOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <PopupContent
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <TickIconContainer
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
              >
                <FiCheckCircle />
              </TickIconContainer>
              <Message>Your email has been sent!</Message>
            </PopupContent>
          </PopupOverlay>
        )}
      </AnimatePresence>
    </ContactSection>
  );
};

export default Contact; 