import './ProductView.css'
import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MuestraPageProduct from '../../../components/MuestraPageProduct/MuestraPageProduct'
import Header from '../../../components/Header/Header'

const storesName = ['amazon', 'apple', 'dell']

const ProductView = ({ handlerMenu }) => {
  const [currentProduct, setCurrentProduct] = useState({})
  const [mensajeError, setMensajeError] = useState('')
  const [product, setProduct] = useState({})
  const insertImgInput = useRef()
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
      copy.price = e.target.value || 0
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
      copy.stock = Number(e.target.value)
      return copy
    })
  }

  const handleRemoveImg = (img) => {
    console.log(img)
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
      !currentProduct.gallery.find((element) => element === currentValue)
    ) {
      console.log('me estoy ejecutando', currentValue)
      setCurrentProduct((prev) => {
        const copy = { ...prev }
        copy.gallery = [...copy.gallery, currentValue]
        console.log(copy)
        return copy
      })
    }
  }

  const handleSaveData = () => {
    console.log(currentProduct)
    axios.put(
      `https://dhfakestore2.herokuapp.com/api/products/${currentProduct._id}/edit`,
      currentProduct
    )
  }

  const handleCancel = () => {
    setCurrentProduct(product)
  }

  const handleDelete = () => {
    axios.delete(
      `https://dhfakestore2.herokuapp.com/api/products/${currentProduct._id}/delete`
    )
  }

  useEffect(() => {
    axios
      .get(`https://dhfakestore2.herokuapp.com/api/products/${id}`)
      .then(({ data }) => {
        setCurrentProduct(data)
        setProduct(data)
      })
  }, [id])

  return (
    <div>
      <Header handlerMenu={handlerMenu}>
        <>
          <div className="containerIdDelete">
            <p className="productId">
              {' '}
              Productos {'>'} #{currentProduct._id}
            </p>
            <button className="buttonDeleteProduct" onClick={handleDelete}>
              Eliminar
            </button>
          </div>
        </>
      </Header>
      <main className="mainAreaContent">
        <div className="productViewContainer">
          <div className="formPageProduct">
            <MuestraPageProduct product={currentProduct} />
            <p className="tituloProductPage">Información</p>
            <label for="name">Nombre</label>
            <input
              onChange={handleTitle}
              className="inputPageProduct"
              type="text"
              name="title"
              id="title"
              value={currentProduct.title}
            />
            {mensajeError && <p>{mensajeError}</p>}

            <label for="valor">Valor</label>
            <input
              min="0"
              onChange={handlePrice}
              className="inputPageProduct"
              type="number"
              name="price"
              id="price"
              value={currentProduct.price}
            />

            <label for="stock">Stock</label>
            <div className="containerInputPageProductStock">
              <button onClick={handleClickRest} className="buttonPageProduct">
                -
              </button>
              <input
                className="inputPageProductStock"
                type="text"
                name="stock"
                placeholder="0"
                value={currentProduct.stock}
                onChange={handleChangeStock}
              />
              <button onClick={handleClickSum} className="buttonPageProduct">
                +
              </button>
            </div>

            <label for="description">descripción</label>
            <textarea
              onChange={handleDescription}
              className="inputPageProductArea"
              rows="10"
              cols="20"
              name="description"
              value={currentProduct.description}
            />

            <label for="tienda">tienda</label>
            <select
              value={currentProduct.store || ''}
              onChange={handleSelectStore}
              className="inputPageProduct"
              name="tienda"
            >
              <option value="">Selecciona la tienda</option>
              {storesName.map((store) => (
                <option value={store}>{store}</option>
              ))}
            </select>
          </div>

          <p className="tituloProductPage">Galeria de Imagenes</p>
          <div className="containerNuevaImagenInput">
            <label for="imagen">Nueva Imagen</label>
            <input
              onKeyDown={handleInsertImg}
              ref={insertImgInput}
              className="inputPageProduct"
              type="text"
              name="imagen"
            ></input>
          </div>
          <p className="tituloProductPage">Imagenes actuales</p>

          <div className="cartImgProductPage">
            {currentProduct?.gallery?.map((element) => (
              <div className="cartProductPage">
                <img
                  className="imgCartPage"
                  src={element}
                  alt={currentProduct.title}
                ></img>
                <p className="textCartProductPage">{element}</p>
                <button onClick={() => handleRemoveImg(element)}>Quitar</button>
              </div>
            ))}
          </div>
          <div className="buttonsPageProduct">
            <button
              className="buttonCancelarPageProduct"
              onClick={handleCancel}
            >
              Cancelar
            </button>
            <button
              disabled={Boolean(mensajeError)}
              className="buttonGuardarPageProduct"
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

export default ProductView
