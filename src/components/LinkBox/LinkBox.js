import React from 'react'
import './LinkBox.css'
import { Link } from 'react-router-dom'

const LinkBox = ({ article }) => {
  return (
    <Link className="links-box" to={'/products/' + article._id}>
      <article className="article-box">
        <div className="container-box-info">
          <img
            className="article-img"
            src={article.image ? article.image : article.logo}
            alt=""
          />
          <div>
            <p>{article.title ? article.title : article.name}</p>
            <p>#{article._id}</p>
          </div>
        </div>
        <img className="btn-box" src="/assets/chevron-right (1).svg" alt="" />
      </article>
    </Link>
  )
}

export default LinkBox
