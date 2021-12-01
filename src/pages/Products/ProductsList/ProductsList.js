import { useEffect, useRef } from 'react'
import './ProductsList.css'
import LinkBox from '../../../components/LinkBox/LinkBox'
import Loader from '../../../components/Loader/Loader'
import Header from '../../../components/Header/Header'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Button from '../../../components/Button/Button'
import useFilter from '../../../hooks/useFilter'
import axiosActual from '../../../utils'
import useWindowSize from '../../../hooks/useResize'

const ProductsList = ({ handlerMenu }) => {
  const {
    handlerSetInitialElement,
    element: products,
    textValue,
    handleChangeText
  } = useFilter()

  const [width] = useWindowSize()

  const title = useRef()
  const container = useRef()

  useEffect(() => {
    ;(async function () {
      let { data } = await axiosActual.get('products')
      setTimeout(() => handlerSetInitialElement(data), 200)
    })()
  }, [handlerSetInitialElement])

  return (
    <>
      <Header handlerMenu={handlerMenu}>
        <>
          <h2 ref={title} className="header-title">
            Productos
          </h2>
          <div ref={container} className="header-container-search">
            <SearchBar
              placeholder="Buscar productos"
              textValue={textValue}
              handleChangeText={handleChangeText}
              title={title}
              container={container}
            />
            <Button link="/products/new">
              {width > 1024 ? (
                'Agregar Producto'
              ) : (
                <i className="fas fa-plus"></i>
              )}
            </Button>
          </div>
        </>
      </Header>
      <main className="mainAreaContent">
        {products.length ? (
          <section className="section-products">
            {products.map((product, i) => (
              <LinkBox key={i} article={product} urlRef="/products/" />
            ))}
          </section>
        ) : (
          <Loader />
        )}
      </main>
    </>
  )
}

export default ProductsList
