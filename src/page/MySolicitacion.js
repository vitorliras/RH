import React from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom';

function MySolicitacion() {
  const { userName } = useParams();

  return (
    <>
      <Header userName={userName!="null" || !userName ? userName : ""}  />
      <div className='container'>

        <h1>
        MySolicitacion
        </h1>
      </div>
    </>
  )
}

export default MySolicitacion