import React, { useEffect, useRef, useState } from "react";
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
import './CreateSpot.css'

const CreateSpotForm = (props) => {
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
  name: "",
  country: "",
  city: "",
  neighborhood: "",
  // type: "",
  // laptop: "",
  // outlets: "",
  // wifi: "",
  // tables: "",
  // decor: "",
  // music: "",
  // price: "",
  // food: "",
})

const handleInputChange = event => {
  setFormData({...formData, [event.target.name]: event.target.value
  })
}

const formElement = useRef()

useEffect(() => {
  formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)},[formData])

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData);
  props.handleAddSpot(formData)

  // const spotFormData = new FormData()
  // spotFormData.append('name', formData.name)
  // spotFormData.append('country', formData.country)
  // spotFormData.append('city', formData.city)
  // spotFormData.append('neighborhood', formData.neighborhood)
  // spotFormData.append('type', formData.type)
  // spotFormData.append('laptop', formData.laptop)
  // spotFormData.append('outlets', formData.outlets)
  // spotFormData.append('wifi', formData.wifi)
  // spotFormData.append('tables', formData.tables)
  // spotFormData.append('decor', formData.decor)
  // spotFormData.append('music', formData.music)
  // spotFormData.append('price', formData.price)
  // spotFormData.append('food', formData.food)
  // props.handleAddSpot(spotFormData)
};

  return ( 
    <> 
    <h1>Add Spot</h1>
    <form autoComplete="off" onSubmit={handleSubmit} ref={formElement}>
      <Box mt={2}>
      <Grid container spacing={1} alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Spot"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="country-input"
            name="country"
            label="Country"
            type="text"
            value={formData.country}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="city-input"
            name="city"
            label="City"
            type="text"
            value={formData.city}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="neighborhood-input"
            name="neighborhood"
            label="Neighborhood"
            type="text"
            value={formData.neighborhood}
            onChange={handleInputChange}
          />
        </Grid>
        
        {/* <Grid item>
          <TextField
            id="tables-input"
            name="tables"
            label="Tables Description"
            type="text"
            value={formData.tables}
            onChange={handleInputChange}
          />
        </Grid> */}

        {/* <Grid item>
          <TextField
            id="decor-input"
            name="decor"
            label="Decor"
            type="text"
            value={formData.decor}
            onChange={handleInputChange}
          />
        </Grid> */}

        {/* <Grid item>
          <TextField
            id="Music-input"
            name="music"
            label="Music Description"
            type="text"
            value={formData.music}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="price-input"
            name="price"
            label="Price"
            type="text"
            value={formData.price}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="food-input"
            name="food"
            label="Food Description"
            type="text"
            value={formData.food}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <RadioGroup
              name="spot-type"
              value={formData.type}
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
              value={formData.laptop}
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
              value={formData.outlets}
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
              value={formData.wifi}
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
        </Grid> */}

        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          disabled={!validForm}
        >
          Submit
        </Button>
      </Grid>
      </Box>
    </form>
    </>
  );
}

export default CreateSpotForm;