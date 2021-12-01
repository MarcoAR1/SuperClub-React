import React from 'react'
import useDarkMode from '../../../hooks/useDarkMode'

const StoreView = () => {
  useDarkMode()
  return <main className="mainAreaContent"></main>
}

export default StoreView
