import { Box, Grid, Link, Typography, Button } from '@mui/material';
import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NextLink from "next/link"

const Contacto = () => {
  return (
    <Grid mt={3} pb={3} display={'flex'} justifyContent={"center"}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography component="h5" variant='h4' m={1} color="primary">Contacto</Typography>
        <Box display={'flex'} alignItems={'center'} m={1}>
          <CallIcon sx={{ fontSize: 50 }} />
          <Typography component="h6" variant='h4' ml={1}>
            4301-1744
          </Typography>
        </Box>
        <Box m={1}>
          <NextLink passHref legacyBehavior href={"https://wa.me/541169402036" }>
            <Link display={'flex'} alignItems={'center'} sx={{ textDecoration: "none"}} target='blank'>
              <Button variant="outlined">
                <WhatsAppIcon sx={{ color: "#39d05c", fontSize: 50 }} />
                <Typography component="h6" variant='h4' ml={1} sx={{color: "black" }}>
                  11 6940-2036
                </Typography>
              </Button>
            </Link>
          </NextLink>
        </Box>
      </Box>
    </Grid>
  )
}

export default Contacto