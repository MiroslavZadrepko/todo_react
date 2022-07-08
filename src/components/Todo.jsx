import React, { useState } from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { AiTwotoneHome } from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { FiEdit3 } from 'react-icons/fi'
import EditTodo from './EditTodo';

const Todo = ({ todo, setTodo, todos, setTodos }) => {

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

    //editiing todo. 
    const [editTodo, setEditTodo] = useState(false)
    const [tmpID, setTmpID] = useState('');

    const handleEdit = (id) => {
        setTmpID(id)
        setEditTodo(!editTodo)
    }

    return (
        <>
            {todo.id != '' ?
                <div className={'todo_div'}>

                    {editTodo && <EditTodo todo={todo} setTodo={setTodo} id={todo.id} tmpID={tmpID} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>}

                    <div>

                        <p> {todo.todoTxt} {todo.todoDate.todoDate ? <span>,   {todo.todoDate.todoDate}.{todo.todoDate.todoMonth + 1}.{todo.todoDate.todoYear} {todo.todoDate.todoHour}:{todo.todoDate.todoMinut}</span> : ''} </p>

                        <br></br>

                        <p> {
                            todo.category == 1 ? <FaMoneyBillAlt style={{ viewBox: "0, 0, 60, 55", width: "2em", height: "2em" }}/>
                                : todo.category == 2 ? <MdOutlineWork style={{ viewBox: "0, 0, 60, 55", width: "2em", height: "2em" }}/>
                                    : todo.category == 3 ? <AiTwotoneHome style={{ viewBox: "0, 0, 60, 55", width: "2em", height: "2em" }}/>
                                        : todo.category == 4 ? <span></span>
                                            : todo.category
                        } </p>

                    </div>
                    {/**ubaciti da nestanu dugmiži kad se pozove edit */}
                    {!editTodo &&
                    <div className="todoButtons">
                        <button onClick={(e) => handleEdit(todo.id)}> <FiEdit3 style={{ viewBox: "0, 0, 60, 55", width: "2em", height: "2em" }} /> <span className='message'>Edit</span> </button>

                        <button className={isActive ? 'btnGreen' : ''} onClick={() => handleCheck(todo.id)} > <IoCheckmarkDoneSharp style={{ viewBox: "0, 0, 60, 55", width: "2em", height: "2em" }} /> <span className='message'>Done</span> </button>

                        <button onClick={() => handleDelete(todo.id)} > <RiDeleteBin2Fill style={{ viewBox: "0, 0, 60, 55", width: "2em", height: "2em" }} /> <span className='message'>Delete</span> </button>
                    </div>}

                </div> : ''
            }
        </>
    );
}

export default Todo;