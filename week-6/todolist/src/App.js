import React from 'react';
import './App.css';

import Todolist from './components/Todolist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              TodoList
          </Typography>
          </Toolbar>
        </AppBar>

        <Todolist />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
