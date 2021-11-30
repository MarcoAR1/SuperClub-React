import "./Header.css"
const Header = ({handlerMenu}) => {
    return (
    <header  class="headerMainArea">
        <button onClick={handlerMenu} className="btnMenu">
            <img src="/assets/menu.svg" alt="Menu" />
        </button>
    </header>
    )
}

export default Header
