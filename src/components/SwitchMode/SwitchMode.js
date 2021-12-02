import { useRef } from 'react'
import useDarkMode from '../../hooks/useDarkMode'
import './SwitchMode.css'

const SwitchMode = () => {
  const switchMode = useRef()
  const { toDark, toLight } = useDarkMode(switchMode)
  const handlerSwitchMode = () => {
    const isDark = switchMode.current.checked
    if (isDark) {
      localStorage.setItem('preferedTheme', 'dark')
      toDark()
    } else {
      localStorage.setItem('preferedTheme', 'light')
      toLight()
    }
  }
  return (
    <div>
      <label className="switch">
        <input ref={switchMode} onChange={handlerSwitchMode} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default SwitchMode
