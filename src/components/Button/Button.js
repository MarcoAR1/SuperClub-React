import './Button.css'

const Button = ({ children, classNameButton }) => {
  return <button className={'btn ' + classNameButton}>{children}</button>
}

Button.defaultProps = {
  classNameButton: ''
}

export default Button
