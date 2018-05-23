import React, { Component } from "react";
import Radium from "radium";
import Header from "./Header";
import Footer from "./Footer";
import Features from "./Features";
import "./App.css";

class App extends Component {
  state = {
    places: []
  };

  closeFeatureHandler = (index) => {
    const placesCopy = [...this.state.places];
    placesCopy.splice(index, 1);
    this.setState({places: placesCopy})
  }

  fetchCities() {
    fetch("https://h4m3xqwdj4.execute-api.us-east-1.amazonaws.com/dev/cities")
      .then(apiResponse => apiResponse.json())
      .then(parsedData => {
        this.setState({ places: parsedData.cities });
      });
  }
  render() {
    return (
      <div className="App">
        <Header click={() => this.fetchCities()} />
        <Features cities={this.state.places} click={(event) => this.closeFeatureHandler(event)}/>
        <Footer />
      </div>
    );
  }
}

export default Radium(App);
