import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from 'react-datepicker';
import sr from 'date-fns/locale/sr'
import { srLatn } from 'date-fns/locale';
import { v4 as uuidv4 } from 'uuid';
import { MdAddTask } from 'react-icons/md'

const Input = ({ todo, setTodo }) => {

    registerLocale('sr', srLatn)

    const [date, setDate] = useState(new Date())
    const [todoTxt, setTodoTxt] = useState('')
    const [enterDate, setEnterDate] = useState(false)

    const handleSubmit = (e) => {

        let minutes;

        if (date.getMinutes() === 0 || date.getMinutes() === 5) {
            minutes = '0' + Number(date.getMinutes())
        } else {
            minutes = date.getMinutes()
        }

        e.preventDefault()

        if (enterDate) {
            setTodo({
                todoTxt: todoTxt,
                todoDate: {
                    todoDate: date.getDate(),
                    todoMonth: date.getMonth(),
                    todoYear: date.getFullYear(),
                    todoHour: date.getHours(),
                    todoMinut: minutes
                },
                id: uuidv4()
            })
        } else {
            setTodo({
                todoTxt: todoTxt,
                todoDate: '',
                id: uuidv4()
            })
        }
        setTodoTxt('')
        setDate(new Date())
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add new ToDo</legend>
                    <input type="text" name='todoTxt' value={todoTxt} onChange={(e) => setTodoTxt(e.target.value)} required />
                    <p>Add date and time?<input className='inputChck' type="checkbox" onClick={() => setEnterDate(!enterDate)} /></p>
                    {enterDate ?
                        <DatePicker
                            name='todoDate'
                            selected={date}
                            onChange={(date) => setDate(date)}
                            registerLocale={sr}
                            locale="sr"
                            showTimeSelect
                            dateFormat="dd/MM/yyyy HH:mm"
                            timeFormat="HH:mm"
                            timeIntervals={5}
                        /> : ''}
                    <button type='submit'> <MdAddTask style={{ viewBox: "0, 0, 60, 55", width: "50", height: "50" }} /> </button>
                </fieldset>
            </form>
        </>
    );
}

export default Input;