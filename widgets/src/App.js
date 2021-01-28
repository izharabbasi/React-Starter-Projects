import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import DropDown from "./components/DropDown";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a frontend library",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite library among enginners",
//   },
//   {
//     title: "how do we use React?",
//     content: "We can use react by building reuseable componenets",
//   },
// ];

const options = [
  {
    label : 'The Color Red',
    value : 'red'
  },
  {
    label : 'The Color Green',
    value : 'green'
  },
  {
    label : 'A Shade of Blue',
    value : 'blue'
  }
]

function App() {
  const [selected , setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <DropDown 
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          />
    </div>
  );
}

export default App;
