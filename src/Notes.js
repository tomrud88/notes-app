import React, {useContext } from 'react'
import AddNotes from './AddNotes'
import Note from './Note'
import './Notes.css'
import { NotesContext } from './NotesContext';

function Notes() {
    const[notes,setNotes] = useContext(NotesContext)
  
    const deleteN = (id) => {
      const notesMinusOne = notes.filter(note => (
          note.id !== id
      ))
       setNotes(notesMinusOne)
  }
    
  const addNewNote = (note) => {
      const copy = [...notes] 
      const newNotes = [note,...copy];
       setNotes(newNotes)
  }
  
  return (
    <div className='mainContainer'>
      <AddNotes onAdd={(note) => addNewNote(note)} />
      <h2>Latest notes</h2>
          {notes.map(note => (
            <Note
                  noteList={notes}
                  key={note.id}
                  body={note.body}
                  id={note.id}
                  date={note.date}
                  delete={(id) => deleteN(id)} />
          ))}
    </div>
  );
}

export default Notes