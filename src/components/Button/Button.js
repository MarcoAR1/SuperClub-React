import { useNavigate } from 'react-router'
import './Button.css'

const Button = ({ children, link }) => {
  const navigate = useNavigate()

  const handlerButton = () => navigate(link)

  return (
    <button className={'btn'} onClick={handlerButton}>
      {children}
    </button>
  )
}

export default Button
