import React from 'react'
import DatePicker from "react-datepicker";
import sr from 'date-fns/locale/sr'
import { useState } from 'react';

function EditTodo({ todo, setTodo, id, tmpID, todos, setTodos }) {

    const [newDate, setNewDate] = useState(new Date())
    const [newTxt, setNewTxt] = useState('')
    const [category, setCategory] = useState('')

    const handleInput = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        if (todo.todoDate.todoDate) {

            setTodo({
                todoTxt: newTxt,
                todoDate: {
                    todoDate: newDate.getDate(),
                    todoMonth: newDate.getMonth(),
                    todoYear: newDate.getFullYear(),
                    todoHour: newDate.getHours(),
                    todoMinut: newDate.getMinutes()
                },
                category: category,
                id: id
            })

            let newTodos = todos.filter((todo) => todo.id !== tmpID);
            setTodos(newTodos)

            //and w/out the date and time
        } else {
            setTodo({
                todoTxt: newTxt,
                todoDate: '',
                category: category,
                id: id
            })
            let newTodos = todos.filter((todo) => todo.id !== tmpID);
            setTodos(newTodos)
        }
    }
    return (
        <div>
            <input onChange={(e) => setNewTxt(e.target.value)}  onKeyDown={(e) => {(e.key === 'Enter') && handleInput(e)}} />

            {todo.todoDate.todoDate &&
                <DatePicker
                    className='datePicker'
                    name='todoDate'
                    selected={newDate}
                    onChange={(date) => setNewDate(date)}
                    registerLocale={sr}
                    locale="sr"
                    showTimeSelect
                    dateFormat="dd/MM/yyyy HH:mm"
                    timeFormat="HH:mm"
                    timeIntervals={5}
                />}
            <br></br>

            {
                <select value={category} onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select category</option>
                    <option value="1">Računi</option>
                    <option value="2">Posao</option>
                    <option value="3">Porodica</option>
                    <option value="4">Ostalo</option>
                    {todo.category = category}
                </select>
            }
        </div>
    )
}

export default EditTodo