import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Services from './components/Services/Services.jsx';
import Qualification from './components/Qualifications/Qualification.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Scrollup from './components/Scrollup/Scrollup.jsx';

function App() {
  return (
  <>
  <Header />
  <main className="main">
    <Home />
    <About />
    <Skills />
    <Services />
    <Qualification />
    <Testimonials />
    <Contact />
  </main>
  <Footer />
  <Scrollup />
  </>
  );
}

export default App;
