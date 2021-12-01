import React from 'react'
import './SearchBar.css'

const SearchBar = ({ placeholder, handleChangeText, textValue }) => {
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
