import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useDarkMode from '../../hooks/useDarkMode'
import './SlideLink.css'

const SlideLink = ({ image, handlerAllSlideLinks, link, isDark, children }) => {
  const slideLink = useRef()
  const navigate = useNavigate()
  useDarkMode()

  const { pathName } = useLocation()
  useEffect(() => {
    const isDark = localStorage.getItem('preferedTheme') === 'dark'
    const location = window.location.pathname
    if (location === link)
      slideLink.current?.classList.add(
        isDark ? 'darkSlideLinkSelected' : 'slideLinkSelected'
      )
    // eslint-disable-next-line
  }, [pathName])
  const handlerSlideLink = () => {
    const isDark = localStorage.getItem('preferedTheme') === 'dark'
    handlerAllSlideLinks()
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
