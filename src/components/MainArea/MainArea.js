import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import NotFound from '../../pages/NotFound/NotFound'
import ProductsList from '../../pages/Products/ProductsList/ProductsList'
import ProductView from '../../pages/Products/ProductView/ProductView'
import StoresList from '../../pages/Stores/StoresList/StoresList'
import StoreView from '../../pages/Stores/StoreView/StoreView'
import Header from '../Header/Header'
import './MainArea.css'

const MainArea = ({ handlerMenu }) => {
  const [product, setProduct] = useState({
    gallery: [
      'https://http2.mlstatic.com/D_NQ_NP_910441-MLA40997962116_032020-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_913638-MLA40997962180_032020-O.webp'
    ],
    mostwanted: true,
    stock: 0,
    store: null,
    _id: '61a68816edf2290788c89aa6',
    title: 'Xiaomi Mi Body Composition Scale 2',
    price: 53990,
    description:
      'Con esta balanza de Xiaomi medí tu peso con una exactitud sin igual. Con su sensor en forma de G este dispositivo puede detectar variaciones tan pequeñas como lo son 50 gramos. Además, tiene 13 métricas de composición corporal tales como porcentajes de grasa corporal, masa muscular, grasa visceral, masa ósea, edad corporal, entre otros. Y como si esto fuera poco, también dispone de una función de prueba de equilibrio.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_975258-MLA4'
  })

  return (
    <div className="mainArea">
      <Header handlerMenu={handlerMenu} />
      <main class="mainAreaContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route
            path="/products/:id"
            element={<ProductView product={product} setProduct={setProduct}/>}
          />
          <Route path="/products/new" />
          <Route path="/stores" element={<StoresList />} />
          <Route path="/stores/:id" element={<StoreView />} />
          <Route path="/stores/new" />
          <Route path="/profile" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default MainArea
