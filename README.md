# Jaspreet Singh - Personal Portfolio

Welcome to my personal portfolio website! This project showcases my skills, experience, and projects as a Full Stack Developer. It's designed to be a clean, modern, and responsive platform to highlight my work and provide an easy way to get in touch.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Contact](#contact)

## Features

- **Responsive Design**: Optimized for various devices, from desktops to mobile phones.
- **Interactive Home Page**: Engaging grid layout with flip animations for quick insights.
- **About Me Section**: Detailed information about my professional background and interests.
- **Projects Showcase**: Dedicated section to display my key projects with descriptions, videos, and live demos/GitHub links.
- **Skills Section**: Comprehensive list of my technical skills categorized for clarity.
- **Contact Form**: Seamless email communication powered by Formspree.
- **Resume Download**: Easily accessible link to download my CV.
- **Social Links**: Quick access to my professional social media profiles.

## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Emotion (styled-components)**: For styling React components with CSS-in-JS.
- **Framer Motion**: A production-ready motion library for React.
- **React Router DOM**: For declarative routing in React applications.
- **Formspree**: For handling contact form submissions.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js) or Yarn

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-portfolio-repo.git
    cd your-portfolio-repo/portfolio-website
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

3. **Set up Formspree for the Contact Form:**
    *   Go to [https://formspree.io/](https://formspree.io/) and sign up/log in.
    *   Create a new form to get your unique endpoint URL (e.g., `https://formspree.io/f/your-unique-id`).
    *   Open `src/pages/Contact.jsx` and update the `action` attribute of the `<form>` tag with your Formspree endpoint URL.
    *   Ensure the `name` attributes of your form inputs (`name`, `email`, `subject`, `message`) match what you expect to receive in your email.

### Running the Application

1. **Start the development server:**
    ```bash
    npm run dev
    # or yarn dev
    ```
    The application will run on `http://localhost:5173` (or another available port).

2. **Build for production:**
    ```bash
    npm run build
    # or yarn build
    ```

## Contact

Feel free to reach out to me through my [portfolio contact form](/contact) or connect with me on [LinkedIn](https://www.linkedin.com/in/jaspreetfrontend).
