import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function addNote(note){
    setNotes(prevValue =>{
      return [...prevValue, note]
    })
  }

  function deleteItem(noteTitle){
    setNotes(notes.filter(note=>{
      return note.title!==noteTitle
    }))
  }

  function createNote(note,index){
    return <Note key={note.title} title={note.title} content={note.content} delete={deleteItem}/>
  }

  return (
    <div>
      <Header />
      <CreateArea handleChange={addNote}/>
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
