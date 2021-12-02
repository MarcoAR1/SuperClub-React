import { useNavigate } from 'react-router'
import useDarkMode from '../../hooks/useDarkMode'
import './Button.css'

const Button = ({ children, to="", onClick }) => {
  const navigate = useNavigate()
  useDarkMode()

  const handlerButton = (e) => {to && navigate(to)
    onClick && onClick(e)
  }


  return (
    <button className={'btn'} onClick={handlerButton}>
      {children}
    </button>
  )
}

export default Button
