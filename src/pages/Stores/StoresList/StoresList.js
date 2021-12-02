import { useEffect, useRef } from 'react'
import './StoresList.css'
import LinkBox from '../../../components/LinkBox/LinkBox'
import Loader from '../../../components/Loader/Loader'
import Header from '../../../components/Header/Header'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Button from '../../../components/Button/Button'
import useFilter from '../../../hooks/useFilter'
import useWindowSize from '../../../hooks/useResize'
import useDarkMode from '../../../hooks/useDarkMode'

const StoresList = ({ handlerMenu, stores }) => {
  const {
    handlerSetInitialElement,
    element: storesFilters,
    textValue,
    handleChangeText
  } = useFilter()

  const [width] = useWindowSize()
  const title = useRef()
  const container = useRef()

  useDarkMode()
  useEffect(() => {
    handlerSetInitialElement(stores)
  }, [handlerSetInitialElement, stores])

  return (
    <>
      <Header handlerMenu={handlerMenu}>
        <>
          <h2 ref={title} className="header-title">
            Tiendas
          </h2>
          <div ref={container} className="header-container-search">
            <SearchBar
              placeholder="Buscar tiendas"
              textValue={textValue}
              handleChangeText={handleChangeText}
              title={title}
              container={container}
            />
            <Button link="/stores/new">
              {width > 1024 ? (
                'Agregar Tienda'
              ) : (
                <i className="fas fa-plus"></i>
              )}
            </Button>
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
