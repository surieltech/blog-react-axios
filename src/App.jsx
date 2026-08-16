//components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'

import { Outlet } from "react-router-dom"
import './App.css'

function App() {
  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes pela sua compra! Avalie o produto no formulario abaixo:</p>
      </div>
      <div className="form-container">
        <p>Etapas</p>
        <form>
          <div className="inputs-container"></div>
          <div className="actions">
            <button type="button">
              <GrFormPrevious></GrFormPrevious>
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext></GrFormNext>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App