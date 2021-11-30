import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import NotFound from '../NotFound/NotFound'
import ProductsList from '../Products/ProductsList/ProductsList'
import ProductView from '../Products/ProductView/ProductView'
import StoresList from '../Stores/StoresList/StoresList'
import StoreView from '../Stores/StoreView/StoreView'

const MainArea = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductView />} />
      <Route path="/products/new" />
      <Route path="/stores" element={<StoresList />} />
      <Route path="/stores/:id" element={<StoreView />} />
      <Route path="/stores/new" />
      <Route path="/profile" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default MainArea
