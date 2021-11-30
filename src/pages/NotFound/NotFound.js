import './NotFound.css'

const NotFound = () => {
  return (
    <div>
      <img className="notFoundImg" src="/assets/elsa.gif" alt="Elsa" />
      <h2 className="notFoundTitle">
        ¡Oops! <br /> No encontramos lo que buscabas
      </h2>
    </div>
  )
}

export default NotFound
