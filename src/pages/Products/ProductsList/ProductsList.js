import { useEffect, useState } from 'react'
import './ProductsList.css'
import LinkBox from '../../../components/LinkBox/LinkBox'
import Loader from '../../../components/Loader/Loader'
import axiosActual from '../../../utils'

const ProductsList = () => {
  let [products, setProducts] = useState([])

  useEffect(() => {
    ;(async function () {
      let { data } = await axiosActual.get('products')
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
