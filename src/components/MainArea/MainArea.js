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
  return (
    <div className="mainArea">
      <main class="mainAreaContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <>
                <Header handlerMenu={handlerMenu}>
                  <>
                    <h2>Productos</h2>
                    <div>
                      <input type="text" />
                      <button>Agregar Producto</button>
                    </div>
                  </>
                </Header>

                <ProductsList />
              </>
            }
          />
          <Route path="/products/:id" element={<ProductView />} />
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
