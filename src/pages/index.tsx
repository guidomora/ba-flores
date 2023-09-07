
import { Inter } from 'next/font/google'
import MainLayout from '@/components/layout/MainLayout'
import { Box, Typography } from '@mui/material'
import Destacados from '@/components/products/Destacados'
import Portada from '@/components/ui/Portada'
import Nosotros from '@/components/ui/Nosotros'
import Contacto from '@/components/ui/Contacto'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  return (
    <>
      <MainLayout title={'Buenos Aires flores'} pageDescription={'especialistas en coronas de flores, calidad premium y la mejor atencion'} 
      imageFullUrl={'https://firebasestorage.googleapis.com/v0/b/segunda-floreria.appspot.com/o/portadaNueva.jpeg?alt=media&token=959993f4-baad-474b-a739-0257c9ad2905'}>
        <Portada />
        <Box>
          <Nosotros />
        </Box>
        <Box display={'flex'} justifyContent={'center'} mt={8}>
          <Typography color="primary" component="h1" variant='h1' fontSize={37} textAlign="center">Todos nuestros productos</Typography>
        </Box>
        <Box display={'flex'} justifyContent={'center'} mt={2}>
          <Destacados />
        </Box>
        <Box>
          <Contacto />
        </Box>
      </MainLayout>
    </>
  )
}
