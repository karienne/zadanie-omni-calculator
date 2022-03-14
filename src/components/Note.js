import React, {useState} from 'react';
import NoteForm from './NoteForm';
import {AiOutlineDelete} from 'react-icons/ai';
import {BiEdit} from 'react-icons/bi';
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment';
import 'moment-timezone';

function Note({notes, removeNote, updateNote}) {

    const [edit, setEdit] = useState({
        id: null,
        value: '',
        date: null
    })

    const submitUpdate = value => {
        updateNote(edit.id, value, edit.date)
        setEdit({
            id: null,
            value: '',
            date: null
        })
    }

    if (edit.id) {
        return <NoteForm edit={edit} onSubmit={submitUpdate} />;
    }


  return notes.map((note, index) => (

    <div
        className='note-row'
        key={index}
    >
        <div className='text-icons'>
            <div className='note-text' key={note.id}>
                <ReactMarkdown>{note.text}</ReactMarkdown>
            </div>
            <div className="icons">
                <AiOutlineDelete 
                onClick={() => removeNote(note.id)}
                className='delete-icon'
                />
                <BiEdit 
                onClick={() => setEdit({id: note.id, value: note.text, date: note.dateText})}
                className='edit-icon'/>
            </div>
        </div>
        <div>
            <Moment className='note-date' format="DD/MM/YYYY">{note.dateText}</Moment>
        </div>
    </div>


      
  ));
}

export default Note