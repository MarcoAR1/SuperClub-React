import { useNavigate } from 'react-router'
import './Button.css'

const Button = ({ children, to="", onClick }) => {
  const navigate = useNavigate()

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
