import MainLayout from '@/components/layout/MainLayout'
import Categories from '@/components/products/Categories'
import { Typography } from '@mui/material'
import React from 'react'

const Bouquets = () => {
  return (
    <MainLayout title={'Bouquets'} pageDescription={''} imageFullUrl={''}>
      <Categories categoria='bouquets' title='Bouquets'/>
    </MainLayout>
  )
}

export default Bouquets