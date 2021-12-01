import Elsa from '../../components/Elsa/Elsa'
import Header from '../../components/Header/Header'

const NotFound = ({ handlerMenu }) => {
  return (
    <>
      <Header handlerMenu={handlerMenu}></Header>
      <main className="mainAreaContent">
        <Elsa>
          ¡Oops! <br /> No encontramos lo que buscabas
        </Elsa>
      </main>
    </>
  )
}

export default NotFound
