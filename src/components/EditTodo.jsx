import React from 'react'
import DatePicker from "react-datepicker";
import sr from 'date-fns/locale/sr'
import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi'

function EditTodo({ todo, setTodo, id, tmpID, todos, setTodos, editTodo, setEditTodo }) {

    const [newDate, setNewDate] = useState(new Date())
    const [newTxt, setNewTxt] = useState(todo.todoTxt)
    const [newCategory, setNewCategory] = useState(todo.category)
    console.log(todo.todoDate);

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
                category: newCategory,
                id: id
            })

        } else {

            setTodo({
                todoTxt: newTxt,
                todoDate: '',
                category: newCategory,
                id: id
            })

        }
        let newTodos = todos.filter((todo) => todo.id !== tmpID);
        setTodos(newTodos)
        setEditTodo(!editTodo)
    }

    return (

        <div>
            <input {...todo.todoTxt} onChange={(e) => setNewTxt(e.target.value)} />

            <br></br>
                <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
                    <option value="">Select category</option>
                    <option value="1">Računi</option>
                    <option value="2">Posao</option>
                    <option value="3">Porodica</option>
                    <option value="4">Ostalo</option>
                </select> 

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
                    timeIntervals={10}
                />
            }
            <button onClick={(e) => handleInput(e)}> <FiEdit3 style={{ viewBox: "0, 0, 60, 55", width: "2em", height: "2em" }} /> <span className='message'>Edit</span> </button>
        </div>
    )
}

export default EditTodo