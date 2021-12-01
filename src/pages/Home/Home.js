import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    ;(async function () {
      const { data } = await axios.get(
        'https://dhfakestore2.herokuapp.com/api/products/'
      )
      setProducts(data)
    })()
  }, [])

  const [stores, setStores] = useState([])
  useEffect(() => {
    ;(async function () {
      const { data } = await axios.get(
        'https://dhfakestore2.herokuapp.com/api/stores/'
      )
      setStores(data)
    })()
  }, [])
  return (
    <div className="homeBody">
      <div className="hiUsername">¡Hola Olivia!</div>
      <div className="boxes">
        <div className="box">
          <div className="amount">
            <img
              src="/assets/package-variant-closed.svg"
              style={{ height: 53, width: 36 }}
              alt="Logo"
            />
            <p> {products.length} Productos</p>
          </div>
          <div className="options">
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <button className="watchListBtn">Ver Listado</button>
            </Link>
            <Link to="/products/new" style={{ textDecoration: 'none' }}>
              <button className="addBtn">Agregar Producto</button>
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="amount">
            <img
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
  )
}

export default Home
