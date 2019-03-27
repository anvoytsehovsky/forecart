import React, { Component } from 'react';
import Form from './components/Form';
import Info from './components/Info';
import Weather from './components/Weather';
import './App.css';

const API_KEY = "b6920aaed744f380d838b6348869733d";

class App extends Component {

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Info />
        <Form weatherMethod = {this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
