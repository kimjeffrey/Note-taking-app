import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

  const [list, setList] = useState([]);

  function addNote(newNote){
    setList((prevNotes) => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id){
    setList((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
  <div>
    <Header />
    <CreateArea addNote={addNote} />
    {list.map((note, index) => (
      <Note key={index} id={index} title={note.title} content={note.content} clicked={deleteNote} />
    ))}
    <Footer />
  </div>
  )
}

export default App;
