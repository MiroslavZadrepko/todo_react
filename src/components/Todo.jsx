import React, { useState } from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { FiEdit3 } from 'react-icons/fi'
import DatePicker from "react-datepicker";
import sr from 'date-fns/locale/sr'
import { v4 as uuidv4 } from 'uuid';

const Todo = ({ todo, setTodo, todos, setTodos }) => {

    //declared again, needed them fresh here for edit and creation of new ToDo
    const [date, setDate] = useState(new Date())
    const [todoTxt, setTodoTxt] = useState('')

    //delete ToDo from list nad array
    const handleDelete = (id) => {
        let newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos)
    }

    //changing className and colour od 'done' marks
    const [isActive, setIsActive] = useState(false);
    const handleCheck = (id) => {
        setIsActive(!isActive)
    }

    //ugly part, realy ugly. More or less it's the same as Input.jsx, but I added some code to delete edited parts of ToDO. A mess.
    const [editTodo, setEditTodo] = useState(false)
    const [tmpID, setTmpID] = useState('');

    const handleEdit = (id) => {
        setTmpID(id)
        setEditTodo(!editTodo)

        let minutes;

        if (date.getMinutes() === 0 || date.getMinutes() === 5) {
            minutes = '0' + Number(date.getMinutes())
        } else {
            minutes = date.getMinutes()
        }

        //seting new ToDo with the date and time
        if (todo.todoDate.todoDate && todoTxt !== '') {
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

            let newTodos = todos.filter((todo) => todo.id !== tmpID);
            setTodos(newTodos)

            //and w/out the date and time
        } else if (todoTxt !== '') {
            setTodo({
                todoTxt: todoTxt,
                todoDate: '',
                id: uuidv4()
            })
            let newTodos = todos.filter((todo) => todo.id !== tmpID);
            setTodos(newTodos)
        }
    }

    return (
        <>
            {todo.id != '' ?
                <div className={isActive ? 'divGreen' : '' + 'todo_div'}>

                    {editTodo &&
                        <div><input onChange={(e) => { e.preventDefault(); setTodoTxt(e.target.value) }} />

                            {todo.todoDate.todoDate ?
                                <DatePicker
                                    className='datePicker'
                                    name='todoDate'
                                    selected={date}
                                    onChange={(date) => setDate(date)}
                                    registerLocale={sr}
                                    locale="sr"
                                    showTimeSelect
                                    dateFormat="dd/MM/yyyy HH:mm"
                                    timeFormat="HH:mm"
                                    timeIntervals={5}
                                /> : ''}</div>
                    }
                    <div><p>{todo.todoTxt}{todo.todoDate.todoDate ? <span>,   {todo.todoDate.todoDate}.{todo.todoDate.todoMonth + 1}.{todo.todoDate.todoYear} {todo.todoDate.todoHour}:{todo.todoDate.todoMinut}</span> : null} </p></div>

                    <div className="todoButtons">
                        <button onClick={() => handleEdit(todo.id)}> <FiEdit3 style={{ viewBox: "0, 0, 60, 55", width: "30", height: "30" }} /></button>

                        <button className={isActive ? 'btnGreen' : ''} onClick={() => handleCheck(todo.id)} > <IoCheckmarkDoneSharp style={{ viewBox: "0, 0, 60, 55", width: "35", height: "35" }} /> </button>

                        <button onClick={() => handleDelete(todo.id)} > <RiDeleteBin2Fill style={{ viewBox: "0, 0, 60, 55", width: "30", height: "30" }} /> </button>
                    </div>


                </div> : ''
            }
        </>
    );
}

export default Todo;