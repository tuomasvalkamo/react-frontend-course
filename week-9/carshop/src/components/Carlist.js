import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const Carlist = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    fetch('https://carstockrest.herokuapp.com/cars')
      .then(response => response.json())
      .then(data => setCars(data._embedded.cars))
      .catch(err => console.log(err));
  }

  const columns = [
    { field: 'brand', sortable: true, filterable: true },
    { field: 'model', sortable: true, filterable: true },
    { field: 'color', sortable: true, filterable: true },
    { field: 'year', sortable: true, filterable: true },
    { field: 'fuel', sortable: true, filterable: true },
    { field: 'price', sortable: true, filterable: true }
  ]

  return (
    <div className="ag-theme-material" style={{ height: 620, width: '90%', margin: 'auto' }}>
      <AgGridReact
        rowData={cars}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  )
}

export default Carlist