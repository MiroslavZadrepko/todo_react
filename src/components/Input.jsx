import React, { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sr from "date-fns/locale/sr"
import { v4 as uuidv4 } from 'uuid';
import { MdAddTask } from 'react-icons/md'

const Input = ({ setTodo }) => {

    registerLocale("sr", sr)

    const [date, setDate] = useState(new Date())
    const [todoTxt, setTodoTxt] = useState('')
    const [enterDate, setEnterDate] = useState(false)
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (enterDate) {

            let minut;

            if (Number(date.getMinutes()) < 10) {
                minut = "0" + date.getMinutes().toString()
            } else { 
                minut = date.getMinutes() }

            setTodo({
                todoTxt: todoTxt,
                todoDate: {
                    todoDate: date.getDate(),
                    todoMonth: date.getMonth(),
                    todoYear: date.getFullYear(),
                    todoHour: date.getHours(),
                    todoMinut: minut
                },
                date: date,
                category: category,
                id: uuidv4()
            })
        } else {
            setTodo({
                todoTxt: todoTxt,
                todoDate: '',
                category: category,
                id: uuidv4()
            })
        }
        console.log(date)
        setTodoTxt('')
        setDate(new Date())
        setCategory('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add new ToDo</legend>
                    <input type="text" name='todoTxt' value={todoTxt} onChange={(e) => setTodoTxt(e.target.value)} required />

                    <br></br>

                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select category</option>
                        <option value="1">Računi</option>
                        <option value="2">Posao</option>
                        <option value="3">Porodica</option>
                        <option value="4">Ostalo</option>
                    </select>

                    <p>Add date and time?<input className='inputChck' type="checkbox" onClick={() => setEnterDate(!enterDate)} /></p>

                    {enterDate &&
                        <DatePicker
                            name='todoDate'
                            selected={date}
                            dateFormat="dd/MM/yyyy HH:mm"
                            onChange={(date) => setDate(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={5}
                        />}

                    <button type='submit'> <MdAddTask style={{ viewBox: "0, 0, 60, 55", width: "30", height: "30" }} /> <span className='message'>Add ToDo</span></button>
                </fieldset>
            </form>
        </>
    );
}

export default Input;