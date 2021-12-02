import useDarkMode from '../../hooks/useDarkMode'
import ProfileButton from '../../components/ProfileButton/ProfileButton'
import './MuestraProductPage.css'
import { useEffect, useState } from 'react'
import axiosActual from '../../utils'

const MuestraPageProduct = ({ product }) => {
  const [store, setStore] = useState({})

  useEffect(() => {
    axiosActual
      .get(`stores/${product.store}`)
      .then(({ data }) => setStore(data))
  }, [product])

  useDarkMode()
  return (
    <div className="muestraPageProduct">
      <img
        className="imgMuestraProduct"
        src={product.image}
        alt={product.title}
      ></img>
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
          <div>
            <ProfileButton
              name={store?.name || 'Sin tienda'}
              link={product.store ? `/stores/${product.store}` : "#"}
              img={store?.logo || '/assets/store.svg'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MuestraPageProduct
