import MainLayout from '@/components/layout/MainLayout'
import { Products } from '@/interfaces/products'
import { Box, Button, Card, CardMedia, Grid, Link, Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { GetStaticPaths } from 'next'
import { useContext } from 'react';
import DbContext from '@/context/db/DbContext'
import { GetStaticProps } from 'next'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NextLink from 'next/link';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import getProductBySlug from '@/utils/getProductBySlug'
import Slider from '@/components/ui/Slider/Slider'




interface Props {
    slug: string
}


const ProductPage: NextPage<Props> = ({ slug }) => {
    const { products } = useContext(DbContext)
    const product = products.filter(product => product.slug == `${slug}`)

    const title = product.map(title => title.titulo)
    const description = product.map(description => description.descripcion)

    

    return (
        <MainLayout title={`${title}`} pageDescription={`${description}`} 
        imageFullUrl={'https://firebasestorage.googleapis.com/v0/b/segunda-floreria.appspot.com/o/newPortada.png?alt=media&token=26361baf-5527-4eed-9864-eb86328a2989'}>
            <Grid pt={9}>
                {product.map(producto =>
                    <Button sx={{ml:5, textTransform:"none", fontSize:20}} variant="outlined" key={producto.titulo}>
                        <NextLink passHref legacyBehavior href={`/categorias/${producto.categoria}`}>
                            <Link sx={{textDecoration:"none"}}>
                                Volver a {`${producto.categoria}`}
                            </Link>
                        </NextLink>
                    </Button>

                )}

                {product.map(producto =>
                    <Grid sx={{ display: 'flex', flexDirection: { xs: 'column', sm: "column", md: "row" } }}
                     p={5} key={producto.titulo} className='animate__animated animate__fadeIn'>
                        <Grid key={producto.titulo} sx={{maxWidth:600}}>
                            <Slider images={producto.imagenes}/>
                        </Grid>
                        <Box ml={4} maxWidth={600} sx={{mt:{xs: 3, sm:3, md:0}}}>
                            <Box>
                                <Typography component="h2" variant='h4' color="primary">{producto.titulo}</Typography>
                                <Typography mt={3} fontSize={18}>{producto.descripcion}</Typography>
                                <Typography mt={3} fontSize={18}> Las flores pueden variar según la estación del año. Consultar disponibilidad
                                    de variedades y colores.
                                </Typography>
                                <Typography fontSize={25} mt={3} fontWeight="bolder">${producto.precio}</Typography>
                            </Box>
                            <Box mt={3}>
                                <NextLink passHref legacyBehavior href={"https://wa.me/541169402036"}>
                                    <Link display={'flex'} alignItems={'center'} sx={{ textDecoration: "none" }} target='blank'>
                                        <Button sx={{ textTransform: "capitalize", fontSize: 20 }} variant='outlined'>
                                            <Typography component="h6" variant='h4' sx={{ color: "black" }}>
                                                Contactar
                                            </Typography>
                                            <WhatsAppIcon sx={{ ml: 3, color: "#39d05c", fontSize: 35 }} />
                                        </Button>
                                    </Link>
                                </NextLink>
                            </Box>
                        </Box>
                    </Grid>

                )}
                <Box display={'flex'} justifyContent={'center'} pb={8} mt={8}>
                    <Box sx={{ border: 1, color: "primary.main", borderRadius: 2, width: { xs: 300, sm: 400 } }} display={'flex'} justifyContent={'center'}>
                        <Typography mb={2} display={'flex'} alignItems="center"
                            mt={3} color="black" sx={{ fontSize: { xs: 20, sm: 25 } }}>
                            Hacemos envíos en el día
                            <LocalShippingRoundedIcon sx={{ ml: 1 }} fontSize="large" />
                        </Typography>
                    </Box>

                </Box>
            </Grid>
        </MainLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const slugs = await getProductBySlug()

    return {
        paths: slugs.map(slug => ({
            params: { slug }
        })),
        fallback: "blocking"
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string }

    if (!slug) {
        return {
            redirect: {
                destination: "/",
                permanent: true
            }
        }
    }
    return {
        props: {
            slug
        },
        revalidate: 86400
    }
}


export default ProductPage