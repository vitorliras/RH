import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Slide from '../Components/Slide';

function Home() {
  const location = useLocation();
  const userName = location.state && location.state.userName;

  return (
    <>
      <Header userName={userName} /> {/* Passe o nome do usuário para o componente Header */}
      <div id="home" className="">
        <Slide userName={userName}  />
      </div>
    </>
  );
}

export default Home;





