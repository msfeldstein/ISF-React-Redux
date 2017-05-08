import React, { Component } from 'react';
import Renderer from './Renderer';
import Sidebar from './Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Renderer />
        <Sidebar />
      </div>
    );
  }
}

export default App;
