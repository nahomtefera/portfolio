import React, { Component } from 'react';
import FeaturedWork from './components/featuredWork/featuredWork';
import AboutMe from './components/aboutMe/aboutMe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="full-name">Nahom <span className="last-name">Endale</span></h1>
        </header>
        <AboutMe />
        <FeaturedWork />
      </div>
    );
  }
}

export default App;
