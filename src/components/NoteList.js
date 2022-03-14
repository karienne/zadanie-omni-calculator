import React, {useState, useEffect} from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import { parseISO } from 'date-fns'

function NoteList() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));

    if(savedNotes){
      savedNotes.forEach(item => {
        item.dateText = parseISO(item.dateText);
      })
      setNotes(savedNotes);
    }

  },[]);

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes))
  }, [notes]);

  const addNote = note => {
    if(!note.text){
        return;
    }

    const newNotes = [note, ...notes];
    setNotes(newNotes);
  };

  const updateNote = (noteId, newValue) => {
    if(!newValue.text){
      return;
    }

    setNotes(prev => prev.map(item => (item.id === noteId ? newValue : item)))
  }

  const removeNote = id => {
    const removeArr = [...notes].filter(note => note.id !== id)

    setNotes(removeArr)
  }

  return (
    <div>
        <NoteForm onSubmit={addNote}/>
        <h2>Latest notes</h2>

        <Note notes={notes} removeNote={removeNote} updateNote={updateNote}/>
        
    </div>
  )
}

export default NoteList