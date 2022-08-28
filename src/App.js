import './App.css';
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Typography from "./styles/Typography";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import {useEffect, useRef, useState} from "react";

function App() {
  const [sectionIsVisible, setSectionIsVisible] = useState(false);

  useEffect(() => {
    console.log("Section is visible?:" + sectionIsVisible);
  })

  return (
      <div className="App">
        <Router>
          <NavMenu aboutSectionIsVisible={sectionIsVisible}/>
          <ScrollToTop />
          <GlobalStyles />
          <Typography />
          <Switch>
            <Route path="/" exact>
              <Home setSectionIsVisible={(isVisible) => setSectionIsVisible(isVisible)} />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
