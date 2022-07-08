import React, { useState } from 'react';
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
    date:{},
    category: '',
    id: ''
})

  return (
    <div>
      <Input setTodo={setTodo} />
      <Todos todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
