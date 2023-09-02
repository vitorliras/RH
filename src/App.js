import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './stylesheets/header.css'
import './stylesheets/login.css'

import Home from './page/Home';
import Calendar from './page/Calendar';
import CarrerPlan from './page/CarrerPlan';
import Finance from './page/Finance';
import MyProfile from './page/MyProfile';
import MyTeam from './page/MyTeam';
import InternComunicate from './page/InternComunicate';
import MySolicitacion from './page/MySolicitacion';
import Login from './page/Login';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
  
              <Route path='/'  element={<Home/>}/>
              <Route path='/CalendarioAnual' element={<Calendar />}/>
              <Route path="/PlanoCarreira" element={<CarrerPlan />}/>
              <Route path='/Financeiro' element={<Finance />}/>
              <Route path='/MeusDados' element={<MyProfile />}/>
              <Route path="/MinhaEquipe" element={<MyTeam />}/>
              <Route path='/ComunicadosInternos' element={<InternComunicate />}/>
              <Route path='/MinhasSolicitacoes' element={<MySolicitacion />}/>
              <Route path='/Login' element={<Login />}/>

  
        </Routes>
  
        </BrowserRouter>
    </div>
  );
}

export default App;
