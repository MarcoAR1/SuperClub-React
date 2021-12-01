import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../../../components/Header/Header'
import MuestraPageStore from '../../../components/MuestraPageStore/MuestraPageStore'
import axiosActual from '../../../utils'
import './StoreView.css'

const StoreView = ({ handlerMenu }) => {
  const [currentStore, setCurrentStore] = useState({})
  const [mensajeError, setMensajeError] = useState('')
  const [store, setStore] = useState({})
  const insertImgInput = useRef()
  const { id } = useParams()

  const handleName = (e) => {
    const currentValue = e.target.value

    setCurrentStore((prev) => {
      const copy = { ...prev }
      copy.name = currentValue
      return copy
    })

    if (!currentValue) setMensajeError('Debe ingresar un nombre de tienda')
    else setMensajeError('')
  }

  const handleRemoveImg = () => {
    setCurrentStore((prev) => {
      const copy = { ...prev }
      copy.logo = null
      return copy
    })
  }

  const handleInsertImg = (e) => {
    const currentStore = insertImgInput.current.value

    if (e.key === 'Enter' && currentStore && !currentStore.logo) {
      setCurrentStore((prev) => {
        const copy = { ...prev }
        copy.logo = currentStore
        return copy
      })
    }
  }

  const handleSaveData = () => {
    axiosActual.put(`stores/${currentStore._id}/edit`, currentStore)
  }

  const handleCancel = () => {
    setCurrentStore(store)
  }

  useEffect(() => {
    axiosActual.get(`stores/${id}`).then(({ data }) => {
      setCurrentStore(data)
      setStore(data)
      console.log(data)
    })
  }, [id])

  return (
    <div>
      <Header handlerMenu={handlerMenu}>
        <div className="containerIdDelete">
          <p className="storeId">
            Tiendas
            <img src="/assets/chevron-right (1).svg" alt="Chevron" />#
            {currentStore?._id}
          </p>
        </div>
      </Header>
      <main className="mainAreaContent">
        <div className="storeViewContainer">
          <div className="formPageStore">
            <MuestraPageStore product={currentStore} />
            <p className="tituloStorePage">Información</p>
            <label htmlFor="nombre">Nombre</label>
            <input
              onChange={handleName}
              className="inputPageStore"
              type="text"
              name="nombre"
              id="nombre"
              value={currentStore.name ?? ''}
            />
            {mensajeError && <p>{mensajeError}</p>}
          </div>

          <p className="tituloStorePage">Galeria de Imagenes</p>
          <div className="containerNuevaImagenInput">
            <label htmlFor="imagen">Nueva Imagen</label>
            <input
              onKeyDown={handleInsertImg}
              ref={insertImgInput}
              className="inputPageStore"
              type="text"
              name="imagen"
            ></input>
          </div>
          <p className="tituloStorePage">Imagenes actuales</p>

          <div className="cartImgStorePage">
            <div className="cartStorePage">
              <img
                className="imgCartPage"
                src={currentStore?.logo}
                alt={currentStore?.name}
              ></img>
              <p className="textCartStorePage">{currentStore?.logo}</p>
              <button onClick={handleRemoveImg}>Quitar</button>
            </div>
          </div>
          <div className="buttonsPageStore">
            <button className="buttonCancelarPageStore" onClick={handleCancel}>
              Cancelar
            </button>
            <button
              disabled={Boolean(mensajeError)}
              className="buttonGuardarPageStore"
              onClick={handleSaveData}
            >
              Guardar
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StoreView
