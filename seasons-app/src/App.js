import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import './App.css';


class App extends React.Component {
  render(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    )

    return (
      <div className="App">
        <SeasonDisplay />
      </div>
    );

  }
}




export default App;
