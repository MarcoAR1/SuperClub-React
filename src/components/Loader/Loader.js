import React from 'react'
import useDarkMode from '../../hooks/useDarkMode'
import Elsa from '../Elsa/Elsa'

const Loader = () => {
  useDarkMode()
  return (
    <Elsa>
      Cargando... <br /> Espera unos momentos
    </Elsa>
  )
}

export default Loader
