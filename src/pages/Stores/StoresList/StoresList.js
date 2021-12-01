import { useEffect } from 'react'
import './StoresList.css'
import axios from 'axios'
import LinkBox from '../../../components/LinkBox/LinkBox'
import Loader from '../../../components/Loader/Loader'
import Header from '../../../components/Header/Header'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Button from '../../../components/Button/Button'
import useFilter from '../../../hooks/useFilter'

const StoresList = ({ handlerMenu }) => {
  const {
    handlerSetInitialElement,
    element: stores,
    textValue,
    handleChangeText
  } = useFilter()

  useEffect(() => {
    ;(async function () {
      let { data } = await axios.get(
        'https://dhfakestore2.herokuapp.com/api/stores/'
      )
      setTimeout(() => handlerSetInitialElement(data), 200)
    })()
  }, [handlerSetInitialElement])

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
            <Button>Agregar Tienda</Button>
          </div>
        </>
      </Header>
      <main className="mainAreaContent">
        {stores.length ? (
          <section className="section-stores">
            {stores.map((store, i) => (
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
