import React ,{ useContext } from 'react'
import { useParams,Link } from 'react-router-dom'
import { NotesContext } from "./NotesContext";
import './ChosenNote.css'
import ReactMarkdown from "react-markdown";

function ChosenNote(props) {
    const params = useParams();
  const [notes, setNotes] = useContext(NotesContext);
  
  const deleteN = (id) => {
    const nnotes = notes.filter((note) => note.id !== id);
    setNotes(nnotes);
  };
  

   const quote = notes.find((quote) => (quote.id === params.id));
    return (
      <div className="mainCon">
        <div className='buttonCon'>
          <button className="backBtn">
            <Link to="/" style={{ textDecoration: "none" }}>
              Back
            </Link>
          </button>
          <button className="deleteBtn" onClick={() => deleteN(quote.id)}>
            <Link to="/" style={{ color: 'white', textDecoration: "none" }}>
              Delete
            </Link>
          </button>
        </div>
        <div className='noteBody'>
          <ReactMarkdown>{quote.body}</ReactMarkdown>
          <p className='date'>{quote.date}</p>
        </div>
      </div>
    );
}

export default ChosenNote
