import { Box, Grid, CardMedia } from '@mui/material'



const Portada = () => {

  return (
    <Grid>
      <CardMedia component="img" image='https://firebasestorage.googleapis.com/v0/b/segunda-floreria.appspot.com/o/portadaNueva.jpeg?alt=media&token=959993f4-baad-474b-a739-0257c9ad2905'
      sx={{maxHeight:800}}
      className='animate__animated animate__fadeIn'>
      </CardMedia>
    </Grid>
  )
}

export default Portada