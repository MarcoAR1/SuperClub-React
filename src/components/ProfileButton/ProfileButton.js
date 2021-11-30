import Button from '../Button/Button'
import './ProfileButton.css'

const ProfileButton = ({ name }) => {
  return (
    <Button classNameButton="profileBtn">
      <img
        className="profileImg"
        src="/assets/profile-pic.png"
        alt="Imagen de perfil"
      />
      {name}
    </Button>
  )
}

export default ProfileButton
