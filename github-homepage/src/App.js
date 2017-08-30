import React, { Component } from 'react';
import './App.css';
import { Header, Project }  from './common';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Header />
        <Project type="wimbledon" />
        <Project type="newYorkTaxis" />
        <Project type="mareysTrains" />
        <Project type="rottenPotatoes" />
      </div>
    );
  }
}

export default App;
