import React, { useState, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@material-ui/pickers'

import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-grid.css';

function Todolist() {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState([]);

  // Set todo state to reflect date picker default value
  useEffect(() => {
    setTodo({ ...todo, date: date.toLocaleString('fi-FI') })
  }, [])

  // Get reference to grid row
  const gridRef = useRef();

  // Handle input change
  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  // Handle date picker change
  const handleDateChange = (event) => {
    setDate(event);
    setTodo({ ...todo, date: event.toLocaleString('fi-FI') })
  }

  // Add todo to todos
  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  // Delete todo from grid
  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
    } else {
      alert('You must first choose a row to delete it.');
    }
  }

  // Todo columns
  const columns = [
    {
      headerName: "Description",
      field: "description",
      sortable: true,
      filter: true,
      floatingFilter: true
    },
    {
      headerName: "Date",
      field: "date",
      sortable: true,
      filter: true,
      floatingFilter: true
    },
    {
      headerName: "Priority",
      field: "priority",
      sortable: true,
      filter: true,
      floatingFilter: true,
      cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
    }
  ];

  return (
    <div>
      <div style={{ marginTop: 20 }}>
        <TextField
          style={{ marginRight: 10 }}
          label="Description"
          name="description"
          onChange={inputChanged}
          value={todo.description}
        />
        <DatePicker
          style={{ marginRight: 10 }}
          name="date"
          label="Date"
          format="dd/MM/yyyy"
          autoOk
          value={date}
          onChange={event => handleDateChange(event)}
        />
        <TextField
          style={{ marginRight: 10 }}
          label="Priority"
          name="priority"
          onChange={inputChanged}
          value={todo.priority}
        />

        <Button
          style={{ marginTop: 10, marginRight: 10 }}
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
        <Button
          style={{ marginTop: 10 }}
          onClick={deleteTodo}
          variant="contained"
          color="secondary"
        >
          Delete
      </Button>
      </div>

      <div className="ag-theme-material" style={{ width: '90%', height: '700px', margin: 'auto' }}>
        <AgGridReact
          rowData={todos}
          columnDefs={columns}
          rowSelection="single"
          ref={gridRef}
          onGridReady={params => gridRef.current = params.api}
          animateRows="true"
        />
      </div>
    </div>
  );
}

export default Todolist
