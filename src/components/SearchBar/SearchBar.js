import React from 'react'
import useDarkMode from '../../hooks/useDarkMode'
import './SearchBar.css'

const SearchBar = ({ placeholder, handleChangeText, textValue }) => {
  useDarkMode()
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        className="search-bar-input"
        value={textValue}
        onChange={handleChangeText}
      />
      <button className="search-bar-btn">
        <img src="/assets/magnify.svg" alt="" />
      </button>
    </div>
  )
}

export default SearchBar
