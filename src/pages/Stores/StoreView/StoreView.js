import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Header from '../../../components/Header/Header'
import MuestraPageStore from '../../../components/MuestraPageStore/MuestraPageStore'
import axiosActual from '../../../utils'
import './StoreView.css'

const StoreView = ({ handlerMenu, setStores }) => {
  const [currentStore, setCurrentStore] = useState({})
  const [mensajeError, setMensajeError] = useState('')
  const [store, setStore] = useState({})
  const navigate = useNavigate()
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

  const handleUpdate = async () => {
    const response = await axiosActual.put(
      `stores/${currentStore._id}/edit`,
      currentStore
    )
    if (response.status === 200)
      setStores((prev) => {
        const copy = [...prev]
        const index = copy.findIndex((elem) => elem._id === currentStore._id)
        if (index !== -1) copy[index] = currentStore
        return copy
      })
  }
  const handleDelete = async () => {
    const response = await axiosActual.delete(
      `sotores/${currentStore._id}/delete`
    )
    if (response.status === 200) {
      setStores((prev) => {
        const copy = [...prev].filter((elem) => elem._id !== currentStore._id)
        return copy
      })
      navigate('/stores')
    }
  }

  const handleCancel = () => {
    setCurrentStore(store)
  }

  useEffect(() => {
    axiosActual.get(`stores/${id}`).then(({ data }) => {
      setCurrentStore(data)
      setStore(data)
    })
  }, [id])

  return (
    <>
      <Header handlerMenu={handlerMenu}>
        <div className="containerIdDelete">
          <div className="productId">
            <Link to="/stores">
              <p>Tiendas</p>
            </Link>
            <img
              src="/assets/chevron-right (1).svg"
              alt="chevron"
              className="btn-box"
            />
            <p>#{currentStore?._id}</p>
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
                  value={currentStore?.name ?? ''}
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
              <Button disabled={Boolean(mensajeError)} onClick={handleUpdate}>
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default StoreView
