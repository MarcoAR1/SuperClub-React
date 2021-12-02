import useDarkMode from '../../hooks/useDarkMode'
import './Header.css'
const Header = ({ handlerMenu, children, style }) => {
  useDarkMode()

  return (
    <>
      <header className="headerMainArea" style={style}>
        <button onClick={handlerMenu} className="btnMenu">
          <img src="/assets/menu.svg" alt="Menu" />
        </button>
        {children}
      </header>
    </>
  )
}

export default Header
