import './Elsa.css'

const Elsa = ({ children }) => {
  return (
    <div className="elsaContainer">
      <img className="elsaImg" src="/assets/elsa.gif" alt="Elsa" />
      <h2 className="elsaTitle">{children}</h2>
    </div>
  )
}

export default Elsa
