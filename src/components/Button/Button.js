import { useNavigate } from 'react-router'
import useDarkMode from '../../hooks/useDarkMode'
import './Button.css'

const Button = ({ children, link }) => {
  const navigate = useNavigate()

  const handlerButton = () => navigate(link)
  useDarkMode()
  return (
    <button className={'btn'} onClick={handlerButton}>
      {children}
    </button>
  )
}

export default Button
