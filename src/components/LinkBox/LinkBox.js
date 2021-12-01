import React from 'react'
import './LinkBox.css'
import { Link } from 'react-router-dom'
import useDarkMode from '../../hooks/useDarkMode'

const LinkBox = ({ article, urlRef }) => {
  useDarkMode()
  return (
    <Link className="links-box" to={urlRef + article._id}>
      <article className="article-box">
        <div className="container-box-info">
          <img
            className="article-img"
            src={article.image ?? article.logo ?? ''}
            alt=""
            onError={(e) =>
              (e.target.src =
                urlRef === '/products/'
                  ? '/assets/package-variant-closed.svg'
                  : '/assets/store.svg')
            }
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
