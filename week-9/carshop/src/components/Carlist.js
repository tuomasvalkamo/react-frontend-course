import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCar from './AddCar'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const Carlist = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  // Get cars from REST API
  const fetchCars = () => {
    fetch('https://carstockrest.herokuapp.com/cars')
      .then(response => response.json())
      .then(data => setCars(data._embedded.cars))
      .catch(err => console.log(err));
  }

  // Delete car
  const deleteCar = (url) => {
    // Prompt a window 
    if (window.confirm('Are you sure you want to delete a car?')) {
      // Call delete REST method
      fetch(url, { method: 'DELETE' })
        .then(response => {
          if (response.ok)
            fetchCars();
          else
            alert('Something went wrong in deletion.')
        })
        .catch(err => console.error(err))
    }
  }

  // Add new car
  const addCar = (newCar) => {
    fetch('https://carstockrest.herokuapp.com/cars',
      {
        method: 'POST',
        body: JSON.stringify(newCar),
        headers: { 'Content-type': 'application/json' }
      })
      .then(_ => fetchCars())
      .catch(err => console.error(err))
  }

  const columns = [
    { field: 'brand', sortable: true, filterable: true },
    { field: 'model', sortable: true, filterable: true, width: 100 },
    { field: 'color', sortable: true, filterable: true, width: 100 },
    { field: 'year', sortable: true, filterable: true, width: 100 },
    { field: 'fuel', sortable: true, filterable: true, width: 100 },
    { field: 'price', sortable: true, filterable: true, width: 100 },
    {
      headerName: '',
      field: '_links.self.href',
      cellRendererFramework: params =>
        <IconButton onClick={() => deleteCar(params.value)} color="secondary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
    }
  ]

  return (
    <div>
      <AddCar addCar={addCar} />
      <div className="ag-theme-material" style={{ height: 620, width: '90%', margin: 'auto' }}>
        <AgGridReact
          rowData={cars}
          columnDefs={columns}
          pagination={true}
          paginationPageSize={10}
          suppressCellSelection={true}
        />
      </div>
    </div>
  )
}

export default Carlist