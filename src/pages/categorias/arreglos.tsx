import MainLayout from '@/components/layout/MainLayout'
import Categories from '@/components/products/Categories'
import { Typography } from '@mui/material'
import React from 'react'

const Arreglos = () => {
  return (
    <MainLayout title={'Arreglos florales'} pageDescription={''} imageFullUrl={''}>
      <Categories categoria='arreglos' title='Arreglos Florales'/>
    </MainLayout>
  )
}

export default Arreglos