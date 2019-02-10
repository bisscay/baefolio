import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WOW from 'wowjs';
import { Navigation } from './components/navigation/navigation.js';
import { Home } from './components/home/home.js';
import { Skill } from './components/skill/skill.js';
import { Experience } from './components/experience/experience.js';
import { Portfolio } from './components/portfolio/portfolio.js';
import { Contact } from './components/contact/contact.js';
import { Footer } from './components/footer/footer.js';

class App extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div className="box">
        <div className="nav">
          <Navigation />
        </div>
        <div className="home" id="home">
          <Home />
        </div>
        <div className="skill" id="skill">
          <Skill />
        </div>
        <div className="experience" id="experience">
          <Experience />
        </div>
        <div className="portfolio" id="portfolio">
          <Portfolio />
        </div>
        <div className="contact pv6" id="contact">
          <Contact />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
