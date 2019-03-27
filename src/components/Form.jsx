import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="App">
        <form onSubmit = {this.props.weatherMethod}>
          <input type="text" name="city" placeholder="Город"/>
          <button>Получить погоду</button>
        </form>
      </div>
    );
  }
}

export default Form;
