import MainLayout from '@/components/layout/MainLayout'
import Categories from '@/components/products/Categories'
import { Typography } from '@mui/material'
import React from 'react'

const Coronas = () => {
  return (
    <MainLayout title={'Coronas'} pageDescription={''} imageFullUrl={''}>
      <Categories categoria='coronas' title='Coronas Funebres'/>
  </MainLayout>
  )
}

export default Coronas