import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

import './Appointment.css';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

//import 'Appointment.css';

export default function Appointment() {
  return (
    <React.Fragment>
      <div class="container">
      <Typography variant="h6" gutterBottom>
        Request Appointment
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm ={6}>
          <p> Gender  
          <select id = "gender">
            <option value = "#FFFFFF">Male</option>
            <option value = "#FF0000">Female</option>
            <option value = "#FFCC00">NA</option>
          </select>
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            name="phone"
            label="Phone number"
            fullWidth
            autoComplete="phone number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date-of-birth"
            name="date-of-birth"
            label="Date of Birth (mm/dd/yyyy)"
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField id="email" name="email" label="Email" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="doctor"
            name="doctor"
            label="Doctor name"
            fullWidth
            autoComplete="doctor name"
          />
        </Grid>
        <Grid item xs={12} sm = {6}>
          <TextField
            required
            id="clinic"
            name="clinic"
            label="Clinic name"
            fullWidth
            autoComplete="Clinic name"
          />
        </Grid>

        <Grid item xs={12}>
        </Grid>

      <form className={useStyles()} noValidate>
        <TextField
        id="datetime-local"
        label="Date and Time"
        type="datetime-local"
        defaultValue="2020-10-03T10:00"
        className={useStyles().textField}
        InputLabelProps={{
          shrink: true,
        }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
     </form>

          <Grid item xs={12}>
        </Grid>
        <div class="container">
        <button onclick="submit">SUBMIT</button>
        </div>
       <div id="container1"></div>

      </Grid>
      
    </div>

    </React.Fragment>
  );
}