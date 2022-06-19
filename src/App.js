import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import Todos from './components/Todos';
import "./style.css"

function App() {

  const [todo, setTodo] = useState({
    todoTxt: '',
    todoDate: {
      todoDate: '',
      todoMonth: '',
      todoYear: '',
      todoHour: '',
      todoMinut: ''
    },
    category: '',
    id: ''
  })

  const [todos, setTodos] = useState([])
  useEffect(() => {
    setTodos((prev) => { return [...prev, todo] })
  }, [todo]);

  return (
    <div>
      <Input todo={todo} setTodo={setTodo} />
      <Todos todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
