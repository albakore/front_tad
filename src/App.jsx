import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import MisTramites from './pages/MisTramites/MisTramites'
import MisObras from './pages/MisObras/MisObras'
import Notificaciones from './pages/Notificaciones/Notificaciones'
import Apoderados from './pages/Apoderados/Apoderados'
import ConsultarTramites from './pages/ConsultarTramites/ConsultarTramites'
import NotFound from './pages/NotFound/NotFound'
import EnCurso from './pages/MisTramites/EnCurso/EnCurso'
import TareasPendientes from './pages/MisTramites/TareasPendientes/TareasPendientes'
import PagosPendientes from './pages/MisTramites/PagosPendientes/PagosPendientes'
import Pagados from './pages/MisTramites/Pagados/Pagados'
import Borradores from './pages/MisTramites/Borradores/Borradores'
import Finalizados from './pages/MisTramites/Finalizados/Finalizados'
import TramitesExternos from './pages/MisTramites/TramitesExternos/TramitesExternos'

function App() {

  return (
    
      <Routes>
        <Route element={<Inicio/> } path='/'/>

        <Route element={<MisTramites><EnCurso/></MisTramites>} path='/misTramites/enCurso'/>
          <Route element={<MisTramites><TareasPendientes/></MisTramites>} path='/misTramites/tareasPendientes'/>
          <Route element={<MisTramites><PagosPendientes/></MisTramites>} path='/misTramites/pagosPendientes'/>
          <Route element={<MisTramites><Pagados/></MisTramites>} path='/misTramites/pagados'/>
          <Route element={<MisTramites><Borradores/></MisTramites>} path='/misTramites/borradores'/>
          <Route element={<MisTramites><Finalizados/></MisTramites>} path='/misTramites/finalizados'/>
          <Route element={<MisTramites><TramitesExternos/></MisTramites>} path='/misTramites/tramitesExternos'/>

        
        <Route element={<MisObras/>} path='/misObras'/>

        <Route element={<Notificaciones/>} path='/notificaciones'/>
        <Route element={<Apoderados/>} path='/apoderados'/>
        <Route element={<ConsultarTramites/>} path='/consultarTramites'/>

        <Route element={ <NotFound/> } path='*'/>

      </Routes>

   
  )
}

export default App