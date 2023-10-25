import React from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom';

function InternComunicate() {
  const { userName } = useParams();

  return (
    <>
      <Header userName={userName != "null" || !userName ? userName : ""} />

      <div className='container'>

        <h1>
          InternComunicate
        </h1>
      </div>
    </>
  )
}

export default InternComunicate