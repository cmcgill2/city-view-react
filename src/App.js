import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Features from './Features';
import './App.css';

class App extends Component {
  state = {
      places: []
    }

  fetchCities() {
    fetch("https://h4m3xqwdj4.execute-api.us-east-1.amazonaws.com/dev/cities")
      .then(apiResponse => apiResponse.json())
      .then(parsedData => {
        this.setState({ places: parsedData.cities })
      }); 
  }
  displayCities() {
    // create array of react elements
    return this.state.places.map(place => {
      return <div key={place}>{place}</div>
    });
  }
  render() {
    return (
      <div className="App">
      <Header click={() => this.fetchCities()}/>
      <Features cities={this.state.places}/>
      <Footer />
      
      </div>
    );
  }
}

export default App;
