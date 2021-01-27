import React from "react";
import "./App.css";
import Search from "./components/Search";

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

function App() {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
}

export default App;
