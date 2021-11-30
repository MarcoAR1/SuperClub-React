import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './SlideLink.css'

const SlideLink = ({ image, handlerAllSlideLinks, link, children }) => {
  window.addEventListener('load', () => {
    const location = window.location.pathname
    if (location === link)
      slideLink.current?.classList.add(
        isDark ? 'darkSlideLinkSelected' : 'slideLinkSelected'
      )
  })

  const slideLink = useRef()
  const navigate = useNavigate()

  // TODO: Agregar el flag de isDark cuando se haga la US15
  const isDark = false

  const handlerSlideLink = () => {
    handlerAllSlideLinks(isDark)
    slideLink.current.classList.add(
      isDark ? 'darkSlideLinkSelected' : 'slideLinkSelected'
    )
    navigate(link)
  }

  return (
    <div ref={slideLink} className="slideLink" onClick={handlerSlideLink}>
      <img className="slideLinkIcon" src={image} alt={`Link de ${children}`} />
      {children}
    </div>
  )
}

export default SlideLink
