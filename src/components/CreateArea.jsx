import React, { useState } from "react";
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {

  const [expanded, setExpanded] = useState(false)
  const [note, setNote] = useState({
    title:"",
    content:""
  })
   
  function handleInputChange(event){
    const {name,value} = event.target

    setNote(prevValue=>{
      return {
        ...prevValue,
        [name] : value
      }
    })
  }

  function handleAdd(event){
    props.handleChange(note)
    event.preventDefault()
    setNote({
      title:"",
      content:""
    })
  }
  
  function handleExpanded(){
    setExpanded(true)
  }

  return (
    <div>
      <form>
        <input 
        onClick ={handleExpanded}
        onChange={handleInputChange}
        name="title" 
        placeholder="Title" 
        value={note.title}
        />
        {expanded && <textarea 
        onChange={handleInputChange} 
        name="content" 
        placeholder="Take a note..." 
        rows="3" 
        value={note.content}
        />}
        <Zoom in={expanded}>
          <button type="submit" onClick={handleAdd}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
