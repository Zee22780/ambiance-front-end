import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating'

const SpotCard = () => {
  return (
    <Grid item xs={2}>
      <Paper elevation={8}>
        <img src="https://i.imgur.com/oXMzq4y.jpg?2" alt="" className="img" />
        <Box 
          paddingX={1}
        >
        <Typography variant="subtitle1" component="h2">
          Amazing Coffee Shop
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography component="legend"></Typography>
          <Rating 
            name="read-only"
            value={4.5} 
            readOnly
            precision={0.5}
            size="small"
          />
        </Box>
        <Box>
          <Typography>
            Neighborhood
          </Typography>
        </Box>
        <Box>
          <Typography>
            Type
          </Typography>
        </Box>
        </Box>

      </Paper>
    </Grid>
  )
}

export default SpotCard