import React from 'react'
import './MuestraPageStore.css'

const MuestraPageStore = ({ store }) => {
  return (
    <div className="muestraPageStore">
      <img
        className="imgMuestraStore"
        src={store?.logo || '/assets/store.svg'}
        alt={store?.title}
        onError={(e) => (e.target.src = '/assets/store.svg')}
      ></img>
      <div>
        <p className="muestraTitle">{store?.name}</p>
      </div>
    </div>
  )
}

export default MuestraPageStore
