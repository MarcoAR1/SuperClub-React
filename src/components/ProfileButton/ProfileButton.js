import { useNavigate } from 'react-router'
import useDarkMode from '../../hooks/useDarkMode'
import './ProfileButton.css'

const ProfileButton = ({ name, link, handlerAllSlideLinks, isDark }) => {
  useDarkMode()
  const navigate = useNavigate()

  const handlerProfileBtn = () => {
    handlerAllSlideLinks && handlerAllSlideLinks(isDark)
    navigate(link)
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

ProfileButton.defaultProps = {
  handlerProfileBtn: null,
  isDark: false
}

export default ProfileButton
