import React, { useState } from "react";
import TodoItems from "./TodoListItems";
import Inputs from "./Input";


function App() {
  const [items , setItems] = useState([]);

  function handleClick(inputText){
    setItems(preValue => {
      return [...preValue, inputText]
    });
  }

  function handledelete(id){
    setItems(preValue => {
      return preValue.filter((item, index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <Inputs click={handleClick}/>
      </div>
      <div>
        <ul>
          {items.map((item,index) => { return <TodoItems item={item} handleDelete={handledelete} key={index} id={index}/> } )}
        </ul>
      </div>
    </div>
  );
}

export default App;
