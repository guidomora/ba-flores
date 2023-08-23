import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Nosotros = () => {
    return (
        <Grid sx={{ backgroundColor: "secondary.main" }} mt={-1} mb={4} p={5}>
            <Box>
                <Typography variant='h4' component="h3" color="primary" mb={3} textAlign={'center'}
                sx={{fontSize:{xs:24, sm:28}}}>Productos florales de la más alta calidad y diseño.<br/>
                    Nuestro compromiso nos ha convertido en una opción confiable para acompañarlos en momentos de profundo significado.
                </Typography>
            </Box>
        </Grid>
    )
}

export default Nosotros
