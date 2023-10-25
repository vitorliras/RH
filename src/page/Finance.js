import React from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom';

function Finance() {
  const { userName } = useParams();

  return (
    <div>
      <Header userName={userName != "null" || !userName ? userName : ""} />

      <div className='container'>
        <h1>

          Finance
        </h1>

      </div>
    </div>
  )
}

export default Finance