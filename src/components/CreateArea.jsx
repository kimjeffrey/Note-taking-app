import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [inFocus, setFocus] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function isInFocus(event) {
    setFocus((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          hidden={inFocus ? false : true}
        />
        <textarea
          name="content"
          onChange={handleChange}
          onClick={isInFocus}
          value={note.content}
          placeholder="Take a note..."
          rows={inFocus ? "3" : "1"}
        />
        <Zoom in={inFocus ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
