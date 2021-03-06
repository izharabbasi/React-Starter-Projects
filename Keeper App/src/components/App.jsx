import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [notes, setNotes] = useState([])


  function addNote(note){
    setNotes(prevNote => {
      return [...prevNote, note]
    })  
  }

  function deleteItem(id){
    setNotes(prevNote =>{
      return prevNote.filter((note, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      { notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteItem}/>
      })
      }
      
      <Footer />
    </div>
  );
}


export default App;
