import React, { useState } from 'react';

function Todolist() {
    const [desc, setDesc] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, desc]);
    }

    return (
        <div className="App">
            <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <button onClick={addTodo}>Add todo</button>
            <table>
                <tbody>
                    {
                        todos.map((todo, index) => (
                            <tr key={index}>
                                <td>{todo}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Todolist;
