import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Portifolio from './paginas/Portifolio';
import Sobre from './paginas/Sobre';
import Valores from './paginas/Valores';

import './App.css';

function Inicio() {
  const navigate = useNavigate();
  return (
    <>
      <div className="inicio">
        <img src="/imagens/thialita.jpeg" className="fotoThialita" />
      </div>
      <div className="apresentacao">
        <h1>Thiálita Grigorio</h1>
        <p className="apresentacao2">NAIL DESIGNER</p>
        <p className="esmaltacao">Esmaltação em gel</p>
        <p className="along">Alongamento</p>
      </div> <div className="containerBotoes">
        <div className="botoes">
          <button id="portifolio" onClick={() => navigate('/portifolio')}>
            PORTIFÓLIO
          </button>

          <button id="valores" onClick={() => navigate('/valores')}>
            TABELA DE VALORES
          </button>

          <button id="contato" onClick={() => window.open('https://wa.me/5588982178746', '_blank')}>
            FALE COMIGO
          </button>

          <button id="sobre" onClick={() => navigate('/sobre')}>
            SOBRE MIM
          </button>
        </div>
      </div>
    </>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/valores" element={<Valores />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
