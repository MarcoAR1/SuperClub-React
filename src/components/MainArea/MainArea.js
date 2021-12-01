import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import NotFound from '../../pages/NotFound/NotFound'
import ProductsList from '../../pages/Products/ProductsList/ProductsList'
import ProductView from '../../pages/Products/ProductView/ProductView'
import StoresList from '../../pages/Stores/StoresList/StoresList'
import StoreView from '../../pages/Stores/StoreView/StoreView'
import axiosActual from '../../utils'
import './MainArea.css'

const MainArea = React.forwardRef(({ handlerMenu }, ref) => {

  const [stores, setStores] = useState([])
  useEffect(
    () => {
      axiosActual.get("stores").then(({data})=> {
        console.log(data)
        setStores(data)}) 
    }, []
  )


  return (
    <div className="mainArea" ref={ref}>
      <Routes>
        <Route path="/" element={<Home handlerMenu={handlerMenu} />} />
        <Route
          path="/products"
          element={<ProductsList handlerMenu={handlerMenu} />}
        />
        <Route
          path="/products/:id"
          element={<ProductView storesName={stores} handlerMenu={handlerMenu} />}
        />
        <Route path="/products/new" />
        <Route
          path="/stores"
          element={<StoresList handlerMenu={handlerMenu} />}
        />
        <Route path="/stores/:id" element={<StoreView />} />
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
