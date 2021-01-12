import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import './App.css';


class App extends React.Component {
  state = { lat: null, error: ''}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude})
      },
      (err) => {
        this.setState({error: err.message})
      }
    )
  }

  render(){
    return (
      <div className="App">
        <SeasonDisplay latitude={this.state.lat} error={this.state.error} />
      </div>
    );

  }
}




export default App;
