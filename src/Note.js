import React from 'react'
import './Note.css';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function Note(props) {

  return (
    <div className="note">
      <div className="description">
        <div>
          <ReactMarkdown>{props.body}</ReactMarkdown>
        </div>
        <div className="noteButtons">
          <p className="noteDate">
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/${props.id}`}
            >
              {props.date}
            </Link>
          </p>
          <button className="deleteBtn" onClick={() => props.delete(props.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note