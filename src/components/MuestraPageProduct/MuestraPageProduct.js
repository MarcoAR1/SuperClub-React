import React from 'react'
import { Link } from 'react-router-dom'
import useDarkMode from '../../hooks/useDarkMode'
import "./MuestraProductPage.css"


const MuestraPageProduct = ({ product }) => {
  useDarkMode()
  return (
    <div className="muestraPageProduct">
        <img className="imgMuestraProduct" src={product.image} alt={product.title}></img>
        <div>
          <p className="muestraTitle">{product.title}</p>
          <div className="containerPuntosProduct">
            <div className="containerPuntosClub">
              <p className="numberProductPage">{product.price}</p>
              <p className="puntosProductPage">
                PUNTOS <br></br>SUPER CLUB
              </p>
            </div>
            <div className="containerPuntosClub">
              <p className="numberProductPage">{product.stock}</p>
              <p className="puntosProductPage">
                STOCK <br></br>DISPONIBLE
              </p>
            </div>
            <div className="havannaSL">
            <Link className="linkProduct" to={`https://dhfakestore2.herokuapp.com/api/stores/${product.store}`}>{/* boton de agus */}</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MuestraPageProduct
