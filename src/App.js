import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';


import './stylesheets/header.css'
import './stylesheets/login.css'
import './stylesheets/slide.css'
import './stylesheets/table.css'; 


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
  
              <Route path='/:userName'  element={<Home />}/>
              <Route path='/CalendarioAnual/:userName?' element={<Calendar />}/>
              <Route path="/PlanoCarreira/:userName?" element={<CarrerPlan />}/>
              <Route path='/Financeiro/:userName?' element={<Finance />}/>
              <Route path='/MeusDados/:userName?' element={<MyProfile />}/>
              <Route path="/MinhaEquipe/:userName?" element={<MyTeam />}/>
              <Route path='/ComunicadosInternos/:userName?' element={<InternComunicate />}/>
              <Route path='/MinhasSolicitacoes/:userName?' element={<MySolicitacion />}/>
              <Route path='/' element={<Login />}/>
  
        </Routes>
  
        </BrowserRouter>
    </div>
  );
}

export default App;
