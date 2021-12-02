import React, { useRef } from 'react'
import useDarkMode from '../../hooks/useDarkMode'
import ProfileButton from '../ProfileButton/ProfileButton'
import SlideLink from '../SlideLink/SlideLink'
import SwitchMode from '../SwitchMode/SwitchMode'
import './SideBar.css'

const SideBar = React.forwardRef(({ closeMenu }, ref) => {
  const slideLinks = useRef()

  // TODO: Agregar el flag de isDark cuando se haga la US15
  useDarkMode()

  const handlerAllSlideLinks = () => {
    const isDark = localStorage.getItem('preferedTheme') === 'dark'
    const selected = [...slideLinks.current.children].find(
      (slideLink) =>
        slideLink.classList.contains('slideLinkSelected') ||
        slideLink.classList.contains('darkSlideLinkSelected')
    )
    selected?.classList.remove(
      isDark ? 'darkSlideLinkSelected' : 'slideLinkSelected'
    )
  }

  const handlerSideBar = (e) => {
    e.stopPropagation()
  }
  return (
    <div
      ref={ref}
      className="sideBar"
      tabIndex="1"
      onClick={(e) => handlerSideBar(e)}
      onBlur={closeMenu}
    >
      <div className="logoSlideLinksContainer">
        <img
          src="/assets/Banco_Santander_Logotipo.svg"
          alt="Logo"
          className="logo"
        />
        <div ref={slideLinks} className="slideLinks">
          <SlideLink
            handlerAllSlideLinks={handlerAllSlideLinks}
            link="/"
            image="/assets/home.svg"
          >
            Inicio
          </SlideLink>
          <SlideLink
            handlerAllSlideLinks={handlerAllSlideLinks}
            link="/products"
            image="/assets/package-variant-closed.svg"
          >
            Productos
          </SlideLink>
          <SlideLink
            handlerAllSlideLinks={handlerAllSlideLinks}
            link="/stores"
            image="/assets/store.svg"
          >
            Tiendas
          </SlideLink>
        </div>
        <ProfileButton
          name="Olivia"
          link="/profile"
          handlerAllSlideLinks={handlerAllSlideLinks}
        />
      </div>
      <div>
        <div className="switchDarkMode">
          <SwitchMode />
          <p>Dark Mode</p>
        </div>
        <br />
        <ProfileButton
          name="Olivia"
          link="/profile"
          handlerAllSlideLinks={handlerAllSlideLinks}
        />
      </div>
    </div>
  )
})

export default SideBar
