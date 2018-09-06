import React, { Component } from 'react';
import FeaturedWork from './components/featuredWork/featuredWork';
import AboutMe from './components/aboutMe/aboutMe';
import SkillsChart from './components/skillsChart/skillsChart';
import GithubActivity from './components/githubActivity/githubActivity';
import './App.css';
// Google Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-125328674-01');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="full-name">nahom<span className="last-name">endale</span></h1>
          <br/> 
        </header>
        <img className="face-picture" src={require("./images/aboutme/nahom.jpg")} alt="nahom"/> 
        <AboutMe />
        <SkillsChart />
        <FeaturedWork />
        <GithubActivity />
        <br/>
        <div className="footer">
          <p className="footer-title">www.nahomendale.com</p>
        </div>
        <br/>
      </div>
    );
  }
}

export default App;
