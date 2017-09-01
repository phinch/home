import React, { Component } from 'react';
import './App.css';
import { Header, Project }  from './common';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Header />
        <Project type="newYorkTaxis" />
        <Project type="rewind" />
        <Project type="rottenPotatoes" />
        <Project type="wimbledon" />
        <Project type="mareysTrains" />
      </div>
    );
  }
}

export default App;
