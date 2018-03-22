import React, { Component } from 'react';
import FeaturedWork from './components/featuredWork/featuredWork';
import AboutMe from './components/aboutMe/aboutMe';
import SkillsChart from './components/skillsChart/skillsChart';
import GithubActivity from './components/githubActivity/githubActivity';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="full-name">nahom<span className="last-name">endale</span></h1>
          <br/> 
        </header>        
        <AboutMe />
        <SkillsChart />
        <GithubActivity />
        <FeaturedWork />
      </div>
    );
  }
}

export default App;
