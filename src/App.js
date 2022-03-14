import React from 'react';
import './App.css';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="notes-app">
      <h1>Notes App</h1>
      <NoteList />
    </div>
  );
}

export default App;
