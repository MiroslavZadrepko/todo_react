import React from 'react';
import Todo from './Todo';

const Todos = ({ todo, setTodo, todos, setTodos }) => {
    return (
        <>
            <fieldset>
                <legend>ToDo</legend>
                {[...todos].reverse().map(todo => <Todo key={todo.id} todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />)}

            </fieldset>
        </>
    );
}

export default Todos;