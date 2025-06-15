import { Route, Routes } from 'react-router-dom'
import { Principal } from './paginas/Principal'
import { Peliculas } from './paginas/Peliculas'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Principal/>}/>
      <Route path="Peliculas" element={<Peliculas/>}/>
    </Routes>
  )
}

export default App
