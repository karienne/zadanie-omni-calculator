import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import DatePicker from'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function NoteForm(props) {
    
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const [selectedDate, setSelectedDate] = useState(props.edit ? props.edit.date : new Date());

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            dateText: selectedDate
        });

        setInput('');
    }
    
    return (
        <form className='notes-form' onSubmit={handleSubmit}>

            {props.edit ? ( <><TextField
                inputProps={{style: {fontSize: 22}}}
                InputLabelProps={{style: {fontSize: 20}}}
                className="edit-textarea"
                type='text'
                label="Edit note"
                placeholder="Write text"
                value={input}
                minRows={6}
                multiline
                onChange={handleChange} />
                <DatePicker 
                    className='edit-datepicker'
                    selected={selectedDate} 
                    onChange={date => setSelectedDate(date)}
                    dateFormat='dd/MM/yyyy'
                    showYearDropdown
                    scrollableMonthYearDropdown
                />
                <button className='edit-note-button'>Edit note</button></>) : 
            ( <><TextField
                inputProps={{style: {fontSize: 22}}}
                InputLabelProps={{style: {fontSize: 20}}}
                className="add-textarea"
                type='text'
                label="Add note"
                placeholder="Write text"
                value={input}
                minRows={6}
                multiline
                onChange={handleChange}/>
                <DatePicker 
                    className='add-datepicker'
                    selected={selectedDate} 
                    onChange={date => setSelectedDate(date)}
                    dateFormat='dd/MM/yyyy'
                    showYearDropdown
                    scrollableMonthYearDropdown
                />
                <button className='add-note-button'>Add note</button></>)
        }
    
    </form>
  )
}

export default NoteForm
