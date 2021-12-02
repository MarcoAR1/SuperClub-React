import { useEffect } from 'react'
import './ProductsList.css'
import LinkBox from '../../../components/LinkBox/LinkBox'
import Loader from '../../../components/Loader/Loader'
import Header from '../../../components/Header/Header'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Button from '../../../components/Button/Button'
import useFilter from '../../../hooks/useFilter'

const ProductsList = ({ handlerMenu, products }) => {
  const {
    handlerSetInitialElement,
    element: productsFilters,
    textValue,
    handleChangeText
  } = useFilter()

  useEffect(() => {
   handlerSetInitialElement(products)
  }, [handlerSetInitialElement, products])

  return (
    <>
      <Header handlerMenu={handlerMenu}>
        <>
          <h2 className="header-title">Productos</h2>
          <div className="header-container-search">
            <SearchBar
              placeholder="Buscar productos"
              textValue={textValue}
              handleChangeText={handleChangeText}
            />
            <Button to= "/products/new">Agregar Producto</Button>
          </div>
        </>
      </Header>
      <main className="mainAreaContent">
        {productsFilters?.length ? (
          <section className="section-products">
            
            {productsFilters?.map((product, i) => (
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
