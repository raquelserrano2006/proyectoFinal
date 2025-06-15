import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BarraTitulo } from './Componentes/BarraTitulo.jsx'
import { BarraNavegacion } from './Componentes/BarraNavegacion.jsx'
import { Footer } from './Componentes/Footer.jsx'
import { Publicidad } from './Componentes/Publicidad.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div>
      <div className="min-h-screen flex flex-col">
        <BarraTitulo />
        <BarraNavegacion />
        <App />

        <div className="  grid grid-cols-2 bg-gray-500">
          <Footer />
          <Publicidad />
        </div>
      </div>
    </div>


  </BrowserRouter>
)
