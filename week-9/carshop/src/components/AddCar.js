import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddCar = (props) => {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    year: '',
    price: ''
  })

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const inputChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    props.addCar(car)
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add car
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Brand"
            name="brand"
            value={car.brand}
            onChange={inputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Model"
            name="model"
            value={car.model}
            onChange={inputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Color"
            name="color"
            value={car.color}
            onChange={inputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Fuel"
            name="fuel"
            value={car.fuel}
            onChange={inputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Year"
            name="year"
            value={car.year}
            onChange={inputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            value={car.price}
            onChange={inputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddCar
