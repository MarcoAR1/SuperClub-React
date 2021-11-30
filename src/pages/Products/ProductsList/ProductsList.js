import { useEffect, useState } from 'react'
import './ProductsList.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        <Link
          key={i}
          className="links-products"
          to={'/products/' + product._id}
        >
          <article className="article-product">
            <div className="container-products-info">
              <img className="article-img" src={product.image} alt="" />
              <div>
                <p>{product.title}</p>
                <p>#{product._id}</p>
              </div>
            </div>
            <img
              className="btn-product"
              src="/assets/chevron-right (1).svg"
              alt=""
            />
          </article>
        </Link>
      ))}
    </section>
  )
}

export default ProductsList
