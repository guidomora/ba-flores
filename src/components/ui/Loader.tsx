import { Grid, Typography } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Grid display={'flex'} flexDirection={'column'} pt={4}>
        <div className="loader"></div>
        <Typography fontSize={23} mt={9} fontWeight="bolder">Cargando...</Typography>
    </Grid>
  )
}

export default Loader