import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Note from "./components/Note";
import notes from './note.js'
import './style.css'


function App() {
  return (
    <div>
      <Header />
      {notes.map(note => {
        return <Note title={note.title} content={note.content}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
