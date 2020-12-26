import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const buttonText = {text : "Click me!"}
    const labelText = "Enter Name : "

    return (
        <div>
            <label htmlFor="input">
                {labelText} 
            </label>
            <input id="input" type="text" />
            <button style={{ backgroundColor : 'blue' , color: 'white'}}>{buttonText.text}</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));