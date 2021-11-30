import { useNavigate } from 'react-router'
import Button from '../Button/Button'
import './ProfileButton.css'

const ProfileButton = ({ name }) => {
  const navigate = useNavigate()

  const handlerProfileBtn = () => {
    navigate('/profile')
  }

  return (
    <div className="profileBtn" onClick={handlerProfileBtn}>
      <img
        className="profileImg"
        src="/assets/profile-pic.png"
        alt="Imagen de perfil"
      />
      {name}
    </div>
  )
}

export default ProfileButton
