import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import useDarkMode from '../../hooks/useDarkMode'
import './Home.css'

const Home = ({ handlerMenu }) => {
  const [products, setProducts] = useState([])
  useDarkMode()
  useEffect(() => {
    ;(async function () {
      const { data } = await axios.get(
        'http://dhfakestore2.herokuapp.com/api/products/'
      )
      setProducts(data)
    })()
  }, [])

  const [stores, setStores] = useState([])
  useEffect(() => {
    ;(async function () {
      const { data } = await axios.get(
        'http://dhfakestore2.herokuapp.com/api/stores/'
      )
      setStores(data)
    })()
  }, [])

  return (
    <>
      <Header handlerMenu={handlerMenu}>
        <div className="hiUsername">¡Hola Olivia!</div>
      </Header>
      <main className="mainAreaContent">
        <div className="homeBody">
          <div className="boxes">
            <div className="box">
              <div className="amount">
                <img
                  className="boxLogo"
                  src="/assets/package-variant-closed.svg"
                  style={{ height: 53, width: 36 }}
                  alt="Logo"
                />
                <p> {products.length} Productos</p>
              </div>
              <div className="options">
                <Link to="/products">
                  <button className="watchListBtn">Ver Listado</button>
                </Link>
                <Link to="/products/new">
                  <button className="addBtn">Agregar Producto</button>
                </Link>
              </div>
            </div>
            <div className="box">
              <div className="amount">
                <img
                  className="storeLogo"
                  src="/assets/store.svg"
                  style={{ height: 53, width: 36 }}
                  alt="Logo"
                />
                <p> {stores.length} Tiendas</p>
              </div>
              <div className="options">
                <Link to="/stores" style={{ textDecoration: 'none' }}>
                  <button className="watchListBtn">Ver Listado</button>
                </Link>
                <Link to="/stores/new" style={{ textDecoration: 'none' }}>
                  <button className="addBtn">Agregar Tienda</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
