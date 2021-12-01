import { useEffect, useState } from 'react'
import './StoresList.css'
import LinkBox from '../../../components/LinkBox/LinkBox'
import Loader from '../../../components/Loader/Loader'
import axiosActual from '../../../utils'

const StoresList = () => {
  let [stores, setStores] = useState([])

  useEffect(() => {
    ;(async function () {
      let { data } = await axiosActual.get('products')
      setTimeout(() => setStores(data), 200)
    })()
  }, [])

  return (
    <>
      {stores.length ? (
        <section className="section-stores">
          {stores.map((store, i) => (
            <LinkBox key={i} article={store} urlRef="/stores/" />
          ))}
        </section>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default StoresList
