import React from 'react'
import './SearchBar.css'

const SearchBar = ({ placeholder }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        className="search-bar-input"
      />
      <button className="search-bar-btn">
        <img src="/assets/magnify.svg" alt="" />
      </button>
    </div>
  )
}

export default SearchBar
