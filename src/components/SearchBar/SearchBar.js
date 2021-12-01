import React, { useRef } from 'react'
import './SearchBar.css'

const SearchBar = ({
  placeholder,
  handleChangeText,
  textValue,
  title,
  container
}) => {
  let flag = false
  const searchBar = useRef()
  const handleHideTitle = () => {
    if (window.innerWidth < 1025) {
      title.current.style.display = 'none'
      container.current.style.width = '100%'
      container.current.style.padding = '0 1rem'
    }
  }

  const handleFlag = () => {
    flag = true
    searchBar.current.style.width = '100%'
  }

  const handleShowTitle = () => {
    if (!flag) {
      if (window.innerWidth < 1025) {
        title.current.style.display = 'initial'
        container.current.style.width = 'initial'
      }
    }
  }

  const handleShowTitleFlag = () => {
    if (window.innerWidth < 1025) {
      title.current.style.display = 'initial'
      container.current.style.width = 'initial'
    }
    flag = false
  }

  return (
    <div
      ref={searchBar}
      className="search-bar"
      onMouseOver={handleHideTitle}
      onMouseOut={handleShowTitle}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="search-bar-input"
        value={textValue}
        onChange={handleChangeText}
        onBlur={handleShowTitleFlag}
        onFocus={handleFlag}
        tabIndex={2}
        name="input"
      />
      <button className="search-bar-btn">
        <img src="/assets/magnify.svg" alt="" />
      </button>
    </div>
  )
}

export default SearchBar
