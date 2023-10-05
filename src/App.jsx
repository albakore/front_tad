import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import MisTramites from './pages/MisTramites/MisTramites'
import MisObras from './pages/MisObras/MisObras'
import Notificaciones from './pages/Notificaciones/Notificaciones'
import Apoderados from './pages/Apoderados/Apoderados'
import ConsultarTramites from './pages/ConsultarTramites/ConsultarTramites'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    
      <Routes>
        <Route element={<Inicio/> } path='/'/>

        <Route element={<MisTramites/>} path='/misTramites'/>
        
        <Route element={<MisObras/>} path='/misObras'/>

        <Route element={<Notificaciones/>} path='/notificaciones'/>
        <Route element={<Apoderados/>} path='/apoderados'/>
        <Route element={<ConsultarTramites/>} path='/consultarTramites'/>

        <Route element={ <NotFound/> } path='*'/>

      </Routes>

   
  )
}

export default App