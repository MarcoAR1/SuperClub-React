import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import NotFound from '../../pages/NotFound/NotFound'
import ProductNew from '../../pages/Products/ProductNew/ProductNew'
import ProductsList from '../../pages/Products/ProductsList/ProductsList'
import ProductView from '../../pages/Products/ProductView/ProductView'
import StoresList from '../../pages/Stores/StoresList/StoresList'
import StoreView from '../../pages/Stores/StoreView/StoreView'
import axiosActual from '../../utils'
import './MainArea.css'

const MainArea = React.forwardRef(({ handlerMenu }, ref) => {

  const [stores, setStores] = useState([])
  const [products, setProducts] = useState([])

  useEffect(
    () => {
      axiosActual.get("stores").then(({data})=> {
        setStores(data)}) 
        axiosActual.get("products").then(({data})=> { 
          setProducts(data)}) 
    }, []
  )

  return (
    <div className="mainArea" ref={ref}>
      <Routes>
        <Route path="/" element={<Home handlerMenu={handlerMenu} />} />
        <Route
          path="/products"
          element={<ProductsList products={products} handlerMenu={handlerMenu} />}
        />
        <Route
          path="/products/:id"
          element={<ProductView products={products} setProducts={setProducts} storesName={stores} handlerMenu={handlerMenu} />}
        />
        <Route path="/products/new" element={<ProductNew setProducts={setProducts} storesName={stores} handlerMenu={handlerMenu}/>}/>
        <Route
          path="/stores"
          element={<StoresList stores={stores}  handlerMenu={handlerMenu} />}
        />
        <Route path="/stores/:id" element={<StoreView stores={stores} setStores={setStores} handlerMenu={handlerMenu}/>} />
        <Route path="/stores/new" />
        <Route
          path="/profile"
          element={<NotFound handlerMenu={handlerMenu} />}
        />
        <Route path="*" element={<NotFound handlerMenu={handlerMenu} />} />
      </Routes>
    </div>
  )
})

export default MainArea
