import { useEffect } from 'react'
import './StoresList.css'
import LinkBox from '../../../components/LinkBox/LinkBox'
import Loader from '../../../components/Loader/Loader'
import Header from '../../../components/Header/Header'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Button from '../../../components/Button/Button'
import useFilter from '../../../hooks/useFilter'

const StoresList = ({ handlerMenu, stores }) => {
  const {
    handlerSetInitialElement,
    element: storesFilters,
    textValue,
    handleChangeText
  } = useFilter()

  useEffect(() => {
    handlerSetInitialElement(stores)
  }, [handlerSetInitialElement, stores])

  return (
    <>
      <Header handlerMenu={handlerMenu}>
        <>
          <h2 className="header-title">Tiendas</h2>
          <div className="header-container-search">
            <SearchBar
              placeholder="Buscar tiendas"
              textValue={textValue}
              handleChangeText={handleChangeText}
            />
            <Button to="/stores/new">Agregar Tienda</Button>
          </div>
        </>
      </Header>
      <main className="mainAreaContent">
        {storesFilters?.length ? (
          <section className="section-stores">
            {storesFilters?.map((store, i) => (
              <LinkBox key={i} article={store} urlRef="/stores/" />
            ))}
          </section>
        ) : (
          <Loader />
        )}
      </main>
    </>
  )
}

export default StoresList
