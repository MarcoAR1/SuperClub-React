import { useNavigate } from 'react-router'
import useDarkMode from '../../hooks/useDarkMode'
import './ProfileButton.css'

const ProfileButton = ({ name, link, handlerAllSlideLinks, isDark, img }) => {
  useDarkMode()
  const navigate = useNavigate()

  const handlerProfileBtn = () => {
    handlerAllSlideLinks && handlerAllSlideLinks(isDark)
    navigate(link)
  }

  return (
    <div
      className="profileBtn"
      style={{
        width: '100%'
      }}
      onClick={handlerProfileBtn}
    >
      <img
        className="profileImg"
        src={img || '/assets/profile-pic.png'}
        alt="Imagen de perfil"
      />
      {name}
    </div>
  )
}

ProfileButton.defaultProps = {
  handlerProfileBtn: null,
  isDark: false
}

export default ProfileButton
