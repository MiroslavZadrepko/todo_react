import React, { useEffect, useState } from 'react';
import Todo from './Todo';

const Todos = ({todo, setTodo}) => {

    const [todos, setTodos] = useState([])
    
    useEffect(() => {
      setTodos((prev) => { return [...prev, todo] })
    }, [todo]);

    return (
        <>
            <fieldset>
                <legend>ToDo's</legend>
                {[...todos].reverse().map(todo => <Todo key={todo.id} todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />)}
            </fieldset>
        </>
    );
}

export default Todos;