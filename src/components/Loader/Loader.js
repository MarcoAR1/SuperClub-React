import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="message">
      <img className="notFoundImg" src="/assets/elsa.gif" alt="Elsa" />
      <h2 className="notFoundTitle">
        Cargando... <br /> Espera unos momentos
      </h2>
    </div>
  )
}

export default Loader
