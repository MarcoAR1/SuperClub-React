import './ProductNew.css'
import { useState, useRef } from 'react'
import MuestraPageProduct from '../../../components/MuestraPageProduct/MuestraPageProduct'
import Header from '../../../components/Header/Header'
import axiosActual from '../../../utils'
import Button from '../../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'

const ProductNew = ({ handlerMenu, storesName, setProducts }) => {
  const [currentProduct, setCurrentProduct] = useState({
    stock: 0,
    price: 0,
    gallery: []
  })
  const [mensajeError, setMensajeError] = useState('')
  const insertImgInput = useRef()
  const navigate = useNavigate()

  const handleNewImg = (e) => {
    setCurrentProduct((prev) => {
      const copy = { ...prev }
      copy.image = e.target.value
      return copy
    })
  }

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
      !currentProduct?.gallery?.find((element) => element === currentValue)
    ) {
      setCurrentProduct((prev) => {
        const copy = { ...prev }
        copy.gallery = [...copy.gallery, currentValue]
        return copy
      })
    }
  }

  const handleSaveData = async () => {
    const response = await axiosActual.post(`products/new`, currentProduct)
    console.log(response)
    if (response.status === 200) {
      setProducts((prev) => {
        const copy = [...prev, JSON.parse(response.data)]
        return copy
      })
      navigate('/prducts')
    }
  }

  const handleReset = () => {
    setCurrentProduct({ stock: 0, price: 0, gallery: [] })
  }

  return (
    <>
      <Header handlerMenu={handlerMenu}>
        <div className="containerIdDelete">
          <div className="productId">
            <Link to="/products">
              <p>Productos </p>
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
            <MuestraPageProduct product={currentProduct} />
            <input
              className="inputNewProduct"
              type="text"
              placeholder="ingrese una imagen"
              value={currentProduct.image}
              onChange={handleNewImg}
            ></input>
            <img
              className="imgNewProduct"
              src={currentProduct.image}
              alt={currentProduct.title}
            ></img>
            <p className="tituloProductPage">Información</p>
            <label className="labelProductPage" for="name">
              Nombre
            </label>
            <input
              onChange={handleTitle}
              className=" inputPageProduct"
              type="text"
              name="title"
              id="title"
              value={currentProduct.title}
            />
            {mensajeError && <p>{mensajeError}</p>}

            <label className="labelProductPage" for="valor">
              Valor
            </label>
            <input
              min="0"
              onChange={handlePrice}
              className=" inputPageProduct"
              type="number"
              name="price"
              id="price"
              value={currentProduct.price}
            />

            <label className="labelProductPage" for="stock">
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
                value={currentProduct.stock}
                onChange={handleChangeStock}
              />
              <button onClick={handleClickSum} className="buttonPageProduct">
                +
              </button>
            </div>

            <label className="labelProductPage" for="description">
              Descripción
            </label>
            <textarea
              onChange={handleDescription}
              className="inputPageProductArea"
              name="description"
              value={currentProduct.description}
            />

            <label className="labelProductPage" for="tienda">
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
                <option name={name} value={_id}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <p className="tituloProductPage">Galería de Imágenes</p>
          <div className="containerNuevaImagenInput">
            <label className="labelProductPage" for="imagen">
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
            {currentProduct?.gallery?.map((element) => (
              <div className="cartProductPage">
                <img
                  className="imgCartPage"
                  src={element}
                  alt={currentProduct.title}
                ></img>
                <p className="textCartProductPage">{element}</p>
                <Button onClick={() => handleRemoveImg(element)}>Quitar</Button>
              </div>
            ))}
          </div>
          <div className="buttonsPageProduct">
            <Button onClick={handleReset}>Resetear</Button>
            <Button disabled={Boolean(mensajeError)} onClick={handleSaveData}>
              Guardar
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductNew
