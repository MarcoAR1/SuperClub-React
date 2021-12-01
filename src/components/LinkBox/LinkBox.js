import React from 'react'
import './LinkBox.css'
import { Link } from 'react-router-dom'

const LinkBox = ({ article, urlRef }) => {
  return (
    <Link className="links-box" to={urlRef + article._id}>
      <article className="article-box">
        <div className="container-box-info">
          <img
            className="article-img"
            src={
              urlRef === '/products/'
                ? article.image ?? '/assets/package-variant-closed.svg'
                : article.logo ?? '/assets/store.svg'
            }
            alt=""
          />
          <div>
            <p>{article.title ?? article.name}</p>
            <p>#{article._id}</p>
          </div>
        </div>
        <img className="btn-box" src="/assets/chevron-right (1).svg" alt="" />
      </article>
    </Link>
  )
}

export default LinkBox
