import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Slide from '../Components/Slide';

function Home() {
  const { userName } = useParams();

  
  return (
    <>
        <Header userName={userName != "null" || !userName ? userName : ""} />

      <div id="home" className="">
        <Slide />
      </div>
    </>
  );
}

export default Home;





