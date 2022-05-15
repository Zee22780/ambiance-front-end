import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';

const SpotCard = () => {
  return (
    <Grid item xs={3}>
      <Paper>
        <img src="https://i.imgur.com/oXMzq4yt.jpg?2" alt="" className="img" />
        <Box 
          paddingX={1}
        >
        <Typography variant="subtitle1" component="h2">
          Amazing Coffee Shop
        </Typography>
        </Box>
      </Paper>
    </Grid>
  )
}

export default SpotCard