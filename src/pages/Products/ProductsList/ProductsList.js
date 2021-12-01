import { useEffect, useState } from 'react'
import './ProductsList.css'
import axios from 'axios'
import LinkBox from '../../../components/LinkBox/LinkBox'
import Loader from '../../../components/Loader/Loader'

const ProductsList = () => {
  let [products, setProducts] = useState([])

  useEffect(() => {
    ;(async function () {
      let { data } = await axios.get(
        'https://dhfakestore2.herokuapp.com/api/products/'
      )
      setTimeout(() => setProducts(data), 200)
    })()
  }, [])

  return (
    <>
      {products.length ? (
        <section className="section-products">
          {products.map((product, i) => (
            <LinkBox key={i} article={product} urlRef="/products/" />
          ))}
        </section>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default ProductsList
