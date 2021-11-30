import { useEffect, useState } from 'react'
import './StoresList.css'
import axios from 'axios'
import LinkBox from '../../../components/LinkBox/LinkBox'

const StoresList = () => {
  let [stores, setStores] = useState([])

  useEffect(() => {
    ;(async function () {
      let { data } = await axios.get(
        'https://dhfakestore2.herokuapp.com/api/stores/'
      )
      setStores(data)
      console.log(data)
    })()
  }, [])

  return (
    <section className="section-stores">
      {stores.map((store, i) => (
        <LinkBox key={i} article={store} />
      ))}
    </section>
  )
}

export default StoresList
