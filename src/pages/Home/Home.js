import React from 'react'
import Header from '../../components/Header/Header'

const Home = ({ handlerMenu }) => {
  return (
    <>
      <Header handlerMenu={handlerMenu} />
      <main className="mainAreaContent"></main>
    </>
  )
}

export default Home
