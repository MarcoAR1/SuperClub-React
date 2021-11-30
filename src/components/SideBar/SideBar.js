import React from 'react'
import './SideBar.css'

const SideBar = React.forwardRef(({ closeMenu }, ref) => {
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
    ></div>
  )
})

export default SideBar
