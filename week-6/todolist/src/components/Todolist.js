import React, { useState } from 'react';
import Todotable from './Todotable';

function Todolist() {
  const [todo, setTodo] = useState({ desc: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (e) => {
    setTodo({ ...todo, [e.target.name]: [e.target.value] });
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <div>
      <h3>Add todo:</h3>
      <form onSubmit={addTodo}>
        <label>Description:
          <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        </label>
        <label>Date:
          <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        </label>
        <input type="submit" value="Add" />
      </form>
      <Todotable todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Todolist
