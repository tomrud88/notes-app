import './App.css';
import Notes from './Notes';
import { Route } from 'react-router-dom'
import ChosenNote from './ChosenNote';
import { NoteProvider } from './NotesContext'

function App() {
   
  return (
    <div className="App">
      <NoteProvider>
        <nav>
          <h4 className="navp">Notes App</h4>
        </nav>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/:id">
          <ChosenNote />
        </Route>
      </NoteProvider>
    </div>
  );
}

export default App;
