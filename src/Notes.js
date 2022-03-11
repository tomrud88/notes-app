import React, { useState,useContext } from 'react'
import AddNotes from './AddNotes'
import Note from './Note'
import './Notes.css'
import { NotesContext } from './NotesContext';

function Notes() {
    const[notes,setNotes] = useContext(NotesContext)
  
    const deleteN = (id) => {
       console.log('hello')
      const nnotes = notes.filter(note => (
          note.id !== id
      ))
       console.log(nnotes)
       setNotes(nnotes)
  }
    
  const addNewNote = (note) => {
      const notess = [...notes] 
      console.log(notess)
      const newNotes = [note,...notess];
      console.log(newNotes)
       setNotes(newNotes)
    }
    console.log(notes)
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