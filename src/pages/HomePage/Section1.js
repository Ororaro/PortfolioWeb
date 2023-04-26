import React from 'react'
import './Section1.css'
import Box from '@mui/material/Box';
import { Button, Container, Grid, Typography } from '@mui/material';
const Section1 = () => {
  const handleClickNav = () => {
    document.getElementById('contactSection').scrollIntoView({ behavior: "smooth" })
}
  return (
    <Box className="control" id="homeSection" >
      <Grid container spacing={1}>
        <Grid item md={12} sm={12} xs={12}>
          <Box className="control-text" >
            <Typography variant='h3' sx={{fontSize:{xs:'50px !important'}}}>Hi! </Typography>
            <Typography variant='h4' sx={{fontSize:{xs:'50px !important'}}}>I'm <span style={{color: '#9b23ea',fontWeight: '700',letterSpacing:'1px' }}>Frame</span> </Typography>
            <Typography variant='h4' sx={{fontWeight: '700',letterSpacing:'1px',fontSize:{xs:'50px !important'} }}>Frontend Developer</Typography>
            <Typography variant='h5' sx={{fontWeight: '700' ,letterSpacing:'1px'}}>My name is Natpakal Chuejad<span style={{color: '#9b23ea',fontWeight: '700',letterSpacing:'1px' }}> (Frame) </span> from Thailand I enjoy creating website and  learning something new </Typography>
            <Box className="control-btn">
              <Button onClick={handleClickNav}>Contact Me</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Section1