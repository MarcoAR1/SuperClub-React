import './ProductView.css'
import { useState, useRef, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import MuestraPageProduct from '../../../components/MuestraPageProduct/MuestraPageProduct'
import Header from '../../../components/Header/Header'
import axiosActual from '../../../utils'
import Button from '../../../components/Button/Button'
import useDarkMode from '../../../hooks/useDarkMode'

const ProductView = ({ handlerMenu, storesName, setProducts }) => {
  const [currentProduct, setCurrentProduct] = useState({})
  const [mensajeError, setMensajeError] = useState('')
  const [product, setProduct] = useState({})
  const insertImgInput = useRef()
  useDarkMode()
  const { id } = useParams()

  const handleSelectStore = (e) => {
    setCurrentProduct((prev) => {
      const copy = { ...prev }
      copy.store = e.target.value
      return copy
    })
  }

  const handleTitle = (e) => {
    const currentValue = e.target.value

    setCurrentProduct((prev) => {
      const copy = { ...prev }
      copy.title = currentValue
      return copy
    })

    if (!currentValue) setMensajeError('Debe ingresar un producto')
    else setMensajeError('')
  }

  const handlePrice = (e) => {
    setCurrentProduct((prev) => {
      const copy = { ...prev }
      e.target.value = e.target.value.match(/\D/)
        ? copy.price
        : (e.target.value && Number(e.target.value)) || 0
      copy.price = e.target.value
      return copy
    })
  }

  const handleDescription = (e) => {
    setCurrentProduct((prev) => {
      const copy = { ...prev }
      copy.description = e.target.value
      return copy
    })
  }

  const handleChangeStock = (e) => {
    setCurrentProduct((prev) => {
      const copy = { ...prev }
      copy.stock = e.target.value.match(/\D/)
        ? copy.stock
        : (e.target.value && Number(e.target.value)) || 0
      return copy
    })
  }

  const handleRemoveImg = (img) => {
    setCurrentProduct((prev) => {
      const copy = { ...prev }
      copy.gallery = copy.gallery.filter((element) => element !== img)
      return copy
    })
  }

  const handleClickSum = () => {
    setCurrentProduct((prev) => {
      const copy = { ...prev }
      copy.stock += 1
      return copy
    })
  }

  const handleClickRest = () => {
    if (currentProduct.stock > 0)
      setCurrentProduct((prev) => {
        const copy = { ...prev }
        copy.stock -= 1
        return copy
      })
  }

  const handleInsertImg = (e) => {
    const currentValue = insertImgInput.current.value

    if (
      e.key === 'Enter' &&
      currentValue &&
      !currentProduct.gallery?.find((element) => element === currentValue)
    ) {
      insertImgInput.current.value = ''

      setCurrentProduct((prev) => {
        const copy = { ...prev }
        copy.gallery = [...copy.gallery, currentValue]
        return copy
      })
    }
  }

  const handleUpdate = async () => {
    const response = await axiosActual.put(
      `products/${currentProduct._id}/edit`,
      currentProduct
    )
    if (response.status === 200)
      setProducts((prev) => {
        const copy = [...prev]
        const index = copy.findIndex((elem) => elem._id === currentProduct._id)
        if (index !== -1) copy[index] = currentProduct
        return copy
      })
  }

  const handleCancel = () => {
    setCurrentProduct(product)
  }

  const handleDelete = async () => {
    const response = await axiosActual.delete(
      `products/${currentProduct._id}/delete`
    )
    if (response.status === 200)
      setProducts((prev) => {
        const copy = [...prev].filter((elem) => elem._id !== currentProduct._id)
        return copy
      })
  }

  useEffect(() => {
    axiosActual.get(`products/${id}`).then(({ data }) => {
      setCurrentProduct(data)
      setProduct(data)
    })
  }, [id])

  return (
    <>
      <Header handlerMenu={handlerMenu}>
        <div className="containerIdDelete">
          <div className="productId">
            <Link to="/products">
              <p>Productos</p>
            </Link>
            <img
              src="/assets/chevron-right (1).svg"
              alt="chevron"
              className="btn-box"
            />
            <p>#{currentProduct._id}</p>
          </div>

          <Button onClick={handleDelete}>Eliminar</Button>
        </div>
      </Header>
      <main className=" mainAreaContent">
        <div className=" productViewContainer">
          <div className="formPageProduct">
            <MuestraPageProduct product={currentProduct} />
            <p className="tituloProductPage">Información</p>
            <label className="labelProductPage" htmlFor="name">
              Nombre
            </label>
            <input
              onChange={handleTitle}
              className=" inputPageProduct"
              type="text"
              name="title"
              id="title"
              value={currentProduct.title || ''}
            />
            {mensajeError && <p>{mensajeError}</p>}

            <label className="labelProductPage" htmlFor="valor">
              Valor
            </label>
            <input
              min="0"
              onChange={handlePrice}
              className=" inputPageProduct"
              type="number"
              name="price"
              id="price"
              value={currentProduct.price || 0}
            />

            <label className="labelProductPage" htmlFor="stock">
              Stock
            </label>

            <div className="containerInputPageProductStock">
              <button onClick={handleClickRest} className="buttonPageProduct">
                -
              </button>
              <input
                className="inputPageProductStock"
                type="text"
                name="stock"
                placeholder="0"
                value={currentProduct.stock || 0}
                onChange={handleChangeStock}
              />
              <button onClick={handleClickSum} className="buttonPageProduct">
                +
              </button>
            </div>

            <label className="labelProductPage" htmlFor="description">
              Descripción
            </label>
            <textarea
              onChange={handleDescription}
              className="inputPageProductArea"
              name="description"
              value={currentProduct.description}
            />

            <label className="labelProductPage" htmlFor="tienda">
              Tienda
            </label>
            <select
              value={currentProduct.store || ''}
              onChange={handleSelectStore}
              className="inputPageProduct"
              name="tienda"
            >
              <option value="">Selecciona la tienda</option>
              {storesName?.map(({ name, _id }) => (
                <option key={_id} name={name} value={_id}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <p className="tituloProductPage">Galería de Imágenes</p>
          <div className="containerNuevaImagenInput">
            <label className="labelProductPage" htmlFor="imagen">
              Nueva Imagen
            </label>
            <input
              onKeyDown={handleInsertImg}
              ref={insertImgInput}
              className=" inputPageProduct"
              type="text"
              name="imagen"
            ></input>
          </div>
          <p className="tituloProductPage">Imágenes Actuales</p>

          <div className="cartImgProductPage">
            {currentProduct?.gallery?.map((element, i) => (
              <div key={i} className="cartProductPage">
                <img
                  className="imgCartPage"
                  src={element}
                  alt={currentProduct.title}
                ></img>
                <p
                  className="textCartProductPage"
                  style={{
                    maxWidth: '95ch',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {element}
                </p>
                <Button onClick={() => handleRemoveImg(element)}>Quitar</Button>
              </div>
            ))}
          </div>
          <div className="buttonsPageProduct">
            <Button onClick={handleCancel}>Cancelar</Button>
            <Button disabled={Boolean(mensajeError)} onClick={handleUpdate}>
              Guardar
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductView
