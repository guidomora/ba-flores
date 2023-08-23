import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import { Box, Typography, Button, Link } from '@mui/material';
import NextLink from "next/link"

const Error = () => {
  return (
    <MainLayout title='Pagina no encontrada' pageDescription='Error en la busqueda' 
    imageFullUrl={'https://firebasestorage.googleapis.com/v0/b/segunda-floreria.appspot.com/o/newPortada.png?alt=media&token=26361baf-5527-4eed-9864-eb86328a2989'}>
        <Box pt={6} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
            <Typography textAlign="center" component="h1" variant='h2' color="primary">Ups... Parece que te perdiste!</Typography>
            <Button variant="outlined" sx={{mt: 5, textTransform:"none", fontSize:20}}>
                <NextLink legacyBehavior href={"/"} passHref>
                    <Link sx={{textDecoration:"none"}}>
                        Ir a la página principal
                    </Link>
                </NextLink>
            </Button>
        </Box>
    </MainLayout>
  )
}

export default Error