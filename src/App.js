import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/'
import Jumbotron from './components/Jumbotron'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
