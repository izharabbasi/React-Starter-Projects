import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);


  const [note, setNote] = useState({
    title : '',
    content : ''
  })

  function handleChange(event){
    const {name ,value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name] : value
      }
    })
  }
  
  function handleClick(event){
    props.onAdd(note);

    setNote({
      title : '',
      content : ''
    })

    event.preventDefault();
  }

  function toggle(){
    setExpanded(true);
  }

  

  return (
    <div>
      <form className="create-note">
      {isExpanded && 
        <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
      }
        <textarea onClick={toggle} onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Fab onClick={handleClick}><AddCircleOutlineIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
