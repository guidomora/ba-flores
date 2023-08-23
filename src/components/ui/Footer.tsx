import React from 'react'
import { Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid height={100}
    sx={{backgroundColor: "secondary.main"}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography color="primary" fontSize={17}>Todos los derechos reservados 2023</Typography>
    </Grid>
  )
}

export default Footer