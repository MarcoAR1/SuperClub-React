import React from 'react'
import './MuestraPageStore.css'

const MuestraPageStore = ({ store }) => {
  return (
    <div className="muestraPageStore">
      <img
        className="imgMuestraStore"
        src={store?.logo}
        alt={store?.title}
      ></img>
      <div>
        <p className="muestraTitle">{store?.name}</p>
      </div>
    </div>
  )
}

export default MuestraPageStore
