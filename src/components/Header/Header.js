import useDarkMode from '../../hooks/useDarkMode'
import './Header.css'
const Header = ({ handlerMenu, children }) => {
  useDarkMode()
  
  return (
    <header className="headerMainArea">
      <button onClick={handlerMenu} className="btnMenu">
        <img src="/assets/menu.svg" alt="Menu" />
      </button>
      {children}
    </header>
  )
}

export default Header
