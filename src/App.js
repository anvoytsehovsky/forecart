import React, { Component } from 'react';
import Form from './components/Form';
import Info from './components/Info';
import Weather from './components/Weather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
