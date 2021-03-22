import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({ desc: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (e) => {
    setTodo({ ...todo, [e.target.name]: [e.target.value] });
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Simple Todolist</h1>
      </div>
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
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {
            todos.map((todo, index) =>
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.desc}</td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
