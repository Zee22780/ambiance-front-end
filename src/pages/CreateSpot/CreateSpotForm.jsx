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
import Box from "@mui/material/Box";

const defaultValues = {
  name: "",
  country: "",
  city: "",
  neighborhood: "",
  type: "",
  laptop: "",
  outlets: "",
  wifi: "",
  tables: "",
  decor: "",
  music: "",
  price: "",
  food: "",
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

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formValues);
  const spotFormData = new FormValues()
  spotFormData.append('name', formValues.name)
  spotFormData.append('country', formValues.country)
  spotFormData.append('city', formValues.city)
  spotFormData.append('neighborhood', formValues.neighborhood)
  spotFormData.append('type', formValues.type)
  spotFormData.append('laptop', formValues.laptop)
  spotFormData.append('outlets', formValues.outlets)
  spotFormData.append('wifi', formValues.wifi)
  spotFormData.append('tables', formValues.tables)
  spotFormData.append('decor', formValues.decor)
  spotFormData.append('music', formValues.music)
  spotFormData.append('price', formValues.price)
  spotFormData.append('food', formValues.food)
  props.handleAddSpot(spotFormData)
};

  return ( 
    <form onSubmit={handleSubmit}>
      <Box mt={2}>
      <Grid container spacing={1} alignItems="center" justify="center" direction="column">
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
            value={formValues.country}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="city-input"
            name="city"
            label="City"
            type="text"
            value={formValues.city}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="neighborhood-input"
            name="neighborhood"
            label="Neighborhood"
            type="text"
            value={formValues.neighborhood}
            onChange={handleInputChange}
          />
        </Grid>
        
        <Grid item>
          <TextField
            id="tables-input"
            name="tables"
            label="Tables Description"
            type="text"
            value={formValues.tables}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="decor-input"
            name="decor"
            label="Decor"
            type="text"
            value={formValues.decor}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="Music-input"
            name="music"
            label="Music Description"
            type="text"
            value={formValues.music}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="price-input"
            name="price"
            label="Price"
            type="text"
            value={formValues.price}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="food-input"
            name="food"
            label="Food Description"
            type="text"
            value={formValues.food}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <RadioGroup
              name="spot-type"
              value={formValues.type}
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

        <Grid item>
          <FormControl>
            <FormLabel>Laptop</FormLabel>
            <RadioGroup
              name="laptop-group"
              value={formValues.laptop}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="yes"
                value="yes"
                control={<Radio size="small" />}
                label="Yes"
              />

              <FormControlLabel
                key="no"
                value="no"
                control={<Radio size="small" />}
                label="No"
              />

            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl>
            <FormLabel>Outlets</FormLabel>
            <RadioGroup
              name="outlets-group"
              value={formValues.outlets}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="yes"
                value="yes"
                control={<Radio size="small" />}
                label="Yes"
              />

              <FormControlLabel
                key="no"
                value="no"
                control={<Radio size="small" />}
                label="No"
              />

            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl>
            <FormLabel>WiFi</FormLabel>
            <RadioGroup
              name="wifi-group"
              value={formValues.wifi}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="yes"
                value="yes"
                control={<Radio size="small" />}
                label="Yes"
              />

              <FormControlLabel
                key="no"
                value="no"
                control={<Radio size="small" />}
                label="No"
              />

            </RadioGroup>
          </FormControl>
        </Grid>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
      </Box>
    </form>
    
  );
}

export default CreateSpotForm;