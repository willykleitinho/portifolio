import GlobalStyle from './styles/GlobalStyle';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
