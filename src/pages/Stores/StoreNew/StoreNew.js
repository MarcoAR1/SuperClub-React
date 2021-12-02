import './StoreNew.css'
import { useState } from 'react'
import MuestraPageStore from '../../../components/MuestraPageStore/MuestraPageStore'
import Header from '../../../components/Header/Header'
import axiosActual from '../../../utils'
import Button from '../../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'

const StoreNew = ({ handlerMenu, setStores }) => {
  const [currentStore, setCurrentStore] = useState({})
  const [mensajeError, setMensajeError] = useState('')
  const navigate = useNavigate()

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
    const currentStore = e.target.value
    if (e.key === 'Enter' && currentStore && !currentStore.logo) {
      e.target.value = ''
      setCurrentStore((prev) => {
        const copy = { ...prev }
        copy.logo = currentStore
        return copy
      })
    }
  }

  const handleSave = async () => {
    const response = await axiosActual.post(`stores/new`, currentStore)
    if (!currentStore.name) return
    if (response.status === 200) {
      setStores((prev) => {
        const copy = [...prev, response.data]
        return copy
      })
      console.log(response)
      navigate('/stores')
    }
  }

  const handleCancel = () => {
    setCurrentStore({})
  }

  return (
    <>
      <Header handlerMenu={handlerMenu}>
        <div className="containerIdDelete">
          <div className="productId">
            <Link to="/stores">
              <p>Tiendas </p>
            </Link>
            <img
              src="/assets/chevron-right (1).svg"
              alt="chevron"
              className="btn-box"
            />
            <p>Nuevo</p>
          </div>
        </div>
      </Header>
      <main className=" mainAreaContent">
        <div className=" productViewContainer">
          <div className="formPageProduct">
            <div className="containerStoreViewThings">
              <MuestraPageStore store={currentStore} />
              <div className="storeViewNameInput">
                <label className="labelProductPage" htmlFor="name">
                  Nombre
                </label>
                <input
                  onChange={handleName}
                  className=" inputPageProduct"
                  type="text"
                  name="name"
                  id="name"
                  value={currentStore.name ?? ''}
                />
                {mensajeError && <p>{mensajeError}</p>}
              </div>

              <div className="cartStorePage">
                <img
                  className="imgCartPage"
                  src={currentStore?.logo || '/assets/store.svg'}
                  alt={currentStore?.name}
                  onError={(e) => (e.target.src = '/assets/store.svg')}
                ></img>
                <input
                  placeholder="Cambia tu logo"
                  onKeyDown={handleInsertImg}
                />
                <Button onClick={handleRemoveImg}>Quitar</Button>
              </div>
            </div>

            <div className="buttonsPageProduct">
              <Button onClick={handleCancel}>Cancelar</Button>
              <Button disabled={Boolean(mensajeError)} onClick={handleSave}>
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default StoreNew
