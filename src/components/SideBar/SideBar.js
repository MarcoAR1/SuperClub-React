import React, { useRef } from 'react'
import ProfileButton from '../ProfileButton/ProfileButton'
import SlideLink from '../SlideLink/SlideLink'
import './SideBar.css'

const SideBar = React.forwardRef(({ closeMenu }, ref) => {
  const slideLinks = useRef()

  // TODO: Agregar el flag de isDark cuando se haga la US15
  const isDark = false

  const handlerAllSlideLinks = (isDark) => {
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
    <>
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
              isDark={isDark}
            >
              Inicio
            </SlideLink>
            <SlideLink
              handlerAllSlideLinks={handlerAllSlideLinks}
              link="/products"
              image="/assets/package-variant-closed.svg"
              isDark={isDark}
            >
              Productos
            </SlideLink>
            <SlideLink
              handlerAllSlideLinks={handlerAllSlideLinks}
              link="/stores"
              image="/assets/store.svg"
              isDark={isDark}
            >
              Tiendas
            </SlideLink>
          </div>
        </div>
        <ProfileButton
          name="Olivia"
          link="/profile"
          handlerAllSlideLinks={handlerAllSlideLinks}
          isDark={isDark}
        />
      </div>
      <div
       className='sliderBarPlaceHolder'
      ></div>
    </>
  )
})

export default SideBar
