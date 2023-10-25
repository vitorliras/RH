import React from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom';

function CarrerPlan() {
  const { userName } = useParams();

  return (
    <div>
      <Header userName={userName != "null" || !userName ? userName : ""} />

      <div className='container'>
        <h1>

          CarrerPlan
        </h1>

      </div>
    </div>
  )
}

export default CarrerPlan