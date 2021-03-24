import React, { useState } from 'react';
import './App.css';

import Todolist from './components/Todolist';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


function App() {
  const [value, setValue] = useState('home');

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              TodoList
            </Typography>
            <Tabs value={value} onChange={handleChange}>
              <Tab value="home" label="Home" />
              <Tab value="my todos" label="My Todos" />
            </Tabs>
          </Toolbar>
        </AppBar>
        {value === 'home' && <h1>Welcome to the TodoList app!</h1>}
        {value === 'my todos' && <Todolist />}
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
