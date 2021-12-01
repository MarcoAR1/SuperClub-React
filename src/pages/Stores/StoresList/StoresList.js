import { useEffect, useState } from 'react'
import './StoresList.css'
import axios from 'axios'
import LinkBox from '../../../components/LinkBox/LinkBox'
import Loader from '../../../components/Loader/Loader'

const StoresList = () => {
  let [stores, setStores] = useState([])

  useEffect(() => {
    ;(async function () {
      let { data } = await axios.get(
        'https://dhfakestore2.herokuapp.com/api/stores/'
      )
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
