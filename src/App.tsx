import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Service from './components/Service/Service';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './assets/styles/main.css';

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delay: 2 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  if (loading)
    return (
      <div className="loader">
        <motion.h1 variants={container} initial="hidden" animate="visible">
          <motion.span variants={child}>R</motion.span>
          <motion.span variants={child}>e</motion.span>
          <motion.span variants={child}>c</motion.span>
          <motion.span variants={child}>y</motion.span>
          <motion.span variants={child}>w</motion.span>
          <motion.span variants={child}>o</motion.span>
          <motion.span variants={child}>r</motion.span>
          <motion.span variants={child}>l</motion.span>
          <motion.span variants={child}>d</motion.span>
        </motion.h1>
      </div>
    );

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
