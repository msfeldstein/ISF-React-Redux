import React, { Component } from 'react';

import Editor from './Editor';
import Renderer from './Renderer';
import Sidebar from './Sidebar';

import './App.css';
import 'codemirror/lib/codemirror.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="MainSection">
          <Editor />
          <Renderer />
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default App;
