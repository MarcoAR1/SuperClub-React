import { useRef } from 'react'
import MainArea from './components/MainArea/MainArea'
import SideBar from './components/SideBar/SideBar'
import './App.css'

function App() {
  const sideBar = useRef()
  const handlerMenu = () => {
    sideBar.current.classList.add('sideBarOpen')
    sideBar.current.focus()
  }

  const closeMenu = () => {
    sideBar.current.classList.add('sideBarClose')
    setTimeout(() => {
      sideBar.current.classList.remove('sideBarClose')
      sideBar.current.classList.remove('sideBarOpen')
    }, 200)
  }

  return (
    <div className="sideBarMainAreaContainer">
      <SideBar ref={sideBar} handlerMenu={handlerMenu} closeMenu={closeMenu} />
      <MainArea handlerMenu={handlerMenu} />
    </div>
  )
}

export default App
