import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './AddNotes.css'


function AddNote(props) {


  const [desc, setDesc] = useState('')
    
  const changeDescHandler = (e) => {
    setDesc(e.target.value)
  }


  const addNote = () => {
    const date = new Date();
    const note = {
      id: nanoid(),
      body: desc,
       date: date.toLocaleDateString()
      }
    props.onAdd(note)
    setDesc('')
    }

  return (
    <div className="addNoteSection">
      <label>Note</label>
      <textarea
        value={desc}
        onChange={changeDescHandler}
        rows="7"
        placeholder="Note text"
      ></textarea>
      <button className="addNoteBtn" onClick={addNote}>
        Add note
      </button>
    </div>
  );
}

export default AddNote