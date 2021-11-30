import { useEffect, useState } from 'react'
import './ProductsList.css'
import axios from 'axios'
import LinkBox from '../../../components/LinkBox/LinkBox'

const ProductsList = () => {
  let [products, setProducts] = useState([])

  useEffect(() => {
    ;(async function () {
      let { data } = await axios.get(
        'https://dhfakestore2.herokuapp.com/api/products/'
      )
      setProducts(data)
      console.log(data)
    })()
  }, [])

  return (
    <section className="section-products">
      {products.map((product, i) => (
        <LinkBox key={i} article={product} />
      ))}
    </section>
  )
}

export default ProductsList
