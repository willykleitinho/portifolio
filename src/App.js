import { useEffect } from 'react';

import GlobalStyle from './styles/GlobalStyle';

import SmoothScroll from './components/SmoothScroll';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  useEffect(() => {
    function navigateToHash() {
      const offsetTop = document.querySelector(window.location.hash).offsetTop;
      window.scrollTo({ top: offsetTop });
    }
    window.addEventListener('load', navigateToHash);
    window.addEventListener('hashchange', navigateToHash);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <SmoothScroll>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;
