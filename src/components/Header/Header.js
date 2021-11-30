import './Header.css'
const Header = ({ handlerMenu, children }) => {
  return (
    <header class="headerMainArea">
      <button onClick={handlerMenu} className="btnMenu">
        <img src="/assets/menu.svg" alt="Menu" />
      </button>
      {children}
    </header>
  )
}

export default Header
