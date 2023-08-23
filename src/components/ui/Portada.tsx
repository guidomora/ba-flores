import { Box, Grid, CardMedia } from '@mui/material'



const Portada = () => {

  return (
    <Grid>
      <CardMedia component="img" image='https://firebasestorage.googleapis.com/v0/b/segunda-floreria.appspot.com/o/newPortada.png?alt=media&token=26361baf-5527-4eed-9864-eb86328a2989'
      sx={{maxHeight:800}}
      className='animate__animated animate__fadeIn'>
      </CardMedia>
    </Grid>
  )
}

export default Portada