import React, { useState } from "react";
import Grid from '@mui/material/Grid'

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const defaultValues = {
  name: "",
  age: 0,
  sex: "",
  os: "",
  favoriteNumber: 0,
};

const CreateSpotForm = () => {

const [formValues, setFormValues] = useState(defaultValues)

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormValues({
    ...formValues,
    [name]: value,
  });
};

const handleSliderChange = (name) => (e, value) => {
  setFormValues({
    ...formValues,
    [name]: value,
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formValues);
};

  return ( 
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Spot"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="country-input"
            name="country"
            label="Country"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="city-input"
            name="city"
            label="City"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="neighborhood-input"
            name="neighborhood"
            label="Neighborhood"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        
        <Grid item>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <RadioGroup
              name="spot-type"
              value={formValues.gender}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="coffee_shop"
                value="coffee_shop"
                control={<Radio size="small" />}
                label="Coffee Shop"
              />
              <FormControlLabel
                key="cafe"
                value="cafe"
                control={<Radio size="small" />}
                label="Cafe"
              />
              <FormControlLabel
                key="other"
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
}

export default CreateSpotForm;